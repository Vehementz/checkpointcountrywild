import React from 'react';
import './App.css';
import Continent from './pages/Continents/Continent';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {


  return (
      <BrowserRouter>
        <Routes>           
            <Route path="/" element={<Continent />} />
          </Routes>
      </BrowserRouter>
  );
}


export default App;

