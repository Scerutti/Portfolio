import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MdOutlineEmail } from 'react-icons/md';
import './contact.css';
import { useSelector } from 'react-redux';

const Contact = () => {
  const lenguage = useSelector(state => state.lenguage);
  const [message, setMessage] = useState(false);


  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs
      .sendForm(
        'service_yylr2rn',
        'template_th8zk3c',
        formRef.current,
        'tE17ckht2NDLED0-H'
      )
      .then(
        (_result) => {
        },
        (error) => {
          console.error(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      {!lenguage ?
        <section id="contact">
          <h5>Get In Touch</h5>
          <h5>
            I do receive your messages and will respond asap if the valid email is
            provided 😁
          </h5>
          <h2>Contact Me</h2>
          <div className="container contact__container">
            <div className="contact__options">
              <article className="contact__option">
                <MdOutlineEmail className="contact__option-icon" />
                <h4>Email</h4>
                <h5>softsys95@gmail.com</h5>
                <a href="mailto:softsys95@gmail.com">Send a message</a>
              </article>
            </div>
            <form ref={formRef} onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Full Name"
                name="user_name"
                required
              />
              <input
                type="text"
                placeholder="Your Email"
                name="user_email"
                required
              />
              <textarea
                placeholder="Your message"
                rows="7"
                name="message"
                required
              ></textarea>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
              {message && <span>Thanks, I'll reply ASAP 😁</span>}
            </form>
          </div>
        </section>
        :
        <section id="contact">
          <h5>Póngase en contacto</h5>
          <h5>
            Recibo sus mensajes y responderé lo antes posible si el correo electrónico válido es proporcionado 😁
          </h5>
          <h2>Contáctame</h2>
          <div className="container contact__container">
            <div className="contact__options">
              <article className="contact__option">
                <MdOutlineEmail className="contact__option-icon" />
                <h4>Email</h4>
                <h5>softsys95@gmail.com</h5>
                <a href="mailto:softsys95@gmail.com">Enviar mensaje</a>
              </article>
            </div>
            <form ref={formRef} onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Nombre Completo"
                name="user_name"
                required
              />
              <input
                type="text"
                placeholder="Tu Email"
                name="user_email"
                required
              />
              <textarea
                placeholder="Tu mensaje"
                rows="7"
                name="message"
                required
              ></textarea>
              <button type="submit" className="btn btn-primary">
                Enviar mensaje
              </button>
              {message && <span>Gracias, responderé lo antes posible 😁</span>}
            </form>
          </div>
        </section>
      }
    </>
  );
};

export default Contact;
