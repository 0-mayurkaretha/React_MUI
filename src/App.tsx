import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';
import MuiTypography from './components/MuiTypography';
import MuiButton from './components/MuiButton';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <button><Link to="/">Home</Link></button>&nbsp;&nbsp;
        <button><Link to="/MuiTypography">MuiTypography</Link></button>&nbsp;&nbsp;
        <button><Link to="/MuiButton">MuiButton</Link></button>&nbsp;&nbsp;
        <Routes>
          <Route path="/MuiTypography" element={<MuiTypography />} />
          <Route path="/MuiButton" element={<MuiButton />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
