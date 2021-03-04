import { create } from 'domain';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: #EDEDED;
        font-family: "Montserrat", sans-serif;
    }

    hr {
        margin: 2em auto;
        max-width: 30em;
        width: 80%;
        background-color: #ddd; 
        height: 1px; 
        border: 0
    }

    img {
        width: 30%;
        max-width: 9em;
        display: block;
        margin: 2em auto;
    }
`