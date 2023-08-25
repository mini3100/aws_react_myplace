import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import { AiOutlineRight } from 'react-icons/ai'
import { PiPencilSimpleLineFill } from 'react-icons/pi'
import { FiCheckCircle } from 'react-icons/fi'

function MainProfile(props) {
    return (
        <div css={S.SLayout}>
            <div css={S.SContainer}>
                <button css={S.SProfileBox}>
                    <div css={S.SProfileImgBox}>
                        <img css={S.SProfileImg} src="https://m.place.naver.com/my/_next/static/image/_/assets/images/icon_profile_default.cf1f777d594520630ff249eb31ab38c2.png" alt="" />
                    </div>
                    <div css={S.SLoginBox}>
                        <span>로그인하기</span>
                        <span><AiOutlineRight css={S.SRightIcon}/></span>
                    </div>
                </button>
                <div css={S.SProfileBtnBox}>
                    <span css={S.ReviewBtn}>
                        <button css={S.SProfileBtn}><PiPencilSimpleLineFill css={S.SProfileIcons}/>리뷰 쓰기</button>
                    </span>
                    <span css={S.MissionBtn}>
                        <button css={S.SProfileBtn}><FiCheckCircle css={S.SProfileIcons}/>미션</button>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default MainProfile;