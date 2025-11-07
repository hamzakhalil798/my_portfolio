import React from 'react';
import '../assets/styles/Contact.scss';

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact</h1>
          <p>
            Feel free to reach out for collaborations or project discussions:
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
