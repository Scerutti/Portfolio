import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';
import { useSelector } from 'react-redux';

const Header = () => {
  const lenguage = useSelector(state => state.lenguage);

  return (
    <header id="home">
      {
        !lenguage ?
          <div className="container header__container">
            <h5>Hello I'm</h5>
            <h1>Sebastián Cerutti</h1>
            <h5 className="text-light">Full-Stack Developer</h5>
            <CTA />
            <a href="#contact" className="scroll__down">Scroll Down</a>
            <HeaderSocials />
          </div>
          :
          <div className="container header__container">
            <h5>Hola soy</h5>
            <h1>Sebastián Cerutti</h1>
            <h5 className="text-light">Full-Stack Developer</h5>
            <CTA />
            <a href="#contact" className="scroll__down">Ir al final</a>
            <HeaderSocials />
          </div>
      }
    </header>
  )
}

export default Header