import { Card, CardHeader, Select, SelectItem, Button, CardBody } from '@nextui-org/react'
import LightModeIcon from '@mui/icons-material/LightMode';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CodeMirror from '@uiw/react-codemirror';
import { dracula } from '@uiw/codemirror-themes-all';
import { cpp } from '@codemirror/lang-cpp';
import { java } from '@codemirror/lang-java';
import { python } from '@codemirror/lang-python';

// import {lang} from '@uiw/codemirror-extensions-langs'

import { useState } from 'react';


const Compiler = () => {

    const [code, setCode] = useState('');
    const [language, setLanguage] = useState('c');
    const [output, setOutput] = useState('');
    const [outputStatusUrl, setoutputStatusUrl] = useState('')
    const [outputUrl, setoutputUrl] = useState('')

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
                body: JSON.stringify({codeStatusBody}),
                
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
        <section className="h-screen flex w-screen bg-black">
            <Card radius='none' className='w-3/6 p-0 h-full bg-white'>
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
                        height='41rem'
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
            <Card radius='none' className='w-3/6 p-0 h-full bg-white'>
                <CardHeader className='h-18 items-center bg-gray-900 '>
                    <div className="main px-4 h-12 p-2 text-center text-white ">Output</div>
                </CardHeader>
                <CardBody>
                    {console.log(output)}
                </CardBody>
            </Card>

        </section>

    );
}

export default Compiler;