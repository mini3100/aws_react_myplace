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

export const SViewBtn = (isSelected) => 
css`
    border-radius: 5px;
    padding: 0 13px;
    background: #ffffff;
    box-shadow: 0 2px 6px rgba(0,0,0,.06);
    font-size: 15px;
    font-weight: 500;
    height: 42px;
    letter-spacing: -.5px;
    line-height: 42px;
    ${isSelected && "background-image: linear-gradient(90deg,#2d8dee,#2da1ee);box-shadow: 0 2px 6px 0 rgba(37,146,255,.35);font-weight: 700;color: #fff;"}
`

export const SRightBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 16px 12px 20px;
    vertical-align: top;
`

export const SDivider = css`
    padding-left: 8px;
    width: 2px;
    height: 24px;
    border-left: 2px solid #e2e5e8;
    border-radius: 2px;
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