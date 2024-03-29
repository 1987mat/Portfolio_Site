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
            <div className="form-control">
              <label htmlFor="first_name">First Name</label>
              <input type="text" name="name" id="first_name" required></input>
            </div>
            <div className="form-control">
              <label htmlFor="last_name">Last Name</label>
              <input
                type="text"
                name="last_name"
                id="last_name"
                required
              ></input>
            </div>
            <div className="form-control">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" name="email" required></input>
            </div>
            <div className="form-control">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <div className="form-control">
              <input type="submit" className="submit-btn"></input>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
});

export default ContactForm;
