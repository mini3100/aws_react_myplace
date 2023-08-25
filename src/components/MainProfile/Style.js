import { css } from "@emotion/react";

export const SLayout = css`
    padding: 20px 0 11px;
    background-color: #06b495;
    & * {
        color: white;
    }
`;

export const SContainer = css`
    margin: 0 auto;
    padding: 0 20px;
    max-width: 375px;
`;

export const SProfileBox = css`
    display: flex;
    align-items: center;
    padding: 0;
`;

export const SProfileImgBox = css`
    margin-right: 29px;
    border: 2px solid white;
    border-radius: 50px;
    width: 64px;
    height: 64px;
    overflow: hidden;
`

export const SProfileImg = css`
    width: 100%;
    height: 100%;
`

export const SLoginBox = css`
    font-size: 17px;
`

export const SRightIcon = css`
    margin: 6px 0 0 5px;
    font-size: 11px;
`;

export const SProfileBtnBox = css`
    display: flex;
    margin-top: 18px;
`

export const ReviewBtn = css`
    width: 226px;
`

export const MissionBtn = css`
    margin-left: 7px;
    width: 102px;
`

export const SProfileIcons = css`
    vertical-align: top;
    margin: 3px 5px 0 0;
    font-size: 17px;
    font-weight: 700;
`;

export const SProfileBtn = css`
    width: 100%;
    height: 38px;
    border-radius: 8px;
    background: #0cc5a4;
    box-shadow: 0 2px 5px 0 rgba(0,107,88,.1);
    font-size: 15px;
    font-weight: 700;
`