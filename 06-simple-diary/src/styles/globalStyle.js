import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
    }

    .sr-only {
        position: absolute;
        top: -9999px;
        left: -9999px;
        z-index: -1;
        width: 1px;
        height: 1px;
        overflow: hidden;
        visibility: hidden;
    }

    button:hover {
        cursor: pointer;
    }

    img {
        display: block;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style-type: none;
        padding-left: 0;
    }
`;

export default GlobalStyle;
