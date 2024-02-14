// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ChartBar from "./components/ChartBar";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ChartBar />} />
        <Route path="/aboutme" element={<AboutMe />} />
      </Routes>
    </Router>
  );
}

export default App;
