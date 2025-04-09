import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Homepage } from "./components/Homepage"; 
import { Contact } from "./components/Contact";
import { AboutMe } from "./components/Aboutme";
import { FunThings } from "./components/FunThings";
import { Sophia } from "./components/Sophia";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/fun-things" element={<FunThings />} />
        <Route path="/fun-things/sophia" element={<Sophia />} />
      </Routes>
    </Router>
  );
};

export default App;
