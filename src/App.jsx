// src/App.jsx
import React from "react";
import Header from "./Components/Header";
import MainSection from "./Components/MainSection";
import "./index.css"; // Import Tailwind CSS
import StatsSection from "./Components/StatsSection";

const App = () => {
  return (
    <div>
      <Header />
      <MainSection />
      <StatsSection />
    </div>
  );
};

export default App;
