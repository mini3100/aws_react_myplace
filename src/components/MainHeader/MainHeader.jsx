import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import { SiNaver } from 'react-icons/si'
import { AiOutlineMenu } from 'react-icons/ai'
import { BsTicket } from 'react-icons/bs'

function MainHeader(props) {
    return (
        <header css={S.SLayout}>
            <h1 css={S.STitleContainer}>
                <button css={S.SLogoBox}>
                    <span css={S.SLogo}><SiNaver /></span>
                </button>
                <button css={S.STitleBox}>
                    <span css={S.STitle}>MY플레이스</span>
                </button>
            </h1>
            <button css={S.SCouponBtn}>
                <BsTicket css={S.SCouponIcon}/>
                <span css={S.SCouponText}>쿠폰</span>
            </button>
            <button css={S.SMenuBtn}><AiOutlineMenu /></button>
        </header>
    );
}

export default MainHeader;