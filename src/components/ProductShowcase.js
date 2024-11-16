// import React, { useState } from 'react';
// import ProductNavigation from './ProductNavigation';
// import ProductDetails from './ProductDetails';

// const ProductShowcase = () => {
//   const [selectedProduct, setSelectedProduct] = useState(0);

//   const products = [
//     {
//       name: "Product 1",
//       serial: "001",
//       description: "This is the description of Product 1.",
//       features: [
//         { name: "Feature 1", description: "Detailed description of Feature 1." },
//         { name: "Feature 2", description: "Detailed description of Feature 2." },
//         { name: "Feature 3", description: "Detailed description of Feature 3." }
//       ],
//       images: ["/images/product1a.jpg", "/images/product1b.jpg"]
//     },
//     {
//       name: "Product 1",
//       serial: "001",
//       description: "This is the description of Product 1.",
//       features: [
//         { name: "Feature 1", description: "Detailed description of Feature 1." },
//         { name: "Feature 2", description: "Detailed description of Feature 2." },
//         { name: "Feature 3", description: "Detailed description of Feature 3." }
//       ],
//       images: ["/images/product1a.jpg", "/images/product1b.jpg"]
//     },
//     {
//       name: "Product 1",
//       serial: "001",
//       description: "This is the description of Product 1.",
//       features: [
//         { name: "Feature 1", description: "Detailed description of Feature 1." },
//         { name: "Feature 2", description: "Detailed description of Feature 2." },
//         { name: "Feature 3", description: "Detailed description of Feature 3." }
//       ],
//       images: ["/images/product1a.jpg", "/images/product1b.jpg"]

//     },
//     {
//       name: "Product 1",
//       serial: "001",
//       description: "This is the description of Product 1.",
//       features: [
//         { name: "Feature 1", description: "Detailed description of Feature 1." },
//         { name: "Feature 2", description: "Detailed description of Feature 2." },
//         { name: "Feature 3", description: "Detailed description of Feature 3." }
//       ],
//       images: ["/images/product1a.jpg", "/images/product1b.jpg"]
//     },
//     {
//       name: "Product 1",
//       serial: "001",
//       description: "This is the description of Product 1.",
//       features: [
//         { name: "Feature 1", description: "Detailed description of Feature 1." },
//         { name: "Feature 2", description: "Detailed description of Feature 2." },
//         { name: "Feature 3", description: "Detailed description of Feature 3." }
//       ],
//       images: ["/images/product1a.jpg", "/images/product1b.jpg"]
//     },
//     {
//       name: "Switchable Glass",
//       serial: "002",
//       description: "This is the description of Product 1.",
//       features: [
//         { name: "Feature 1", description: "Detailed description of Feature 1." },
//         { name: "Feature 2", description: "Detailed description of Feature 2." },
//         { name: "Feature 3", description: "Detailed description of Feature 3." }
//       ],
//       images: ["/images/product1a.jpg", "/images/product1b.jpg"]
//     }
//     // Add other products here...
//   ];

//   return (
//     <section id="products" className="py-20 bg-light-grey text-light text-center">
//       <h2 className="text-3xl font-bold mb-5 text-dark-navy">Our Products</h2>
//       <ProductNavigation
//         products={products}
//         selectedProduct={selectedProduct}
//         onSelectProduct={setSelectedProduct}
//       />
//       <ProductDetails product={products[selectedProduct]} />
//     </section>
//   );
// };

// export default ProductShowcase;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProductNavigation from './ProductNavigation';
import ProductDetails from './ProductDetails';

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const ProductShowcase = () => {
  const [selectedProduct, setSelectedProduct] = useState(0);

  const products = [
    {
      name: "LED FILM",
      serial: "002",
      description: "LED transparent film is also called photoelectric film.This technology is a light and transparent display film made of RGB-LED , which are surface-attached to the film substrate and then packaged by film pressure.The LED film produced by this technology has Film thickness < 2mm. LED film has a number of advantages such as cuttable and splicable, multiple customized models, flat front and back, high transparency, good durability and easy maintenance.",
      features: [
        { name: "Adjustable high brightness", description: "With different pixel density, conventional 3000cd/㎡,Highlight 5000cd/㎡;customized>7000cd/㎡" },
        { name: "Ultra thin", description: "The LED are hidden, and the conventional front and rear flat films are <2.5mm.Ultra-thin customized front and rear flat film <1.5mm" },
        { name: "High transparency", description: "About 50-90% physical transparency with different point spacing,and a reasonable viewing distance of 99% visual transparency" },
      ],
      images: ["https://media.licdn.com/dms/image/v2/D5612AQEEt9sH33ihIQ/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1712039043393?e=1736380800&v=beta&t=0vTymV43NMrVMOYhT5AS5XjB5Ch1HBtRSvgFxxp3nog", "/images/product1b.jpg"],
    },
    // Add other products here...
  ];

  return (
    <motion.section
      id="products"
      className="py-20 bg-light-grey text-light text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={fadeIn}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold mb-5 text-dark-navy">Our Products</h2>
      <ProductNavigation
        products={products}
        selectedProduct={selectedProduct}
        onSelectProduct={setSelectedProduct}
      />
      <ProductDetails product={products[selectedProduct]} />
    </motion.section>
  );
};

export default ProductShowcase;
