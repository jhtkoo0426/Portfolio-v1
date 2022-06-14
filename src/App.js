import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageSection from './components/PageSection';
import SectionTitle from './components/SectionTitle';
import SectionSubtitle from './components/SectionSubtitle';
import SectionContent from './components/SectionContent';
import SectionImage from './components/SectionImage';
import ProjectBox from "./components/ProjectBox";
import Anchor from "./components/Anchor";
import Layout from "./pages/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import ReactDOM from "react-dom/client";
import React, { useState, useEffect } from "react";
import Scrollbar from 'smooth-scrollbar';
import "../src/css/app.css";


const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home></Home>} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
};

export default function App() {
  // Loading state
  // Scrollbar.init(document.querySelector('#my-scrollbar'));
  const [isLoading, setIsLoading] = useState(true);

  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());


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
    
    // Page finished loading -> Display portfolio
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
}