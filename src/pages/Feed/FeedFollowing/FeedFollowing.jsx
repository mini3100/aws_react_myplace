import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import FeedCategory from '../../../components/FeedCategory/FeedCategory';
import FeedMainContainer from '../../../components/FeedMainContainer/FeedMainContainer';

function FeedFollowing(props) {
    return (
        <div css={S.SLayout}>
            <FeedCategory />
            <FeedMainContainer />
        </div>
    );
}

export default FeedFollowing;