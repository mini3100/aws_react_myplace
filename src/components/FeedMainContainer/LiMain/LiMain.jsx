import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import { MdLocationOn } from 'react-icons/md'

function LiMain({ main }) {
    return (
        <>
            <div css={S.SImgLayout}>
                <button css={S.SImgContainer}>
                    <div css={S.SImgBox}>
                        <div css={S.SImg(main.img)}></div>
                    </div>
                    <div css={S.SLocationContainer}>
                        <div css={S.SLocationBox}>
                            <MdLocationOn css={S.SLocationIcon}/>
                            <span>{main.location}</span>
                        </div>
                    </div>
                </button>
            </div>
            <div css={S.SCommentBox}>
                <a css={S.SComment} href="#" role='button'>{main.comment}</a>
            </div>
            <div css={S.SHashTagLayout}>
                <div css={S.SHashTagContainer}>
                    <span css={S.SHashTagBox}>
                        <img css={S.SHashTagImg} src={main.hashtagImg} alt="" />
                        {main.hashtag}
                    </span>
                    <span css={S.SHashTagBox}>+{main.hashtagCount}</span>
                </div>
            </div>
        </>
    );
}

export default LiMain;