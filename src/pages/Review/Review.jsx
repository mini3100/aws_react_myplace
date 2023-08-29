import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "../../styles/mainStyle"

function Review(props) {
    return (
        <div css={S.SLayout}>
            <div css={S.SContainer} className='review-container'>
                <div css={S.SFlagBox}>
                    🚩
                </div>
                <div css={S.SMainTextBox}>
                    정성스레 작성한 <strong>리뷰</strong> <br/>
                    내 리뷰를 모아 만든 <strong>테마리스트</strong>
                </div>
                <div css={S.SSubTextBox}>
                    나의 발자취를 소중한 기록으로 남겨보세요.
                </div>
                <div css={S.SImgBox}>
                    <img src="https://m.place.naver.com/my/_next/static/image/_/assets/images/panel_img_review_20221202.87ca2c0d90f42473c28ef6cff083836e.png" width="251" height="163"/>
                </div>
                <div css={S.SBtnBox}>
                    <button>리뷰 참여하기</button>
                </div>
            </div>
        </div>
    );
}

export default Review;