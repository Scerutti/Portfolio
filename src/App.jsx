import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CompletePage from './pages/complete-page/CompletePage';
import Error from './pages/error/Error';
import ErrorPage from './pages/error/ErrorPage';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<CompletePage />} />
        <Route exact path='/error' element={<Error />} />
        <Route exact path='/*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
