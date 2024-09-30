import {  Route, Routes, useLocation } from 'react-router-dom';
import React from 'react'
import './assets/app.css'
import Login from './components/Login';
import Sidbar from './components/sidbar';


function App() {
  const location = useLocation();
  const hideSidbar = location.pathname === '/Login' || location.pathname === '/404';
  return (
    <>
        {!hideSidbar && <Sidbar />}
        <Routes>
        <Route path="/Login" element={<Login />} />
        </Routes>
    </>
  )
}

export default App