// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

// const Footer = () => {
//   return (
//     <footer className="bg-dark-navy text-white py-6">
//       <div className="container mx-auto text-center">
//         {/* Footer Logo or Brand Name */}
//         <h2 className="text-lg font-bold mb-4">Your Brand</h2>

//         {/* Social Media Links */}
//         <div className="flex justify-center space-x-6 mb-4">
//           <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
//             <FontAwesomeIcon icon={faFacebook} size="lg" className="text-light-grey hover:text-accent transition-colors duration-200" />
//           </a>
//           <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
//             <FontAwesomeIcon icon={faTwitter} size="lg" className="text-light-grey hover:text-accent transition-colors duration-200" />
//           </a>
//           <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
//             <FontAwesomeIcon icon={faLinkedin} size="lg" className="text-light-grey hover:text-accent transition-colors duration-200" />
//           </a>
//           <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
//             <FontAwesomeIcon icon={faInstagram} size="lg" className="text-light-grey hover:text-accent transition-colors duration-200" />
//           </a>
//         </div>

//         {/* Footer Text */}
//         <p className="text-sm text-dark-grey">
//           &copy; {new Date().getFullYear()} Your Brand. All rights reserved.
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-dark-navy text-white py-6">
      <motion.div
        className="container mx-auto text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-lg font-bold mb-4">Your Brand</h2>
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebook} size="lg" className="text-light-grey hover:text-accent transition-colors duration-200" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FontAwesomeIcon icon={faTwitter} size="lg" className="text-light-grey hover:text-accent transition-colors duration-200" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} size="lg" className="text-light-grey hover:text-accent transition-colors duration-200" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} size="lg" className="text-light-grey hover:text-accent transition-colors duration-200" />
          </a>
        </div>
        <p className="text-sm text-dark-grey">&copy; {new Date().getFullYear()} Your Brand. All rights reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
