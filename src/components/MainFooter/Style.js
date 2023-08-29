import { css } from "@emotion/react";

export const SLayout = css`
    padding: 42px 0 36px;
    background: #f9f9f9;
    text-align: center;
    button {
        padding: 0;
        letter-spacing: -.1px;
        vertical-align: top;
    }
    & > div {
        height: 20px;
    }
`;

export const SDivider = css`
    height: 13px;
    display: inline-block;
    vertical-align: top;
    width: 1px;
    margin: 2px 9px 0;
    background: #e1e1e1;
    content: "";
`;

export const SFooterTop = css`
    & button {
        font-size: 14px;
        font-weight: 500;
        color: #8f8f8f;
        line-height: 17px;
    }
`;

export const SFooterMiddle = css`
    margin-top: 12px;
    & button {
        font-size: 12px;
        color: #666;
        line-height: 15px;
    }
`;

export const SFooterBottom = css`
    margin-top: 10px;
    & button {
        font-size: 12px;
        color: #666;
        line-height: 15px;
    }
`;