import { css } from "@emotion/react";

export const GSCommon = css`
    * {
        box-sizing: border-box;
        font-size: 14px;
        color: #242424;
    }
    html {
        background-color: #f9f9f9;
        width: 100%;
        height: 100%;
    }
    button {
        padding: 0;
        border: none;
        background-color: transparent;
        cursor: pointer;
    }
    *::-webkit-scrollbar {
        border: none;
        width: 6px;
        
    }

    *::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background-color: #ccc;
    }
`
