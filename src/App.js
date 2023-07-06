import React from "react";
import { BrowserRouter , Route, Routes, Link } from "react-router-dom";
import "bootswatch/dist/lux/bootstrap.min.css"; // Added this :lux:


import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
       
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/about" element={<About></About>} />
          <Route path="/portfolio" element={<Portfolio></Portfolio>} />
          <Route path="/resume" element={<Resume></Resume>} />
          <Route path="/contact" element={<Contact></Contact>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
