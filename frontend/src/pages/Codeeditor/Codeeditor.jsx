import { Card, CardHeader, Image, code } from "@nextui-org/react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Split from 'react-split'
import { useState, useCallback } from "react";
import { cedit } from "./code";
import CodeMirror from '@uiw/react-codemirror';
import { dracula } from '@uiw/codemirror-themes-all';
import { csslogo, htmllogo, jslogo } from '../../assets/images/cedit/index'
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { javascript } from '@codemirror/lang-javascript';
import './cedit.css'

import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";



function Codeeditor() {

    const [html_edit, setHtml_Edit] = useState('');
    const [css_edit, setCss_Edit] = useState('');
    const [js_edit, setJs_Edit] = useState('');

    //* Html onchange handler 
    const onChangeHtml = useCallback((value) => {
        setHtml_Edit(value);
    }, []);

    //* Css onchange handler 
    const onChangeCss = useCallback((value) => {
        setCss_Edit(value);
    }, []);

    //* JavaScript onchange handler 
    const onChangeJavaScript = useCallback((value) => {
        setJs_Edit(value);
    }, []);

    //* Create Html Document
    const srcCode = `
      <html>
      <body>${html_edit}</body>
      <style>${css_edit}</style>
      <script>${js_edit}</script>
      </html>`

    return (
        
            <Split className="h-screen  mx-auto" direction="vertical">
                <Split className="flex flex-wrap w-100">


                    <Card className="w-1/3 bg-black "
                        radius="none">
                        <CardHeader className="bg-gray-900 h-10 flex justify-between" >
                            <Image src={htmllogo} width={45} />

                            <Dropdown>
                                <DropdownTrigger>
                                    <ArrowDropDownIcon className="stroke-slate-300" sx={{ fontSize: 40 }} />
                                </DropdownTrigger>
                                <DropdownMenu aria-label="Static Actions">
                                    <DropdownItem key="new">New file</DropdownItem>
                                    <DropdownItem key="copy">Copy link</DropdownItem>
                                    <DropdownItem key="edit">Edit file</DropdownItem>
                                    <DropdownItem key="delete" className="text-danger" color="danger">
                                        Delete file
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </CardHeader>
                        <CodeMirror
                            value={html_edit}
                            height="20rem"
                            onChange={onChangeHtml}

                            extensions={[html(true)]}
                            theme={dracula}
                            basicSetup={{
                                foldGutter: true,
                                dropCursor: true,
                                allowMultipleSelections: true,
                                indentOnInput: false,
                            }}
                        />
                    </Card>

                    <Card className="w-1/3 bg-black "
                        radius="none">
                        <CardHeader className="bg-gray-900 h-10 flex justify-between" >
                            <Image src={csslogo} width={25} />

                            <Dropdown>
                                <DropdownTrigger>
                                    <ArrowDropDownIcon className="stroke-slate-300" sx={{ fontSize: 40 }} />
                                </DropdownTrigger>
                                <DropdownMenu aria-label="Static Actions">
                                    <DropdownItem key="new">New file</DropdownItem>
                                    <DropdownItem key="copy">Copy link</DropdownItem>
                                    <DropdownItem key="edit">Edit file</DropdownItem>
                                    <DropdownItem key="delete" className="text-danger" color="danger">
                                        Delete file
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </CardHeader>
                        <CodeMirror
                            value={css_edit}
                            height="20rem"
                            onChange={onChangeCss}
                            
                            extensions={[css(true)]}
                            theme={dracula}
                            basicSetup={{
                                foldGutter: true,
                                dropCursor: true,
                                allowMultipleSelections: true,
                                indentOnInput: false,
                            }}
                        />
                    </Card>

                    <Card className="w-1/3 bg-black "
                        radius="none">
                        <CardHeader className="bg-gray-900 h-10 flex justify-between" >
                            <Image src={jslogo} width={35} />

                            <Dropdown>
                                <DropdownTrigger>
                                    <ArrowDropDownIcon className="stroke-slate-300" sx={{ fontSize: 40 }} />
                                </DropdownTrigger>
                                <DropdownMenu aria-label="Static Actions">
                                    <DropdownItem key="new">New file</DropdownItem>
                                    <DropdownItem key="copy">Copy link</DropdownItem>
                                    <DropdownItem key="edit">Edit file</DropdownItem>
                                    <DropdownItem key="delete" className="text-danger" color="danger">
                                        Delete file
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </CardHeader>
                        <CodeMirror
                            className="bg-gray-900"
                            value={js_edit}
                            height="20rem"
                            onChange={onChangeJavaScript}

                            extensions={[javascript(true)]}
                            theme={dracula}
                            basicSetup={{
                                foldGutter: true,
                                dropCursor: true,
                                allowMultipleSelections: true,
                                indentOnInput: false,
                            }}
                        />
                    </Card>



                </Split>


                <div className="output h-3/6 w-100 bg-gray-900">
                    
                        <iframe srcDoc={srcCode} sandbox="allow-scripts"  style={{height:'100%'}} className="cResul w-screen">
                                 Code here
                        </iframe>
                    
                </div>



            </Split>

        



    );
}

export default Codeeditor;