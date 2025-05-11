import logo from './logo.svg';
import './App.css';
import Index from './components';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;
