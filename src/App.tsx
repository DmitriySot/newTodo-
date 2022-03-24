import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import { Registration, Home } from './pages';
import SignIn from 'components/SignIn';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </>
  );
}

export default App;
