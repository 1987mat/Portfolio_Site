import React from 'react';

function ContactForm() {
  return (
    <section id="contact">
      <div className="contact-wrapper">
        <h1 className="contact-title">Get in touch</h1>
        <div className="form-container">
          <form>
            <input
              type="text"
              name="first_name"
              placeholder="Full Name"
              required
            ></input>
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              required
            ></input>
            <input
              type="email"
              name="email"
              placeholder="email"
              required
            ></input>
            <textarea
              name="message"
              placeholder="Your message"
              required
            ></textarea>
            <input type="submit" className="submit-btn"></input>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
