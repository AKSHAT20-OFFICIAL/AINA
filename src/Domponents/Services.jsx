import React from 'react';

function Services() {
  const services = [
    { title: "Switchable Glass", description: "Transform spaces with privacy glass." },
    { title: "Smart Glass Integration", description: "Add smart capabilities to your glass." },
    { title: "Custom Solutions", description: "Tailored glass solutions for unique needs." },
  ];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-center">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {services.map((service, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
