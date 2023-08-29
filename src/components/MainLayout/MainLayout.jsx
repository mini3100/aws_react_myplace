import React, { useEffect, useRef } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import MainHeader from '../MainHeader/MainHeader';
import MainProfile from '../MainProfile/MainProfile';
import MainMenu from '../MainMenu/MainMenu';
import MainFooter from '../MainFooter/MainFooter';
import { useRecoilState } from 'recoil';
import { mainLayoutRefState } from '../../store/menuStore';

function MainLayout({ children }) {
    return (
        <div css={S.SLayout}>
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