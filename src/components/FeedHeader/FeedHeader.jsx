import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import { AiOutlinePlus } from 'react-icons/ai'
import { MdLocationSearching } from 'react-icons/md'

function FeedHeader(props) {
    return (
        <div css={S.SLayout}>
            <div css={S.SContainer}>
                <div css={S.SButtons}>
                    <div css={S.SLeftBox}>
                        <div><button css={S.SViewBtn}>전체</button></div>
                        <div><button css={S.SViewBtn}>팔로잉</button></div>
                        <div><button css={S.SViewBtn}><AiOutlinePlus />관심지역</button></div>
                    </div>
                    <div css={S.SRightBox}>
                        <div css={S.SDivider}></div>
                        <button css={S.SLocationBtn}><span css={S.SLocationIcon}><MdLocationSearching/></span>현위치</button>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
}

export default FeedHeader;