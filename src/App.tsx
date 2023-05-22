import React from 'react';
import './App.css';
import Continent from './pages/Continents/Continent';
import Countries from './pages/Countries/Countries';
import Country from './pages/Country/Country';


import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {


  return (
      <BrowserRouter>
        <Routes>           
            <Route path="/" element={<Continent />} />
            <Route path="/countries/:continentCode" element={<Countries />} />
            <Route path="/country/:countryCode" element={<Country />} />

          </Routes>
      </BrowserRouter>
  );
}


export default App;

