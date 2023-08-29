import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import MainHeader from '../MainHeader/MainHeader';
import MainProfile from '../MainProfile/MainProfile';
import MainMenu from '../MainMenu/MainMenu';
import MainFooter from '../MainFooter/MainFooter';

import { isMenuShowState } from '../../store/menuStore';
import { useRecoilState } from 'recoil';

function MainLayout({ children }) {
    const [ isMenuShow, setIsMenuShow ] = useRecoilState(isMenuShowState);

    const handleLayoutOnClick = (e) => {
        setIsMenuShow(false);
    }

    return (
        <div css={S.SLayout} onClick={handleLayoutOnClick}>
            <MainHeader />
            <MainProfile />
            <MainMenu />
            
            <div css={S.SContainer}>
                {children}
            </div>

            <MainFooter />
        </div>
    );
}

export default MainLayout;