import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Intro from './components/Intro';
import About from './components/About';
import Expertise from './components/Expertise';
import Footer from './components/Footer';
import CTA from './components/CTA';


const App = () => {
  return (
    <Router>
      <div id="page" className="s-pagewrap ss-home">
        <Header />
        <main id="content" className="s-content">
          <Routes>
            <Route path="/journal" element={<CTA  />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Expertise />} />
            <Route path="/blog" element={<Intro />} />
            <Route path="/contact" element={<Footer />} />
            
          </Routes>
          <Intro />
          
          <About />
          
            <Expertise />
            </main>
            
    
        
          <CTA />
          <Footer />
        </div>
      
    </Router>
  );
};

export default App;
