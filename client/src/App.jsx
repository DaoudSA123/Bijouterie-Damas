import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Reviews from './components/Reviews.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import GalleryTabs from './components/GalleryTabs.jsx';
import PrivacyPolicy from './components/PrivacyPolicy.jsx';

const Home = () => {
  return (
    <div className="App min-h-screen" style={{ width: '100%', maxWidth: '100vw', overflowX: 'hidden' }}>
      <Header />
      <Hero />
      <GalleryTabs />
      <About />
      <Services />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/politique-de-confidentialite" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
};

export default App;