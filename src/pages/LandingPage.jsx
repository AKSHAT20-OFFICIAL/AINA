import React from 'react';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import Services from '../components/Services';
import AboutUs from '../components/AboutUs';

function LandingPage() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Services />
      <AboutUs />
    </div>
  );
}

export default LandingPage;
