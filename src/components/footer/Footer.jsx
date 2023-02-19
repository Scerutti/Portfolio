import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa'
import { useSelector } from 'react-redux';
import './footer.css';

const Footer = () => {
  const lenguage = useSelector(state => state.lenguage);
  return (
    <footer>
      <a href="#home" className="footer__logo">Seba Cerutti</a>
      {!lenguage ?
        <ul className="permalinks">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Skills</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        :
        <ul className="permalinks">
          <li><a href="#home">Inicio</a></li>
          <li><a href="#about">Sobre Mi</a></li>
          <li><a href="#experience">Habilidades</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#testimonials">Testimonios</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>

      }
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/cerutti-sebastiáng/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
        <a href="https://github.com/Scerutti" target="_blank" rel="noreferrer" ><FaGithub /></a>
        <a href="https://www.instagram.com/sebacrtt/" target="_blank" rel="noreferrer" ><FaInstagram /></a>
      </div>
      <div className="footer__copyright">
        <small>{!lenguage ? '© SCerutti 2022. All rights reserved.' : "© SCerutti 2022. Todos los derechos reservados."}</small>
      </div>
    </footer>
  )
}

export default Footer