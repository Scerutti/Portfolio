import { useSelector } from 'react-redux';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import { headerData } from './HeaderData';
import { LenguageState } from '../../redux/reducer/types';

import './header.css';

const Header = () => {
  const lenguage = useSelector((state: LenguageState) => state.lenguage);

  return (
    <header id="home">
          <div className="container header__container">
            <h5>{lenguage ? headerData.title.es : headerData.title.en}</h5>
            <h1>{headerData.subtitle}</h1>
            <h5 className="text-light">{headerData.rol}</h5>
            <CTA />
            <a href="#contact" className="scroll__down">{lenguage ? headerData.endButton.es : headerData.endButton.en}</a>
            <HeaderSocials />
          </div>
          
    </header>
  )
}

export default Header