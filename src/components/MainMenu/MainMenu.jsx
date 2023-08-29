import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import { useLocation, useNavigate } from 'react-router-dom';

function MainMenu(props) {
    const navigate = useNavigate();
    const location = useLocation();
    const pathName = location.pathname;

    const [ mainMenuListArray, setMainMenuListArray ] = useState({
        list: [
            {
                id: 1,
                path: "/feed",
                name: "피드"
            },
            {
                id: 2,
                path: "/timeline",
                name: "타임라인"
            },
            {
                id: 3,
                path: "/review",
                name: "리뷰"
            },
            {
                id: 4,
                path: "/reservation",
                name: "예약·주문"
            },
            {
                id: 5,
                path: "/save",
                name: "저장"
            }
        ]
    })

    const handleLinkClick = (path) => {
        navigate(path);
    }

    return (
        <div css={S.SLayout}>
            <div css={S.SContainer}>
                {mainMenuListArray.list.map(item => {
                    let isSelected = pathName.startsWith(item.path);
                    if(item.path === '/feed' && pathName === '/'){
                        isSelected = true;
                    }
                    return (
                        <>
                            <button css={S.SMenuBox(isSelected)} key={item.id} onClick={() => {
                                handleLinkClick(item.path);
                            }}>
                                {item.name}
                                {isSelected && <button css={S.SSelectedMenu} key={item.id}></button>}
                            </button>
                        </>
                    );
                })}
            </div>
        </div>
    );
}

export default MainMenu;