import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = React.forwardRef((props, ref) => {
  const [message, setMessage] = useState('');
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
          setMessage(
            'Thanks! I will get back in touch with you soon! Have a great day!'
          );
          setTimeout(() => {
            setMessage('');
          }, 5000);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <div className="contact-wrapper" ref={ref}>
        <h1 className="contact-title">Get In Touch</h1>
        <span className="success-message">{message}</span>
        <div className="form-container">
          <form onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="First Name"
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
});

export default ContactForm;
