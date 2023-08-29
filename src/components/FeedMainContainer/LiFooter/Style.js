import { css } from "@emotion/react";

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