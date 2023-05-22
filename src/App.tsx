import React from 'react';
import './App.css';
import Continent from './pages/Continents/Continent';
import Countries from './pages/Countries/Countries';

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {


  return (
      <BrowserRouter>
        <Routes>           
            <Route path="/" element={<Continent />} />
            <Route path="/countries/:continentCode" element={<Countries />} />
          </Routes>
      </BrowserRouter>
  );
}


export default App;

