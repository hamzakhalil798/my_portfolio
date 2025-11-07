import React from 'react';
import '../assets/styles/Contact.scss';

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact</h1>
          <p>
            Are you in need of a high-performance and intuitive AI system to enhance your product or business? Seeking expert consultation or have burning questions about AI technology? Or simply want to connect and say "Hi 👋"? Whatever your needs, don't hesitate to reach out. I'm here to assist you every step of the way. Feel free to drop me an email for the fastest response. Let's bring your AI vision to life!
          </p>
          <h2>
            <a href="mailto:khalilhamza798@gmail.com" className="email-link">
              khalilhamza798@gmail.com
            </a>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Contact;
