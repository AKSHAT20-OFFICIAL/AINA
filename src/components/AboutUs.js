// import React from 'react';

// const AboutUs = () => {
//   return (
//     <section id="about" className="py-20  bg-gradient-to-r from-dark-navy to-accent text-dark-navy text-center">
//       <h2 className="text-3xl font-bold mb-4">About Us</h2>
//       <p className="max-w-2xl mx-auto text-dark-grey">We are committed to delivering high-quality products tailored to your needs.</p>
//     </section>
//   );
// };

// export default AboutUs;
import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-r from-dark-navy to-accent text-light-grey text-center bg-fixed"
    >
      <motion.h2
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Us
      </motion.h2>
      <motion.p
        className="max-w-2xl mx-auto text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        We are committed to delivering high-quality products tailored to your needs.
      </motion.p>
    </section>
  );
};

export default AboutUs;
