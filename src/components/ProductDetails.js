// import React, { useState } from 'react';

// const ProductDetails = ({ product }) => {
//   const [showFeatures, setShowFeatures] = useState(false);
//   const [activeImageIndex, setActiveImageIndex] = useState(0);

//   const toggleFeatures = () => {
//     setShowFeatures((prev) => !prev);
//   };

//   const handleNextImage = () => {
//     setActiveImageIndex((prevIndex) =>
//       prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const handlePrevImage = () => {
//     setActiveImageIndex((prevIndex) =>
//       prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center w-full max-w-5xl mx-auto p-4">
//       {/* Carousel Section (Top on Mobile, Left on Desktop) */}
//       <div className="relative w-full h-60 sm:h-80 md:h-full">
//         <img
//           src={product.images[activeImageIndex]}
//           alt={`${product.name} image ${activeImageIndex + 1}`}
//           className="w-full h-full object-cover rounded-lg transition-opacity duration-300"
//         />
//         <button
//           onClick={handlePrevImage}
//           className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-dark-navy text-white p-2 rounded-full text-xs sm:text-base"
//         >
//           ❮
//         </button>
//         <button
//           onClick={handleNextImage}
//           className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-dark-navy text-white p-2 rounded-full text-xs sm:text-base"
//         >
//           ❯
//         </button>
//       </div>

//       {/* Product Details (Below Carousel on Mobile, Right Side on Desktop) */}
//       <div className="text-center md:text-left mt-4 md:mt-0">
//         <div className={`transition-all ${showFeatures ? 'smaller-name' : 'normal-name'} mb-2`}>
//           <h1 className={`text-dark-grey transition-all ${showFeatures ? 'text-lg' : 'text-3xl md:text-4xl'} font-bold mb-1`}>
//             {product.name} <span className="text-sm md:text-lg text-accent">#{product.serial}</span>
//           </h1>
//           {!showFeatures && <p className="text-sm md:text-base">{product.description}</p>}
//         </div>

//         {/* View Features Button */}
//         {!showFeatures ? (
//           <button
//             onClick={toggleFeatures}
//             className="bg-accent text-dark-navy px-3 py-1 md:px-4 md:py-2 rounded mt-4"
//           >
//             View Features
//           </button>
//         ) : (
//           <div className="transition-all feature-list bg-dark-navy p-4 rounded-lg mt-4 text-white text-left">
//             <button
//               onClick={toggleFeatures}
//               className="text-xs mb-4 text-right block"
//             >
//               Back
//             </button>
//             <ul className="space-y-3">
//               {product.features.map((feature, index) => (
//                 <li key={index} className="border-b border-light-grey pb-2">
//                   <h4 className="text-base md:text-lg font-semibold">{feature.name}</h4>
//                   <p className="text-xs md:text-sm text-light-grey">{feature.description}</p>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ProductDetails = ({ product }) => {
  const [showFeatures, setShowFeatures] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const toggleFeatures = () => {
    setShowFeatures((prev) => !prev);
  };

  const handleNextImage = () => {
    setActiveImageIndex((prevIndex) =>
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setActiveImageIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center w-full max-w-5xl mx-auto p-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Carousel Section */}
      <div className="relative w-full h-60 sm:h-80 md:h-full">
        <motion.img
          key={activeImageIndex}
          src={product.images[activeImageIndex]}
          alt={`${product.name} image ${activeImageIndex + 1}`}
          className="w-full h-full object-cover rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <button
          onClick={handlePrevImage}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-dark-navy text-white p-2 rounded-full text-xs sm:text-base"
        >
          ❮
        </button>
        <button
          onClick={handleNextImage}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-dark-navy text-white p-2 rounded-full text-xs sm:text-base"
        >
          ❯
        </button>
      </div>

      {/* Product Details */}
      <div className="text-center md:text-left mt-4 md:mt-0">
        <motion.div
          className="mb-2"
          initial={{ scale: 1 }}
          animate={{ scale: showFeatures ? 0.8 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <h1
            className={`text-dark-grey font-bold mb-1 transition-all ${
              showFeatures ? 'text-xl md:text-2xl' : 'text-3xl md:text-4xl'
            }`}
          >
            {product.name} <span className="text-sm md:text-lg text-accent">#{product.serial}</span>
          </h1>
          {!showFeatures && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="text-sm md:text-base"
            >
              {product.description}
            </motion.p>
          )}
        </motion.div>

        {/* View Features Button */}
        {!showFeatures ? (
          <motion.button
            onClick={toggleFeatures}
            className="bg-accent text-dark-navy px-3 py-1 md:px-4 md:py-2 rounded mt-4"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            View Features
          </motion.button>
        ) : (
          <motion.div
            className="feature-list bg-dark-navy p-4 rounded-lg mt-4 text-white text-left"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <button
              onClick={toggleFeatures}
              className="text-xs mb-4 text-right block"
            >
              Back
            </button>
            <ul className="space-y-3">
              {product.features.map((feature, index) => (
                <li key={index} className="border-b border-light-grey pb-2">
                  <h4 className="text-base md:text-lg font-semibold">{feature.name}</h4>
                  <p className="text-xs md:text-sm text-light-grey">{feature.description}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default ProductDetails;
