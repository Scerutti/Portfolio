import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa'
import { useSelector } from 'react-redux';
import { LenguageState } from '../../redux/reducer/types';
import footerData from './FooterData';

import './footer.css';

const Footer = () => {
  const lenguage = useSelector((state: LenguageState) => state.lenguage);

  return (
    <footer>
      <a href="#home" className="footer__logo">Seba Cerutti</a>
        <ul className="permalinks">
          <li><a href="#home">{lenguage ? footerData.home.es : footerData.home.en}</a></li>
          <li><a href="#about">{lenguage ? footerData.about.es : footerData.about.en}</a></li>
          <li><a href="#experience">{lenguage ? footerData.experience.es : footerData.experience.en}</a></li>
          <li><a href="#portfolio">{footerData.portfolio}</a></li>
          <li><a href="#testimonials">{lenguage ? footerData.recomendations.es : footerData.recomendations.en}</a></li>
          <li><a href="#contact">{lenguage ? footerData.contact.es : footerData.contact.en}</a></li>
        </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/cerutti-sebastiáng/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
        <a href="https://github.com/Scerutti" target="_blank" rel="noreferrer" ><FaGithub /></a>
        <a href="https://www.instagram.com/sebacrtt/" target="_blank" rel="noreferrer" ><FaInstagram /></a>
      </div>
      <div className="footer__copyright">
        <small>{lenguage ? footerData.copyright.es : footerData.copyright.en }</small>
      </div>
    </footer>
  )
}

export default Footer