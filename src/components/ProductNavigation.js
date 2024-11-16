// import React from 'react';

// const ProductNavigation = ({ products, selectedProduct, onSelectProduct }) => {
//   return (
//     <div className="flex justify-center space-x-4 mb-8">
//       {products.map((product, index) => (
//         <button
//           key={index}
//           onClick={() => onSelectProduct(index)}
//           className={`transition transform hover:scale-110 ${
//             selectedProduct === index ? 'bg-accent text-white' : 'bg-white text-dark-navy'
//           } rounded-lg w-10 h-5 flex items-center justify-center`}
//           title={product.name}
//         >
//           {index + 1}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default ProductNavigation;
import React from 'react';
import { motion } from 'framer-motion';

const buttonVariants = {
  hover: { scale: 1.2, transition: { duration: 0.3 } },
  tap: { scale: 0.9 },
};

const ProductNavigation = ({ products, selectedProduct, onSelectProduct }) => {
  return (
    <div className="flex justify-center space-x-4 mb-8">
      {products.map((product, index) => (
        <motion.button
          key={index}
          onClick={() => onSelectProduct(index)}
          className={`transition transform ${
            selectedProduct === index
              ? 'bg-accent text-white'
              : 'bg-white text-dark-navy'
          } rounded-lg w-10 h-10 flex items-center justify-center`}
          title={product.name}
          whileHover="hover"
          whileTap="tap"
          variants={buttonVariants}
        >
          {index + 1}
        </motion.button>
      ))}
    </div>
  );
};

export default ProductNavigation;
