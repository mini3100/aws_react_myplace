import { css } from "@emotion/react";

export const SLayout = css`
    position: relative;
    overflow-anchor: none;
`;

export const SListBox = css`
    width: 100%;
    max-width: 720px;
    margin: 0 auto;
    padding: 16px 20px 28px;
`;

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

export const SImg = css`
    background-image: url(https://pup-review-phinf.pstatic.net/MjAyMzA4MjhfMTU5/MDAxNjkzMjA3NzI3MjMw.-V5r6HSz5IYTKpQruf0kF3rvUtACoP3VZeSK8UG2he4g.5_4r3Hoas4qJrchXw8WYYf3phfJZnNnHMgRazq48zRYg.JPEG/20230828_160348.jpg?type=f828_828_70_sharpen);
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

export const SReactionLayout = css`
    display: flex;
    position: relative;
    margin-top: 17px;
`;
export const SReactionContainer = css`
    display: flex;
    overflow: hidden;
    flex: 1 1;
    margin-right: 30px;
    white-space: nowrap;
`;
export const SReactionBox = css`
    flex: none;
    margin-left: 2px;
    font-size: 14px;
    font-weight: 500;
    color: #424242;
    line-height: 24px;
    text-align: left;
    letter-spacing: -.3px;
`;
export const SSmileIcon = css`
    margin-right: 6px;
    vertical-align: top;
    margin-left: -1px;
    & * {
        font-size: 22px;
    }
`;

export const SDateBox = css`
    flex: none;
    margin-top: 0;
    font-size: 13px;
    line-height: 24px;
    & * {
        color: #9a9a9a;
        letter-spacing: -1px;
    }
`;

export const SPlaceLayout = css`
    margin-top: 15px;
`;

export const SPlaceContainer = css`
    overflow: hidden;
    border: 1px solid #ecf0f2;
    border-radius: 8px;
`;

export const SPlaceBox = css`
    display: flex;
    align-items: center;
    position: relative;
    padding: 13px 16px 12px 15px;
`;

export const SPlace = css`
    overflow: hidden;
    flex: 1 1;
`;

export const SPlaceNameBox = css`
    display: flex;
    overflow: hidden;
`;

export const SPlaceName = css`
    display: inline-flex;
    vertical-align: top;
    max-width: 100%;
    & span {
        display: block;
        overflow: hidden;
        text-align: left;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 16px;
        font-weight: 700;
        letter-spacing: -.2px;
        color: #242424;
    }
`;

export const SRightIcon = css`
    flex: none;
    font-size: 12px;
    margin: 4px 0 0 0;
`;

export const SPlaceCategoryBox = css`
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 4px;
    font-size: 13px;
    line-height: 16px;
    & * {
        color: #8f8f8f;
    }
`;

export const SStoreBtnBox = css`
    margin: 2px 0 0 28px;
`;

export const SStoreBtn = css`
    width: 26px;
`;

export const SStarIcon = css`
    font-size: 20px;
    & * {
        color: #b8b8b8;
    }
`;

export const SStoreText = css`
    display: block;
    margin-top: 6px;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: -.4px;
    line-height: 13px;
    white-space: nowrap;
    color: #8f8f8f;
`;