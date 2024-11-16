// import React from 'react';

// const Header = () => {
//   return (
//     <header className="flex justify-between items-center p-4 bg-dark-navy text-light-grey">
//       <h1 className="text-2xl font-bold text-accent">My Brand</h1>
//       <nav className="space-x-4">
//         <a href="#hero" className="hover:text-highlight-blue">Home</a>
//         <a href="#products" className="hover:text-highlight-blue">Products</a>
//         <a href="#about" className="hover:text-highlight-blue">About Us</a>
//         <a href="#contact" className="hover:text-highlight-blue">Contact</a>
//       </nav>
//     </header>
//   );
// };

// export default Header;
import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      className="flex justify-between items-center p-4 bg-dark-navy text-light-grey fixed w-full top-0 z-50 shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-2xl font-bold text-accent">My Brand</h1>
      <nav className="space-x-4">
        <a href="#hero" className="hover:text-highlight-blue">
          Home
        </a>
        <a href="#products" className="hover:text-highlight-blue">
          Products
        </a>
        <a href="#about" className="hover:text-highlight-blue">
          About Us
        </a>
      </nav>
    </motion.header>
  );
};

export default Header;
