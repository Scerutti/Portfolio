import React from 'react';
import emailjs from '@emailjs/browser';
import { MdOutlineEmail } from 'react-icons/md';
import './contact.css';
import { useSelector } from 'react-redux';
import { LenguageState } from '../../redux/reducer/types';
import contactData from './ContactData';

const Contact = () => {
  const lenguage = useSelector((state: LenguageState) => state.lenguage);
  const [message, setMessage] = React.useState(false);

  const formRef = React.useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage(true);
    if (formRef.current) {
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
    }
    e.currentTarget.reset();
  };

  return (
    <section id="contact">
      <h5>{lenguage ? contactData.title.es : contactData.title.en}</h5>
      <h5>{lenguage ? contactData.caption.es : contactData.caption.en}</h5>
      <h2>{lenguage ? contactData.subtitle.es : contactData.subtitle.en}</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>{contactData.mail}</h5>
            <a href={`mailto:${contactData.mail}`}>{lenguage ? contactData.button.es : contactData.button.en}</a>
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
            type="email"
            placeholder="Your Email"
            name="user_email"
            required
          />
          <textarea
            placeholder="Your message"
            rows={7}
            name="message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            {lenguage ? contactData.button.es : contactData.button.en}
          </button>
          {message && <span>{lenguage ? contactData.thanks.es : contactData.thanks.en}</span>}
        </form>
      </div>
    </section>
  );
};

export default Contact;