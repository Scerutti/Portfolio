import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CompletePage from './pages/complete-page/CompletePage';
import Error from './pages/error/Error';
import ErrorPage from './pages/error/ErrorPage';
import CardConteiner from './pages/card-content/CardConteiner';



const App:React.FC<{}> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CompletePage />} />
        <Route path="/portfolio/:id" element={<CardConteiner/>}/>
        <Route path='/error' element={<Error />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
