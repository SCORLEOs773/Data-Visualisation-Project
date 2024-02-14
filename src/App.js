import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Chart from "./components/ChartBar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Chart />} />
      </Routes>
    </Router>
  );
}

export default App;
