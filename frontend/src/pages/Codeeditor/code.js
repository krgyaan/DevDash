import { csslogo, htmllogo, jslogo } from '../../assets/images/cedit/index'
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { javascript } from '@codemirror/lang-javascript';
import { useState } from 'react';



const cedit = [
    {
        index: 1,
        logo: htmllogo,
        name: 'html',
        discrip: '<html>\n<title></title>\n<body></body>\n</html>',
        width: 45,
        mode: html(true),

    },
    {
        index: 2,
        logo: csslogo,
        name: "css",
        discrip: '* {\n padding:0,\n margin:0\n}',
        width: 25,
        mode: css(true),
    },
    {
        index: 3,
        logo: jslogo,
        name: "js",
        discrip: 'console.log("Hello world")',
        width: 35,
        mode: javascript(true),
    },
]

export { cedit };