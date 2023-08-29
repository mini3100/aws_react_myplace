import './App.css';
import MainLayout from './components/MainLayout/MainLayout';
import { Reset } from 'styled-reset';
import { Global } from '@emotion/react';
import * as S from './styles/common';
import { Route, Routes } from 'react-router-dom';
import Feed from './pages/Feed/Feed';
import Review from './pages/Review/Review';
import Timeline from './pages/Timeline/Timeline';
import { useRef } from 'react';

function App() {
  
  return (
    <>
      <Reset />
      <Global styles={S.GSCommon} />
      <MainLayout>
        <Routes>
          <Route path='/' element={ <Feed/> }/>
          <Route path='/feed/*' element={ <Feed/> }/>
          <Route path='/timeline' element={ <Timeline/> }/>
          <Route path='/review' element={ <Review/> }/>
          <Route path='/reservation'/>
          <Route path='/save'/>
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;
