import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import { BsThreeDotsVertical } from 'react-icons/bs'
import { PiSirenLight, PiProhibitLight } from 'react-icons/pi';

import { isMenuShowState } from '../../../store/menuStore';
import { useRecoilState } from 'recoil';

function LiHeader(props) {
    const [ isMenuShow, setIsMenuShow ] = useRecoilState(isMenuShowState);

    const handleMenuBtnOnClick = (e) => {
        e.stopPropagation();
        setIsMenuShow(!isMenuShow);
    }

    return (
        <div css={S.SListHeader}>
            <button css={S.SUserBox}>
                <div css={S.SUserImgLayout}>
                    <div css={S.SUserImgContainer}>
                        <div css={S.SUserImgBox}>
                            <img css={S.SUserImg} src="https://m.place.naver.com/my/_next/static/image/_/assets/images/icon_profile_default.cf1f777d594520630ff249eb31ab38c2.png" width="100%" height="100%" />
                        </div>
                    </div>
                </div>
                <div css={S.UserInfoBox}>
                    <div css={S.SUserName}>정모긔</div>
                    <div css={S.SUserInfoBox}>
                        <span css={S.SUserInfo}>사진리뷰 3・</span>
                        <span css={S.SUserInfo}>팔로워 0</span>
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