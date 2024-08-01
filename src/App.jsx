import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/Navbar";
import FloatingButton from "./components/FloatingButton";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <FloatingButton />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio/*" element={<Portfolio />} />
        </Routes>
      </div>
    </Router>
  );
}
