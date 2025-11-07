import { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import './index.css';

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  )
}

export default App
