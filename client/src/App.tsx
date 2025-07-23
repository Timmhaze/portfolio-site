//import './App.css';
import { useEffect, useState, useRef } from 'react';
import styles from './App.module.css';

import { Routes, Route } from 'react-router-dom';

import Overview from './pages/Overview';
import Portfolio from './pages/Portfolio';


function App() {

  return (
    <Routes>
      <Route path="/" element={<Overview />} />
      <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
  );
}

export default App;