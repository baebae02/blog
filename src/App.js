import './App.css';
import React from 'react';
import Header from './components/Header';
import {Route, Routes} from "react-router-dom";
import Index from "./pages/About/index";
import Project from "./pages/Project";
import Study from "./pages/Study";

function App() {
  return (
    <div className="App">
      <Header></Header>
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/project" element={<Project />} />
            <Route path="/study" element={<Study />} />
        </Routes>
    </div>
  );
}

export default App;
