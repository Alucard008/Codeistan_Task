import React from "react";
import "./App.css";
import HeroSection from "./components/HeroSection";
import HistorySection from "./components/HistorySection";
import ClimbSection from "./components/ClimbSection";
import BelowTheHeroSection from "./components/BelowTheHeroSection";

import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <HeroSection />
      <BelowTheHeroSection />
      <HistorySection />
      <ClimbSection />
      <Footer />
    </div>
  );
}

export default App;
