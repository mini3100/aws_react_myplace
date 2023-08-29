import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "../../styles/mainStyle"

function Timeline(props) {
    return (
        <div css={S.SLayout}>
            <div css={S.SContainer} className='timeline-container'>
                <div css={S.SFlagBox}>
                    🚩
                </div>
                <div css={S.SMainTextBox}>
                    <strong>영수증/카드내역 인증, 예약, 주문</strong>한 <br/>
                    장소가 나의 기록이 됩니다.
                </div>
                <div css={S.SSubTextBox}>
                    방문했던 곳을 한 눈에 모아보세요.
                </div>
                <div css={S.SImgBox}>
                    <img src="https://m.place.naver.com/my/_next/static/image/_/assets/images/panel_img_visit_20221202.fd5a3f0bd6ca8dbf3bd9cc7c5f98b110.png" width="235" height="155"/>
                </div>
                <div css={S.SBtnBox}>
                    <button>리뷰 참여하기</button>
                </div>
            </div>
        </div>
    );
}

export default Timeline;