import { css } from "@emotion/react";

export const SImgLayout = css`
    position: relative;
    margin-top: 2px;
    padding-top: 360px;
    overflow: hidden;
    width: 680px;
    height: 360px;
`;

export const SImgContainer = css`
    padding: 0;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

export const SImgBox = css`
    display: flex;
    height: 100%;

    & > div:nth-child(2) {
        margin-left: 2px;
    }
    & > div:first-child:nth-last-child(1) {
        flex: none;
        width: 100%;
    }
    & > div:first-child:nth-last-child(1) > div {
        border-radius: 8px;
    }
    & > div:first-child:nth-last-child(2) {
        flex: none;
        width: 59%;
    }
`;

export const SLeftBox = css`
    & > div {
        border-radius: 8px 0 0 8px;
    }
`;

export const SRightBox = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    & > div:first-child:nth-last-child(1) {
        height: 100%;
    }

    & > div:first-child {
        border-top-right-radius: 8px;
    }

    & > div:last-child:first-child {
        border-bottom-right-radius: 8px;
    }

    & > div:first-child:nth-last-child(2) {
        height: 50%;
    }

    & > div:last-child:nth-child(2) {
        margin-top: 2px;
        border-bottom-right-radius: 8px;
    }
`;

export const SImg = (url) => 
css`
    background-image: url(${url});
    position: relative;
    display: flex;
    flex: 1 1;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
`;

export const SLocationContainer = css`
    position: absolute;
    right: 76px;
    bottom: 5px;
    left: 5px;
    text-align: left;
`;

export const SLocationBox = css`
    display: inline-flex;
    border-radius: 4px;
    padding: 0 4px;
    vertical-align: top;
    max-width: 100%;
    font-size: 12px;
    font-weight: 700;
    line-height: 20px;
    background: rgba(0,0,0,.6);
    letter-spacing: -.3px;

    & * {
        color: #fff;
    }
`;

export const SLocationIcon = css`
    margin: 5px 2px 0 0;
    width: 12px;
    height: 12px;
`;

export const SCommentBox = css`
    margin-top: 10px;
`;

export const SComment = css`
    text-decoration: none;
    font-size: 15px;
    letter-spacing: -1px;
    line-height: 22px;
    word-break: break-all;
    max-height: none;
    color: #666;
`;

export const SHashTagLayout = css`
    margin: 6px 0 -7px;
`;

export const SHashTagContainer = css`

`;

export const SHashTagBox = css`
    display: inline-block;
    vertical-align: top;
    margin: 0 4px 7px 0;
    padding: 4px 7px;
    border-radius: 4px;
    background: #f5f7f8;
    font-size: 13px;
    color: #666;
    line-height: 18px;
`;

export const SHashTagImg = css`
    margin-right: 5px;
    width: 18px;
    height: 18px;
    vertical-align: top;
`;
