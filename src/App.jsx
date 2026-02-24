import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Herosection from './components/herosection';
import MarkQueue from './components/markqueue';
import Comparision from './components/comparision';
import HowItWorks from './components/how-it-works';
import Testimonials from './components/testimonials';
import Features from './components/features';
import Supportsystem from './components/supportsystem';
import CTASections from './components/cta-section';
import Footer from './components/footer';
import FloatingBanner from './components/floating-banner';

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <BrowserRouter>
      <Navbar />
      <Herosection />
      <MarkQueue />
      <Comparision />
      <HowItWorks />
      <Testimonials />
      <Features />
      <Supportsystem />
      <CTASections />
      <Footer />
      <FloatingBanner />
    </BrowserRouter>
  );
}

export default App;
