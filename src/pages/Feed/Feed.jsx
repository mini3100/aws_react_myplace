import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import { Route, Routes } from 'react-router-dom';
import FeedMainLayout from './FeedMainLayout/FeedMainLayout';
import FeedAll from './FeedAll/FeedAll';
import FeedFollowing from './FeedFollowing/FeedFollowing';

function Feed(props) {
    return (
        <div>
            <FeedMainLayout>
                <Routes>
                    <Route path='/' element={<FeedAll />} />
                    <Route path='/all' element={<FeedAll />}/>
                    <Route path='/following' element={<FeedFollowing/>}/>
                </Routes>
            </FeedMainLayout>
        </div>
    );
}

export default Feed;