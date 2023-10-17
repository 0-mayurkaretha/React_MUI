import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';
import MuiTypography from './components/MuiTypography';
import MuiButton from './components/MuiButton';
import MuiTextField from './components/MuiTextField';
import MuiSelect from './components/MuiSelect';
import MuiRadioButton from './components/MuiRadioButton';
import MuiCheckbox from './components/MuiCheckbox';
import MuiSwitch from './components/MuiSwitch';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <button><Link to="/">Home</Link></button>&nbsp;&nbsp;
        <button><Link to="/MuiTypography">MuiTypography</Link></button>&nbsp;&nbsp;
        <button><Link to="/MuiButton">MuiButton</Link></button>&nbsp;&nbsp;
        <button><Link to="/MuiTextField">MuiTextField</Link></button>&nbsp;&nbsp;
        <button><Link to="/MuiSelect">MuiSelect</Link></button>&nbsp;&nbsp;
        <button><Link to="/MuiRadioButton">MuiRadioButton</Link></button>&nbsp;&nbsp;
        <button><Link to="/MuiCheckbox">MuiCheckbox</Link></button>&nbsp;&nbsp;
        <button><Link to="/MuiSwitch">MuiSwitch</Link></button>&nbsp;&nbsp;

        <Routes>
          <Route path="/MuiTypography" element={<MuiTypography />} />
          <Route path="/MuiButton" element={<MuiButton />} />
          <Route path="/MuiTextField" element={<MuiTextField />} />
          <Route path="/MuiSelect" element={<MuiSelect />} />
          <Route path="/MuiRadioButton" element={<MuiRadioButton />} />
          <Route path="/MuiCheckbox" element={<MuiCheckbox />} />
          <Route path="/MuiSwitch" element={<MuiSwitch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
