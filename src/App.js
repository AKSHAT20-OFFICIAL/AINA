
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-light-grey text-dark-grey font-sans">
      <Header />
      <Hero />
      <ProductShowcase />
      <AboutUs />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
