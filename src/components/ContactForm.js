import React from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_t4iqj6u',
        'template_dx7uuoc',
        e.target,
        'BbO-KiEaQFoeSMDqe'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <div className="contact-wrapper">
        <h1 className="contact-title">Get in touch</h1>
        <div className="form-container">
          <form onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
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
              id="email"
              type="email"
              name="email"
              placeholder="email"
              required
            ></input>
            <textarea
              id="message"
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
