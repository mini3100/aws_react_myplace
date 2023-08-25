import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import MainHeader from '../MainHeader/MainHeader';
import MainProfile from '../MainProfile/MainProfile';
import MainMenu from '../MainMenu/MainMenu';

function MainLayout({ children }) {
    return (
        <div css={S.SLayout}>
            <MainHeader />
            <MainProfile />
            <MainMenu />
            
            <div css={S.SContainer}>
                {children}
            </div>
        </div>
    );
}

export default MainLayout;