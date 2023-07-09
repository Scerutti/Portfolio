import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CompletePage from './pages/complete-page/CompletePage';
import Error from './pages/error/Error';
import ErrorPage from './pages/error/ErrorPage';
import CardContainer from './pages/card-container/CardContainer';


const App:React.FC<{}> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CompletePage />} />
        <Route path='/error' element={<Error />} />
        <Route path='/portfolio/:id' element={<CardContainer />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
