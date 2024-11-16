import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-dark-navy text-light text-center">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <form className="max-w-lg mx-auto space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-3 rounded bg-white text-dark-grey" />
        <input type="email" placeholder="Your Email" className="w-full p-3 rounded bg-white text-dark-grey" />
        <textarea placeholder="Your Message" className="w-full p-3 rounded bg-white text-dark-grey" rows="4"></textarea>
        <button className="bg-accent text-white px-6 py-3 rounded">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
