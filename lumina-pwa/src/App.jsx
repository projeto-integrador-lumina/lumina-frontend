import React from 'react'
import MolduraMobile from './components/MolduraMobile'
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx'
import { Route, Routes } from 'react-router-dom';
function App() {

  return (
    <>
      <MolduraMobile>
        <Routes>
          <Route path="/" element={<Login />}></Route> 
          <Route path="/home" element={<Home />}></Route> 
        </Routes>
      </MolduraMobile>
    </>
  );
};

export default App
