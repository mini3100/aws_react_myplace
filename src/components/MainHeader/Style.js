import { css } from "@emotion/react";

export const SLayout = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #f2f4f6;
    border-color:rgba(0,0,1,.04);
    padding: 8px 18px 8px 15px;
    height: 53px;
    background-color: #06b495;
`;

export const STitleContainer = css`
    display: flex;
    flex-grow: 1;
`;

export const SLogoBox = css`
    border: none;
    padding: 8px 5px 7px;
`;

export const SLogo = css`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    width: 21px;
    height: 21px;
    & * {
        font-size: 10px;
        color: #06b495;
    }
`

export const STitleBox = css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 3px;
    padding: 11px 2px 10px;
    height: 36px;
`

export const STitle = css`
    font-size: 15px;
    color: white;
`

export const SCouponBtn = css`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    & * {
        color: white;
    }
`;

export const SCouponIcon = css`
    font-size: 43px;
`

export const SCouponText = css`
    position: absolute;
    top: 15;
    right: 15;
    font-size: 12px;
    font-weight: 700;
`

export const SMenuBtn = css`
    margin-right: -10px;
    padding: 10px;
    & * {
        font-size: 20px;
        color: white;
    }
`;