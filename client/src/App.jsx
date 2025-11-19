import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import GalleryTabs from './components/GalleryTabs.jsx';

const App = () => {
  return (
    <div className="App min-h-screen" style={{ width: '100%', maxWidth: '100vw', overflowX: 'hidden' }}>
      <Header />
      <Hero />
      <GalleryTabs />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;