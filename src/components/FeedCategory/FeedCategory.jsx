import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { selectedCategory } from '../../store/menuStore';
import { useRecoilState } from 'recoil';

function FeedCategory(props) {
    const [ categoryList, setCategoryList ] = useState(["한식", "자연명소", "카페", "피크닉", "양식", "등산・트레킹", "일식", "낚시", "클래스・소품", "분식/치킨", "체험관광", "중식", "역사유적", "아시아/퓨전 음식", "캠핑", "뷔페/레스토랑", "숙박", "물놀이", "문화예술", "레저・액티비티", "테마파크", "아이와 함께"]);

    const [ movePx, setMovePx ] = useState(0);
    const [ isSelectedCategory, setIsSelectedCategory ] = useRecoilState(selectedCategory);

    const handleLeftBtnOnClick = (e) => {
        if(movePx === -1203) {
            setMovePx(-483);
        } else if(movePx === -483 || movePx === - 720) {
            setMovePx(0);
        }
    }

    const handleRightBtnOnClick = (e) => {
        if(movePx === 0) {
            setMovePx(-720);
        } else if(movePx === -720) {
            setMovePx(-1203);
        }
    }

    const handelCategoryBtnOnClick = (item) => {
        if(item.item === isSelectedCategory.item){
            setIsSelectedCategory("all");
        } else {
            setIsSelectedCategory(item);
        }
    }

    return (
        <div css={S.SLayout}>
            <div css={S.SContainer}>
                <div css={S.SBox}>
                    <div css={S.SViewPort}>
                        <div css={S.SCategoryBox(movePx)}>
                            {categoryList.map(item => {
                                let isSelected = (isSelectedCategory.item === {item}.item);
                                return (
                                    <span css={S.SBtnBox} key={item}>
                                        <button css={S.SBtn(isSelected)} onClick={() => {handelCategoryBtnOnClick({item});}}>{item}</button>
                                    </span>
                                );
                            })}
                        </div>
                        <button css={S.SMoveBox} className='left-btn' onClick={handleLeftBtnOnClick}>
                            <span css={S.SMoveBtn} className='left-span'><AiOutlineLeft /></span>
                        </button>
                        <button css={S.SMoveBox} className='right-btn' onClick={handleRightBtnOnClick}>
                            <span css={S.SMoveBtn} className='right-span'><AiOutlineRight /></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeedCategory;