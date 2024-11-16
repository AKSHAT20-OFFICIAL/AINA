// import React from 'react';

// const Hero = () => {
//   return (
//     <section id="hero" className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-dark-navy to-accent text-white text-center">
//       <h1 className="text-5xl font-bold mb-4">Welcome to Our Products</h1>
//       <p className="text-xl mb-8">Explore the best products designed just for you.</p>
//       <a href="#products" className="bg-accent px-6 py-3 rounded text-dark-navy font-semibold hover:bg-highlight-blue transition">Explore Our Products</a>
//     </section>
//   );
//  };
// // opacity-80

// export default Hero;
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen bg-gradient-to-r from-dark-navy to-accent text-white flex flex-col justify-center items-center bg-fixed"
    >
      <motion.h1
        className="text-5xl font-bold mb-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        Welcome to Our Products
      </motion.h1>
      <motion.p
        className="text-xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Explore the best products designed just for you.
      </motion.p>
      <motion.a
        href="#products"
        className="bg-accent px-6 py-3 rounded text-dark-navy font-semibold hover:bg-highlight-blue transition"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        Explore Our Products
      </motion.a>
    </section>
  );
};

export default Hero;
