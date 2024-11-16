import React, { useState } from 'react';
import { productData } from '../data';
import './ProductDescriptionPage.css';

function Wheel({ products, onSelect }) {
  const [angle, setAngle] = useState(0);

  const handleRotate = (newAngle) => {
    setAngle(newAngle);
    const selectedIndex = Math.floor(((newAngle % 360) + 360) % 360 / (360 / products.length));
    const selectedProduct = products[selectedIndex];
    onSelect(selectedProduct);
  };

  const incrementAngle = () => handleRotate(angle + (360 / products.length));
  const decrementAngle = () => handleRotate(angle - (360 / products.length));

  return (
    <div className="wheel-container">
      <div className="outer-circle">
        <div
          className="wheel"
          style={{ transform: `rotate(${angle}deg)` }}
        >
          {products.map((product, index) => (
            <div
              key={index}
              className="wheel-item"
              style={{
                transform: `rotate(${(360 / products.length) * index}deg) translateX(120px)`,
              }}
            >
              <div
                className="product-name"
                style={{ transform: `rotate(${-(360 / products.length) * index}deg)` }}
              >
                {product.name}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="wheel-pointer">
        <svg height="40" width="40" className="fill-current text-purple-500">
          <polygon points="0,20 40,0 40,40" />
        </svg>
      </div>
      <div className="wheel-buttons">
        <button className="rotate-button" onClick={decrementAngle}>
          Rotate Left
        </button>
        <button className="rotate-button" onClick={incrementAngle}>
          Rotate Right
        </button>
      </div>
    </div>
  );
}

function ProductDescriptionPage() {
  const [selectedProduct, setSelectedProduct] = useState(productData[0]);
  const [selectedModel, setSelectedModel] = useState(selectedProduct.products[0]);

  const handleModelChange = (model) => {
    setSelectedModel(model);
  };

  return (
    <div className="flex h-screen">
      {/* Left Side (80%) */}
      <div className="w-4/5 p-8 flex flex-col space-y-8">
        <div className="flex w-full space-x-4">
          <div className="w-1/2">
            <div className="border border-gray-300 rounded p-4 bg-gray-100 shadow-lg">
              <img
                src="/path/to/image.jpg"
                alt="Product"
                className="w-full h-auto object-cover rounded"
              />
            </div>
          </div>
          <div className="w-1/2">
            <h1 className="text-2xl font-bold mb-4">{selectedProduct.name}</h1>
            <div className="mb-4">
              <label className="block mb-2 font-medium text-gray-700">Select Model:</label>
              <div className="flex flex-wrap gap-2">
                {selectedProduct.products.map((model, index) => (
                  <button
                    key={index}
                    className={`model-button ${selectedModel === model ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                    onClick={() => handleModelChange(model)}
                  >
                    {model.model}
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-6">
              <h2 className="text-xl font-semibold">Specifications</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Film Color: {selectedModel.filmColor}</li>
                <li>Haze On: {selectedModel.hazeOn}</li>
                <li>Haze Off: {selectedModel.hazeOff}</li>
                <li>Light Transmittance On: {selectedModel.lightTransmittanceOn}</li>
                <li>Light Transmittance Off: {selectedModel.lightTransmittanceOff}</li>
                <li>UV Block: {selectedModel.uvBlock}</li>
                <li>IR Block: {selectedModel.irBlock}</li>
                <li>Power Consumption: {selectedModel.powerConsumption}</li>
                <li>Compatible With: {selectedModel.compatibleWith}</li>
                <li>Biggest Size: {selectedModel.biggestSize}</li>
                <li>Input Voltage: {selectedModel.inputVoltage}</li>
                <li>Glass Types: {selectedModel.glassTypes.join(', ')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side (20%) - Wheel */}
      <div className="relative w-1/5 h-screen flex justify-center items-center bg-gray-200">
        <div className="wheel-mask">
          <Wheel products={productData} onSelect={setSelectedProduct} />
        </div>
      </div>
    </div>
  );
}

export default ProductDescriptionPage;
