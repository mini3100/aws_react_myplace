import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import { BsThreeDotsVertical } from 'react-icons/bs'
import { PiSirenLight, PiProhibitLight } from 'react-icons/pi';
import { useRecoilState } from 'recoil';
import { isGlobalMenuShow } from '../../../store/menuStore';

function LiHeader({ header, itemId }) {
    const [ isMenuShow, setIsMenuShow ] = useState(false);
    const [ isGlobal, setIsGlobalMenuShow ] = useRecoilState(isGlobalMenuShow);
    
    const handleMenuBtnOnClick = (e) => {
        e.stopPropagation();
        if(!isGlobal) {
            setIsMenuShow(true);
            return;
        }
        if(isGlobal && isMenuShow) {
            setIsMenuShow(false);
            return;
        }
        setIsMenuShow(false);
        setIsGlobalMenuShow(false);
        console.log(isMenuShow);
        console.log(isGlobal);
    }

    useEffect(() => {
        document.onclick = () => {
            setIsMenuShow(false);
            console.log(isMenuShow);
            console.log(isGlobal);
        }
    }, [isMenuShow])

    useEffect(() => {
        if(isMenuShow && !isGlobal) {
            setIsMenuShow(false);
            console.log(isMenuShow);
            console.log(isGlobal);
        }
    }, [isMenuShow, isGlobal])

    return (
        <div css={S.SLayout}>
            <button css={S.SUserBox}>
                <div css={S.SUserImgLayout}>
                    <div css={S.SUserImgContainer}>
                        <div css={S.SUserImgBox}>
                            <img css={S.SUserImg} src={header.userImg} width="100%" height="100%" />
                        </div>
                    </div>
                </div>
                <div css={S.UserInfoBox}>
                    <div css={S.SUserName}>{header.username}</div>
                    <div css={S.SUserInfoBox}>
                        <span css={S.SUserInfo}>사진리뷰 {header.reviewCount}・</span>
                        <span css={S.SUserInfo}>팔로워 {header.follower}</span>
                    </div>
                </div>
            </button>
            <button css={S.FollowBtn}>팔로우</button>
            <div css={S.SMenuBox}>
                <button css={S.SMenuBtn} onClick={handleMenuBtnOnClick}><BsThreeDotsVertical/></button>
                {isMenuShow && (
                    <div css={S.SMenuList}>
                        <button css={S.SMenuItem}>리뷰/리뷰어 신고<PiSirenLight css={S.SMenuIcon} /></button>
                        <button css={S.SMenuItem}>리뷰어 차단<PiProhibitLight css={S.SMenuIcon} /></button>
                    </div>
                )}
                
            </div>
        </div>
    );
}

export default LiHeader;