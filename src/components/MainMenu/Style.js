import { css } from "@emotion/react";

export const SLayout = css`
    padding: 0 20px;
    background: #06b495;
    box-shadow: 0 12px 10px -10px rgba(0,0,0,.03);
`;

export const SContainer = css`
    display: flex;
    justify-content: space-between;
    max-width: 375px;
    margin: 0 auto;
    white-space: nowrap;
`;

export const SMenuBox = (isSelected) => 
css`
    position: relative;
    padding: 14px 5px;
    font-size: 17px;
    color: #ffffffb3;
    ${isSelected && "font-weight: 800; color: white;"}
    
`

export const SSelectedMenu = css`
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 3px;
    border-radius: 2px;
    background: #fff;
    content: "";
`;