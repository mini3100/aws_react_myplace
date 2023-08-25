import { css } from "@emotion/react";

export const SLayout = css`
    margin: 0 auto;
    padding: 0 20px;
    width: 100%;
    max-width: 720px;
`;

export const SContainer = css`
    margin: 0 -20px;
`;

export const SButtons = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 6px 0;
    
`
export const SLeftBox = css`
    display: flex;
    align-items: center;
    & div {
        vertical-align: top;
        padding: 6px 0 6px 8px;
    }
    & div:first-child {
        padding-left: 20px;
    }
    & div:last-child {
        padding-right: 20px;
    }
`

export const SViewBtn = css`
    border-radius: 5px;
    padding: 0 13px;
    background: #ffffff;
    box-shadow: 0 2px 6px rgba(0,0,0,.06);
    font-size: 15px;
    font-weight: 500;
    height: 42px;
`

export const SRightBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 16px 12px 20px;
    vertical-align: top;
`

export const SDivider = css`
    width: 2px;
    height: 24px;
    border-radius: 2px;
    background-color: #e2e5e8;
`;

export const SLocationBtn = css`
    font-size: 15px;
    font-weight: 600;
    &, & * {
        color: #7f8daa;
    }
`

export const SLocationIcon = css`
    margin-right: 4px;
`;