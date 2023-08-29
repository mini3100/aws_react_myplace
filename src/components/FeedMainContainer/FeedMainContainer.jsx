import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import { BsEmojiSmile } from 'react-icons/bs'
import { MdLocationOn } from 'react-icons/md'
import { AiOutlineRight, AiOutlineStar } from 'react-icons/ai';
import LiHeader from './LiHeader/LiHeader';

function FeedMainContainer(props) {
    return (
        <ul css={S.SLayout}>
            <li>
                <div css={S.SListBox}>
                    <LiHeader />
                    <div css={S.SImgLayout}>
                        <button css={S.SImgContainer}>
                            <div css={S.SImgBox}>
                                <div css={S.SImg}></div>
                            </div>
                            <div css={S.SLocationContainer}>
                                <div css={S.SLocationBox}>
                                    <MdLocationOn css={S.SLocationIcon}/>
                                    <span>서울시 동교동 최신</span>
                                </div>
                            </div>
                        </button>
                    </div>
                    <div css={S.SCommentBox}>
                        <a css={S.SComment} href="#" role='button'>조선시대에 사람들이 커피를 즐겨 마셨다면 이런 모습이겠구나 라는 생각이 드는 카페</a>
                    </div>
                    <div css={S.SHashTagLayout}>
                        <div css={S.SHashTagContainer}>
                            <span css={S.SHashTagBox}>
                                <img css={S.SHashTagImg} src="https://ssl.pstatic.net/static/pup/emoji/coffee20220119222225.png" alt="" />
                                커피가 맛있어요
                            </span>
                            <span css={S.SHashTagBox}>+3</span>
                        </div>
                    </div>
                    <div css={S.SReactionLayout}>
                        <div css={S.SReactionContainer}>
                            <button css={S.SReactionBox}>
                                <span css={S.SSmileIcon}><BsEmojiSmile /></span>
                                반응 남기기
                            </button>
                        </div>
                        <div css={S.SDateBox}>
                            <span>8.28 월 </span>
                            <span>방문</span>
                        </div>
                    </div>
                    <div css={S.SPlaceLayout}>
                        <div css={S.SPlaceContainer}>
                            <div css={S.SPlaceBox}>
                                <div css={S.SPlace}>
                                    <div css={S.SPlaceNameBox}>
                                        <button css={S.SPlaceName}>
                                            <span>율곡 커피로스터스</span>
                                            <AiOutlineRight css={S.SRightIcon}/>
                                        </button>
                                    </div>
                                    <div css={S.SPlaceCategoryBox}>
                                        <span>카페, 디저트・</span>
                                        <span>서울특별시 마포구 동교동</span>
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
                </div>
            </li>
        </ul>
    );
}

export default FeedMainContainer;