import React from 'react';
// import './topbar.css';
import { BottomNavigation, BottomNavigationAction, makeStyles } from '@material-ui/core';
import { HomeOutlined, PersonOutlined, BookOutlined, MessageOutlined, FormatAlignJustifyOutlined, AssignmentOutlined } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  bottomNav: {
    background: 'rgba(0, 0, 0, 0.3)',
    backdropFilter: 'blur(15px)',
    position: 'fixed',
    bottom: '2rem',
    left: '50%',
    transform: 'translateX(-50%)',
    borderRadius: '3rem',
    zIndex: 2,
    [theme.breakpoints.down("sm")]:{
      display: "none"
    }
  },
  icon: {
    color: theme.palette.common.white,
  },
  activeIcon: {
    color: theme.palette.common.white,
  },
  hiddeButton:{
    [theme.breakpoints.down("sm")]:{
      display:"none"
    }
  }
}));


const Topbar = () => {
  const classes = useStyles();
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
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }

  }, []);

  return (
    <BottomNavigation value={activeNav} showLabels className={classes.bottomNav}>
      <BottomNavigationAction value="#home" icon={<HomeOutlined />} onClick={() => setActiveNav('#home')} classes={{ root: classes.icon, selected: classes.activeIcon }} href='#home'/>
      <BottomNavigationAction value="#about" icon={<PersonOutlined />} onClick={() => setActiveNav('#about')} classes={{ root: classes.icon, selected: classes.activeIcon }} href='#about' />
      <BottomNavigationAction value="#experience" icon={<BookOutlined />} onClick={() => setActiveNav('#experience')} classes={{ root: classes.icon, selected: classes.activeIcon }}href="#experience" />
      <BottomNavigationAction value="#portfolio" icon={<AssignmentOutlined />} onClick={() => setActiveNav('#portfolio')} classes={{ root: classes.icon, selected: classes.activeIcon }} href="#portfolio" />
      <BottomNavigationAction value="#testimonials" icon={<FormatAlignJustifyOutlined />} onClick={() => setActiveNav('#testimonials')} classes={{ root: classes.icon, selected: classes.activeIcon }} className={classes.hiddeButton} href="#testimonials" />
      <BottomNavigationAction value="#contact" icon={<MessageOutlined />} onClick={() => setActiveNav('#contact')} classes={{ root: classes.icon, selected: classes.activeIcon }} href="#contact" />
    </BottomNavigation>
  )
}

export default Topbar;