import { useDispatch, useSelector } from 'react-redux';
import { changeLenguage } from '../../redux/actions/index'
import { LenguageState } from '../../redux/reducer/types';
import { SocialsLinks } from './FullDataSocials';

const HeaderSocials = () => {
  const dispatch = useDispatch();
  const lenguage = useSelector((state: LenguageState) => state.lenguage);

  const handleLanguageChange = (e:string) => {
    if (e === 'ESP') {
      dispatch(changeLenguage(true))
    } else {
      dispatch(changeLenguage(false))
    }
  };

  return (
    <div className="header__socials">
      <a href='#' onClick={(e) => handleLanguageChange(e.currentTarget.outerText)} title={!lenguage ? "Change Lenguage" : "Cambiar idioma"}>{!lenguage ? 'ESP' : 'ENG'}</a>
      {
        SocialsLinks.map((social, index) => (
          <a href={social.link} target="_blank" rel='noreferrer' key={index + 123} title={social.title}>
            {social.icon}
          </a>
        ))
      }
    </div>
  )
}

export default HeaderSocials
