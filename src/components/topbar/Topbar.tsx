import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { BiAlignJustify } from "react-icons/bi"
import './topbar.css';

const Topbar = () => {
  const [activeNav, setActiveNav] = React.useState('#home');


  React.useEffect(() => {
    const handleScroll = () => {
      const about = document.querySelector("#about") as HTMLElement;
      const experience = document.querySelector("#experience") as HTMLElement;
      const portfolio = document.querySelector("#portfolio") as HTMLElement;
      const testimonials = document.querySelector("#testimonials") as HTMLElement;
      const contact = document.querySelector("#contact") as HTMLElement;

      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if ( scrollTop < about.offsetTop) {
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