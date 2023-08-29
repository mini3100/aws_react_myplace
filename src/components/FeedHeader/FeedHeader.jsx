import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import { AiOutlinePlus } from 'react-icons/ai'
import { MdLocationSearching } from 'react-icons/md'
import { useLocation, useNavigate } from 'react-router-dom';

function FeedHeader(props) {
    const navigate = useNavigate();
    const location = useLocation();
    const pathName = location.pathname;

    const [ feedMenuListArray, setFeedMenuListArray ] = useState({
        list: [
            {
                id: 1,
                path: "/feed/all",
                name: "전체"
            },
            {
                id: 2,
                path: "/feed/following",
                name: "팔로잉"
            }
        ]
    })

    const handleMenuClick = (path) => {
        navigate(path);
    }

    return (
        <div css={S.SLayout}>
            <div css={S.SContainer}>
                <div css={S.SButtons}>
                    <div css={S.SLeftBox}>
                        {feedMenuListArray.list.map(item => {
                            let isSelected = pathName.startsWith(item.path);
                            if(item.path === '/feed/all' && (pathName === '/feed' || pathName === '/')){
                                isSelected = true;
                            }
                            return (
                                <div><button css={S.SViewBtn(isSelected)} key={item.id} onClick={() => {
                                    handleMenuClick(item.path);
                                }}>{item.name}</button></div>
                            )
                        })}
                        <div><button css={S.SViewBtn(false)}><AiOutlinePlus />관심지역</button></div>
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