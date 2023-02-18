import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa'

const HeaderSocials: React.FC = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/cerutti-sebastiáng/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/Scerutti" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://www.instagram.com/sebacrtt/" target="_blank" rel="noreferrer" ><FaInstagram /></a>
    </div>
  )
}

export default HeaderSocials