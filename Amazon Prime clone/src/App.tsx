import React from 'react';
// import logo from './logo.svg';
import './App.css';
import LandingModules from './Components/Modules/LandingModules';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<LandingModules/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
