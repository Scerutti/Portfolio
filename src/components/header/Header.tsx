import { useSelector } from 'react-redux';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import { HeaderData } from './HeaderData';
import { LenguageState } from '../../redux/reducer/types';

import './header.css';

const Header = () => {
  const lenguage = useSelector((state: LenguageState) => state.lenguage);

  return (
    <header id="home">
          <div className="container header__container">
            <h5>{lenguage ? HeaderData.title.es : HeaderData.title.en}</h5>
            <h1>{HeaderData.subtitle}</h1>
            <h5 className="text-light">{HeaderData.rol}</h5>
            <CTA />
            <a href="#contact" className="scroll__down">{lenguage ? HeaderData.endButton.es : HeaderData.endButton.en}</a>
            <HeaderSocials />
          </div>
          
    </header>
  )
}

export default Header