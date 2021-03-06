import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Components
import NotFoundPage from '../components/NotFoundPage';
import IndexPage from '../components/IndexPage';
import CompletedPage from '../components/CompletedPage';
import ErrorPage from '../components/ErrorPage';

export const history = require('history').createBrowserHistory();

const AppRouter = () => (
  <BrowserRouter history={history}>
    <div>
      <Routes>
        <Route path='/' element={<IndexPage/>} exact={true}/>
        <Route path='/completed' element={<CompletedPage/>} exact={true}/>
        <Route path='/error' element={<ErrorPage/>} exact={true}/>
        <Route path="*" element={<NotFoundPage/>}/>    
      </Routes>
    </div>
  </BrowserRouter>
);

export default AppRouter;
