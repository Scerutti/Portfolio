import { BsLinkedin } from 'react-icons/bs';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { LenguageState } from '../../redux/reducer/types';
import FooterData from './FooterData';

import './footer.css';

const Footer = () => {
  const lenguage = useSelector((state: LenguageState) => state.lenguage);

  return (
    <footer>
      <a href="#home" className="footer__logo">Seba Cerutti</a>
        <ul className="permalinks">
          <li><a href="#home">{lenguage ? FooterData.home.es : FooterData.home.en}</a></li>
          <li><a href="#about">{lenguage ? FooterData.about.es : FooterData.about.en}</a></li>
          <li><a href="#experience">{lenguage ? FooterData.experience.es : FooterData.experience.en}</a></li>
          <li><a href="#portfolio">{FooterData.portfolio}</a></li>
          <li><a href="#testimonials">{lenguage ? FooterData.recomendations.es : FooterData.recomendations.en}</a></li>
          <li><a href="#contact">{lenguage ? FooterData.contact.es : FooterData.contact.en}</a></li>
        </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/cerutti-sebastiáng/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
        <a href="https://github.com/Scerutti" target="_blank" rel="noreferrer" ><FaGithub /></a>
        <a href="https://www.instagram.com/sebacrtt/" target="_blank" rel="noreferrer" ><FaInstagram /></a>
      </div>
      <div className="footer__copyright">
        <small>{lenguage ? FooterData.copyright.es : FooterData.copyright.en }</small>
      </div>
    </footer>
  )
}

export default Footer