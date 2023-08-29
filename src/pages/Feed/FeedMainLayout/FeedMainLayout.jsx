import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import FeedHeader from '../../../components/FeedHeader/FeedHeader';


function FeedMainLayout({ children }) {
    return (
        <>
            <FeedHeader />
            <div css={S.SContainer}>
                {children}
            </div>
        </>
    );
}

export default FeedMainLayout;