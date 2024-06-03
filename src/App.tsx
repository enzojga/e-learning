import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInPage from './pages/SignInPage/SignInPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
