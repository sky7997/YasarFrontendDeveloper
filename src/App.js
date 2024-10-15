import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

import Features from "./components/Features";
import Roadmap from "./components/Roadmap";
import Tokenomics from "./components/Tokenomics";


function App() {
  return (
    <div className="app-cont">
      <Navbar />
      <Home />
      <Features />
      <Roadmap />
      <Tokenomics />
      
      
    </div>
  );
}

export default App;
