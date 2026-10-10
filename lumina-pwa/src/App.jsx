import React from 'react'
import MolduraMobile from './components/MolduraMobile'
import Login from './pages/Login.jsx';
import { Route, Routes } from 'react-router-dom';
function App() {

  return (
    <>
      <MolduraMobile>
        <Routes>
          <Route path="/" element={<Login />}></Route> 
        </Routes>
      </MolduraMobile>
    </>
  );
};

export default App
