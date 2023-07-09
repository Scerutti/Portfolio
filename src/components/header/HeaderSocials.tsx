import { useDispatch, useSelector } from 'react-redux';
import { changeLenguage } from '../../redux/actions/index'
import { LenguageState } from '../../redux/reducer/types';
import { IconType } from "react-icons"
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa'
import { socialsLinks } from './FullDataSocials';

const iconMap: Record<string, IconType> = {
  Github: FaGithub,
  Linkedin: BsLinkedin,
  Instagram: FaInstagram,
}

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

  const getIcon = (icon: string): JSX.Element | undefined => {
    const IconComponent = iconMap[icon];
    return IconComponent ? <IconComponent /> : undefined;
  };


  return (
    <div className="header__socials">
      <a href='#' onClick={(e) => handleLanguageChange(e.currentTarget.outerText)} title={!lenguage ? "Change Lenguage" : "Cambiar idioma"}>{!lenguage ? 'ESP' : 'ENG'}</a>
      {
        socialsLinks.map((social, index) => (
          <a href={social.link} target="_blank" rel='noreferrer' key={index + 123} title={social.title}>
            {getIcon(social.icon)}
          </a>
        ))
      }
    </div>
  )
}

export default HeaderSocials
