import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';
import MuiTypography from './components/MuiTypography';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <button><Link to="/">Home</Link></button>&nbsp;&nbsp;
        <button><Link to="/MuiTypography">MuiTypography</Link></button>&nbsp;&nbsp;
        <Routes>
          <Route path="/MuiTypography" element={<MuiTypography />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
