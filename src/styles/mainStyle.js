import { css } from "@emotion/react";

export const SLayout = css`
    padding: 25px 20px;
    .timeline-container {
        background-image: linear-gradient(142deg,#55abab,#6fc2ac);
    }
    .review-container {
        background-image: linear-gradient(127deg,#717cea 6%,#4b81da 87%);
    }
`;

export const SContainer = css`
    margin: 0 auto;
    border-radius: 15px;
    width: 100%;
    max-width: 720px;
    min-height: 430px;
    padding: 34px 30px 40px;
    & * {
        text-align: center;
        color: #fff;
    }
`;

export const SFlagBox = css`
    width: 19px;
    height: 20px;
    margin: 0 auto 15px;
`;

export const SMainTextBox = css`
    font-size: 20px;
    line-height: 26px;
    letter-spacing: -1px;
    & strong {
        font-weight: 900;
    }
`;

export const SSubTextBox = css`
    margin-top: 5px;
    color: #bbedee;
    font-size: 15px;
    letter-spacing: -.5px;
    line-height: 23px;
`;

export const SImgBox = css`
    margin-top: 27px;
`;

export const SBtnBox = css`
    margin-top: 22px;
    & button {
        border: 1px solid rgba(255,255,255,.3);
        border-radius: 22px;
        padding: 9px 0;
        line-height: 26px;
        font-size: 16px;
        color: #fff;
        width: 143px;
    }
`;