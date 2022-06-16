import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import React, { useState, useEffect } from "react";

import "../src/css/app.css";
import "../src/css/components.css";


const AppRoute = () => {
  return (
    <Routes>
      {/* Webframe for portfolio (Layout is the base template) */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home></Home>} />
        <Route path="about" element={<About />} />
        <Route path="work" element={<Work/>} />
      </Route>
    </Routes>
  );
};

// Main Function
export default function App() {
  // Declaring states for using splash screen.
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Loading time transition into app page
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return isLoading ? 
    // Page is still loading -> Display the splash screen
    // TODO: Improve the splash screen animation
    <div className="splash-screen">
      <h1 className="splash-screen-title">
        <span className='dot'></span>
        <span className='dot'></span>
        <span className='dot'></span>
      </h1>
    </div>:
    // Page finished loading -> Load portfolio
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
}