import { useSelector } from 'react-redux';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import { HeaderData } from './HeaderData';
import { LenguageState } from '../../redux/reducer/types';
import { Typography, makeStyles } from '@material-ui/core';

import './header.css';
import clsx from 'clsx';

const useStyles = makeStyles((theme)=> ({
  container:{
    height: "100%",
    paddingTop: theme.spacing(14),
    overflow:"hidden"
  },
  content:{
    width: "var(--container-width-lg)",
    margin: "0 auto",
    textAlign: "center",
    height: "100%",
    position: "relative"
  },
  nameTitle:{
    fontSize: theme.spacing(5),
  },
  typographyRoot:{
    fontWeight: 500
  },
  textLight: {
    color: "var(--color-primary)"
  }
}))

const Header = () => {
  const classes = useStyles();
  const lenguage = useSelector((state: LenguageState) => state.lenguage);

  return (
    <header id="home" className={classes.container}>
      <div className={classes.content}>
        <Typography variant='subtitle2' className={classes.typographyRoot}>{lenguage ? HeaderData.title.es : HeaderData.title.en}</Typography>
        <Typography variant='h3' className={clsx(classes.nameTitle, classes.typographyRoot)}>{HeaderData.subtitle}</Typography>
        <Typography variant='subtitle2' className={clsx(classes.textLight,classes.typographyRoot)}>{HeaderData.rol}</Typography>
        <CTA />
        <a href="#contact" className="scroll__down">{lenguage ? HeaderData.endButton.es : HeaderData.endButton.en}</a>
        <HeaderSocials />
      </div>

    </header>
  )
}

export default Header