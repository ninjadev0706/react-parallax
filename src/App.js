import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import LandingPage from "./Pages/LandingPage";

function App() {
  return (
    <ParallaxProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route exact path="/*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ParallaxProvider>
  );
}

export default App;
