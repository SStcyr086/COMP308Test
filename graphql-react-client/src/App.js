import logo from './logo.svg';
import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
  Redirect
} from "react-router-dom";
import Home from './components/Home';
import VitalList from './components/VitalList';
import Nurse from './components/Nurse';
import Patient from './components/Patient';

function App() {
  return (
    <Router>

    <div className="App">
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vitallist" element={<VitalList/>} />
        <Route path="/nurse" element={<Nurse />} />
        <Route path="/patient" element={<Patient />} />      
    </Routes>

    </div>
    </Router>

  );
}

export default App;
