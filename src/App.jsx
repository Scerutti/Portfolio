import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CompletePage from './pages/complete-page/CompletePage';
import Error from './pages/error/Error';
import ErrorPage from './pages/error/ErrorPage';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CompletePage />} />
        <Route path='/error' element={<Error />} />
        <Route path='/*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
