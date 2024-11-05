import React, { useState } from 'react';
import './ContactUs.css';

function ContactUs() {
  const [paddingLeft, setPaddingLeft] = useState(300);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000); // Reset the form after 3 seconds
  };

  const togglePadding = () => {
    setPaddingLeft(paddingLeft === 300 ? 600 : 300);
  };

  return (
    <div className="contact-us-container" style={{ paddingLeft: `${paddingLeft}px` }}>
      <div className="contact-us-form-wrapper">
        <h1 className="contact-us-title">Let's Get in Touch!</h1>
        <form onSubmit={handleSubmit} className="contact-us-form">
          <input type="text" placeholder="Name" className="contact-input" required />
          <input type="email" placeholder="Email" className="contact-input" required />
          <textarea placeholder="Your Message" className="contact-textarea" required />
          <button onClick={togglePadding} className="contact-submit-button" style={{ marginTop: '20px' }}>
          Submit
        </button>
        </form>
        {submitted && (
          <div className="fun-animation">
            <p>Woohoo! 🎉 Thanks for reaching out!</p>
          </div>
        )}
        
      </div>
    </div>
  );
}

export default ContactUs;
