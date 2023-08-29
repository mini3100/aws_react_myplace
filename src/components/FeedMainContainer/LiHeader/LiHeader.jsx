import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import { BsThreeDotsVertical } from 'react-icons/bs'
import { PiSirenLight, PiProhibitLight } from 'react-icons/pi';
import { useRecoilState } from 'recoil';

function LiHeader({ header, itemId }) {
    const [ isMenuShow, setIsMenuShow ] = useState(false);
    
    const handleMenuBtnOnClick = (e) => {
        e.stopPropagation();
        setIsMenuShow(!isMenuShow);
    }

    useEffect(() => {
        document.onclick = () => {
            setIsMenuShow(false);
        }
    }, [isMenuShow])


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