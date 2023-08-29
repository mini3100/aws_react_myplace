import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import { BsEmojiSmile } from 'react-icons/bs'
import { AiOutlineRight, AiOutlineStar } from 'react-icons/ai';

function LiFooter({ footer }) {
    return (
        <>
            <div css={S.SReactionLayout}>
                <div css={S.SReactionContainer}>
                    <button css={S.SReactionBox}>
                        <span css={S.SSmileIcon}><BsEmojiSmile /></span>
                        반응 남기기
                    </button>
                </div>
                <div css={S.SDateBox}>
                    <span>{footer.date} </span>
                    <span>방문</span>
                </div>
            </div>
            <div css={S.SPlaceLayout}>
                <div css={S.SPlaceContainer}>
                    <div css={S.SPlaceBox}>
                        <div css={S.SPlace}>
                            <div css={S.SPlaceNameBox}>
                                <button css={S.SPlaceName}>
                                    <span>{footer.placeName}</span>
                                    <AiOutlineRight css={S.SRightIcon}/>
                                </button>
                            </div>
                            <div css={S.SPlaceCategoryBox}>
                                <span>{footer.placeCategory}・</span>
                                <span>{footer.placeLocation}</span>
                            </div>
                        </div>
                        <div css={S.SStoreBtnBox}>
                            <button css={S.SStoreBtn}>
                                <AiOutlineStar css={S.SStarIcon}/>
                                <span css={S.SStoreText}>저장</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LiFooter;