/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeLenguage } from '../../redux/actions/index'
import { SocialsLinks } from './FullDataSocials';
const HeaderSocials = () => {
  const dispatch = useDispatch();
  const lenguage = useSelector(state => state.lenguage);

  const handleLanguageChange = (e) => {
    if (e === 'ESP') {
      dispatch(changeLenguage(true))
    } else {
      dispatch(changeLenguage(false))
    }
  };

  return (
    <div className="header__socials">
      <a href='#' onClick={(e) => handleLanguageChange(e.target.outerText)} title={!lenguage ? "Change Lenguage" : "Cambiar idioma"}>{!lenguage ? 'ESP' : 'ENG'}</a>
      {
        SocialsLinks.map((social, index) => (
          <a href={social.link} target="_blank" rel='noreferrer' key={index + 123} title={social.title}>{social.icon}</a>
        ))
      }
    </div>
  )
}

export default HeaderSocials
