import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"

function MainFooter(props) {
    return (
        <div css={S.SLayout}>
            <div css={S.SFooterTop}>
                <button>로그인</button>
                <div css={S.SDivider}></div>
                <button>전체서비스</button>
            </div>
            <div css={S.SFooterMiddle}>
                <button>이용정책</button>
                <div css={S.SDivider}></div>
                <button>MY플레이스 고객센터</button>
                <div css={S.SDivider}></div>
                <button>신고센터</button>
                <div css={S.SDivider}></div>
                <button>공지사항</button>
            </div>
            <div css={S.SFooterBottom}>
                <button>ⓒ NAVER Corp.</button>
            </div>
        </div>
    );
}

export default MainFooter;