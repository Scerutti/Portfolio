import React, { useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { BiAlignJustify } from "react-icons/bi"

import './topbar.css';
import './topbar.css';
import { useEffect } from 'react';

const Topbar = () => {
  const [activeNav, setActiveNav] = useState('#home');


  useEffect(() => {
    const handleScroll = () => {
      // eslint-disable-next-line no-unused-vars
      const home = document.querySelector("#home");
      const about = document.querySelector("#about");
      const experience = document.querySelector("#experience");
      const portfolio = document.querySelector("#portfolio");
      const testimonials = document.querySelector("#testimonials");
      const contact = document.querySelector("#contact");

      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop < about.offsetTop) {
        setActiveNav('#home');
      } else if (scrollTop >= about.offsetTop && scrollTop < experience.offsetTop) {
        setActiveNav('#about');
      } else if (scrollTop > experience.offsetTop && scrollTop < portfolio.offsetTop) {
        setActiveNav('#experience');
      } else if (scrollTop >= portfolio.offsetTop && scrollTop < testimonials.offsetTop) {
        setActiveNav('#portfolio');
      } else if (scrollTop >= testimonials.offsetTop && scrollTop < contact.offsetTop) {
        setActiveNav("#testimonials");
      } else {
        setActiveNav('#contact');
      };
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }

  }, []);

  return (
    <nav>
      <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><RiServiceLine /></a>
      <a href="#testimonials" onClick={() => setActiveNav('#testimonials')} className={activeNav === '#testimonials' ? 'active' : ''} ><BiAlignJustify /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Topbar;