import { css } from "@emotion/react";

export const SLayout = css`
    display: flex;
    align-items: center;
    height: 65px;
`;

export const SUserBox = css`
    display: flex;
    align-items: center;
    flex: 1 1;
    margin: -10px;
    padding: 10px;
    text-align: left;
`;

export const SUserImgLayout = css`
    margin-right: 8px;
`;

export const SUserImgContainer = css`
    box-shadow: 0 3px 10px 0 rgba(0,0,0,.08);
    border-radius: 50%;
    width: 42px;
    height: 42px;
    overflow: hidden;
`;

export const SUserImgBox = css`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    display: block;
    overflow: hidden;
    position: relative;

    &::before {
        border: 2px solid #fff;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 10;
    }
`;

export const SUserImg = css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background-color: #fff;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
`;

export const UserInfoBox = css`
    margin-top: 3px;
`;

export const SUserName = css`
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 16px;
    font-weight: 700;
    color: #242424;
    line-height: 20px;
    letter-spacing: -.2px;
`;

export const SUserInfoBox = css`
    margin-top: 2px;
    line-height: 15px;
`;

export const SUserInfo = css`
    font-size: 13px;
    color: #8f8f8f;
    letter-spacing: -.2px;
`;

export const FollowBtn = css`
    width: 70px;
    height: 30px;
    border-radius: 4px;
    background: #eff6fe;
    font-size: 13px;
    font-weight: 600;
    color: #287cff;
    line-height: 30px;
    text-align: center;
`;

export const SMenuBox = css`
    position: relative;
    margin: 0 -12px 0 4px;
`;

export const SMenuBtn = css`
    width: 26px;
    height: 30px;
    & * {
        color: #b8b8b8;
    }
`;

export const SMenuList = css`
    position: absolute;
    top: 37px;
    right: 0;
    z-index: 2010;
    width: 184px;
    border: 1px solid #dee0e2;
    border-radius: 18px;
    background: #fff;
    & button:last-of-type {
        border-top: 1px solid #eaeef2;
    }
`;

export const SMenuItem = css`
    display: block;
    position: relative;
    width: 100%;
    height: 56px;
    padding-left: 17px;
    text-align: left;
    white-space: nowrap;
    font-size: 16px;
    color: #333;
`;

export const SMenuIcon = css`
    position: absolute;
    top: 0;
    right: 15px;
    bottom: 0;
    width: 18px;
    height: 18px;
    margin: auto;

    & * {
        color: #424242;
    }
`;