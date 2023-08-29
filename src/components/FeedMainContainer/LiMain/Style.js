import { css } from "@emotion/react";

export const SImgLayout = css`
    position: relative;
    margin-top: 2px;
    border-radius: 8px;
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
    position: relative;
    display: flex;
    flex: 1 1;
    flex-direction: column;
    align-items: center;
    -webkit-box-align: center;
    width: 100%;
    height: 100%;
`;

export const SImg = (url) => 
css`
    background-image: url(${url});
    position: relative;
    display: flex;
    flex: 1 1;
    border-radius: 8px;
    width: 100%;
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
