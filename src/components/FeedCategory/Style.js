import { css } from "@emotion/react";

export const SLayout = css`
    width: 100%;
    max-width: 720px;
    margin: 0 auto;
    padding: 0 20px;
`;

export const SContainer = css`
    margin: 0 -20px;
    padding: 10px 0 2px;
`;

export const SBox = css`
    position: relative;
    height: 100%;
    white-space: nowrap;
`;

export const SViewPort = css`
    position: relative;
    touch-action: pan-y;
    user-select: none;
    -webkit-user-drag: none;
    overflow: hidden;
    &:hover > button {
        visibility: visible;
        z-index: 100;
        opacity: 1;
    }
`;

export const SCategoryBox = (movePx) => 
css`
    transition: all .5s;
    transform: translate(${movePx + "px"});
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;

    & span:first-child {
        padding-left: 20px;
    }

    & span:last-child {
        padding-right: 20px;
    }

    & ~ .left-btn {
        ${(movePx === 0) ? "visibility: hidden !important;" : ""}
        left: 0;
        background: linear-gradient(270deg,hsla(0,0%,100%,0),#fff 28px);
    }
    & ~ .right-btn {
        ${(movePx === -1203) ? "visibility: hidden !important;" : ""}
        right: 0;
        background: linear-gradient(90deg,hsla(0,0%,100%,0),#fff 28px);
    }
`;

export const SBtnBox = css`
    padding-left: 6px;
    vertical-align: top;
`;

export const SBtn = (isSelected) =>
css`
    border: 1px solid #eaeef2;
    border-radius: 19px;
    padding: 0 13px;
    font-size: 14px;
    font-weight: 500;
    line-height: 34px;
    letter-spacing: -0.3px;
    color: #666;
    ${isSelected && "font-weight: 600; border-color: #424242; background: #424242; color: #fff;" }
`;

export const SMoveBox = css`
    transition: opacity .2s;
    opacity: 0; //투명도

    visibility: hidden;
    z-index: -10;

    position: absolute;
    top: 0;
    bottom: 0;

    width: 46px;

    .left-span {
        left: 4px;
    }

    .right-span {
        right: 4px;
    }
`;

export const SMoveBtn = css`
    transform: translateY(-50%);
    position: absolute;
    top: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    width: 28px;
    height: 28px;
    background: none;
    box-shadow: none;
    & * {
        color: #666;
    }
`;
