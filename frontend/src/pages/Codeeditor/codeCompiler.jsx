import { Card, CardHeader, Select, SelectItem, Button, CardBody } from '@nextui-org/react'
import LightModeIcon from '@mui/icons-material/LightMode';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CodeMirror from '@uiw/react-codemirror';
import { dracula } from '@uiw/codemirror-themes-all';
import { cpp } from '@codemirror/lang-cpp';
import { java } from '@codemirror/lang-java';
import { python } from '@codemirror/lang-python';



import { useState } from 'react';


const Compiler = () => {

    const [code, setCode] = useState('');
    const [language, setLanguage] = useState('c');
    const [output, setOutput] = useState('');
    const [outputStatusUrl, setoutputStatusUrl] = useState('');
    const [outputUrl, setoutputUrl] = useState('');
    const [indexValue, setIndexvalue] = useState(1)

    const handleLanguageChange = (newLanguage) => {
        setLanguage(newLanguage);

    };
    const handleCodeChange = (newCode) => {
        setCode(newCode);
    };

    const compileCode = async () => {

      

        const codeStatusBody = {
            lang: language.toUpperCase(),
            source: code,
            input: '',
            memory_limit: 243232,
            time_limit: 5,
            context: { id: 213121 },
            callback: '',
        };



        const apiUrl = 'https://api.hackerearth.com/v4/partner/code-evaluation/submissions';
        const secretKey = '826d54e2db47c5e1ebba191705dd00bfbcc9a61f';

        try {

            // Step 1: Submit code for evaluation
            const submissionResponse = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify({ codeStatusBody }),

            });
            console.log("step 1 cleaar")
            const submissionData = await submissionResponse.json();
            console.log(submissionData);
            setoutputStatusUrl(submissionData.status_update_url);

            // Step 2: Poll for evaluation status
            const statusResponse = await fetch(outputStatusUrl, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'client-secret': secretKey,
                },
            });

            const statusData = await statusResponse.json();
            console.log(statusData.result.run_status.output);
            setoutputUrl(statusData.result.run_status.output);
            setError(statusData.request_status.code);

            // Step 3: Fetch final output
            const finalOutputResponse = await fetch(outputUrl, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const finalOutput = await finalOutputResponse.text();
            setOutput(finalOutput);

            console.log(finalOutput);
        } catch (error) {
            console.error('Error during compilation:', error);
        }
    }








    return (
        <>
            <ul
                class="mb-5 flex list-none flex-row justify-center flex-wrap pl-0 lg:hidden "
                id="pills-tab"
                role="tablist"
                data-te-nav-ref>
                <li role="presentation" onClick={() => setIndexvalue(1)}>
                    <a
                        href="#card1"
                        className={indexValue === 1 ? "my-2 block rounded px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500  md:mr-4 bg-slate-400" : "my-2 block rounded px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 bg-neutral-100  md:mr-4"} id="pills-home-tab"
                        data-te-toggle="pill"
                        data-te-target="#card1"
                        data-te-nav-active
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                    >Code</a
                    >
                </li>
                <li role="presentation" onClick={() => setIndexvalue(2)}>
                    <a
                        href="#card2"
                        className={indexValue === 2 ? "my-2 block rounded px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500  md:mr-4 bg-slate-400" : "my-2 block rounded px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 bg-neutral-100  md:mr-4"}
                        id="pills-profile-tab"
                        data-te-toggle="pill"
                        data-te-target="#card2"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                    >Compile</a
                    >
                </li>
            </ul>
            <section className="h-screen flex w-screen bg-black">


                <Card radius='none' className={indexValue == 1?'lg:w-3/6 w-screen p-0 h-full z-10':'lg:w-3/6 w-screen p-0 h-full lg:bg-white z-10 hidden'}>
                    <CardHeader className='h-18 items-center flex justify-between bg-gray-900 '>
                        <div className="main px-4 h-12 p-2 text-center text-white ">Main</div>
                        <div className="buttons flex h-full gap-4">

                            <Select
                                value={language}
                                onChange={(e) => handleLanguageChange(e.target.value)}
                                label="Language"
                                size='sm'
                                className="w-40 p-0 h-full"
                            >
                                {console.log(language)}
                                <SelectItem key='cpp' value='cpp'>
                                    C++
                                </SelectItem>
                                <SelectItem key='python' value='python'>
                                    Python
                                </SelectItem>
                                <SelectItem key='java' value='java'>
                                    Java
                                </SelectItem>

                            </Select>
                            <Button className="border-none h-12" isIconOnly size='sm'>
                                <LightModeIcon />
                            </Button>
                            <Button className="border-none h-12" onClick={compileCode} isIconOnly size='sm'>
                                <PlayArrowIcon />
                            </Button>

                        </div>

                    </CardHeader>
                    <CardBody className='p-0'>
                        <CodeMirror
                            className='text-lg'
                            height='60rem'
                            theme={dracula}
                            value={code}
                            onChange={handleCodeChange}
                            extensions={language == 'cpp'
                                ? [cpp(true)]
                                : (language == 'python'
                                    ? [python(true)]
                                    : [java(true)])}
                        />
                    </CardBody>
                </Card>
                <Card radius='none' className={indexValue == 2 ? 'lg:relative lg:block lg:w-3/6 w-screen p-0 h-full bg-white':'lg:relative lg:w-3/6 w-screen p-0 h-full bg-white lg:block hidden'}>
                    <CardHeader className='h-18 items-center bg-gray-900 '>
                        <div className="main px-4 h-12 p-2 text-center text-white ">Output</div>
                    </CardHeader>
                    <CardBody>
                        {console.log(output)}
                    </CardBody>
                </Card>

            </section>
        </>
    );
}

export default Compiler;