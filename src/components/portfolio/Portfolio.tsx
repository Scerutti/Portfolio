import './portfolio.css';
import { portfolioData, soloProjects } from './FullDataPortfolio';
import { useSelector } from 'react-redux';
import { LenguageState } from '../../redux/reducer/types';
import { Card, CardActionArea, CardContent, CardMedia, Typography, makeStyles } from '@material-ui/core';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme)=> ({
  root: {
    maxWidth: 345,
  },
  information:{
    color: theme.palette.common.white
  }
}));

const Portfolio:React.FC<{}> = () => {
  const lenguage = useSelector((state: LenguageState) => state.lenguage);
  const classes = useStyles();
  const navigate = useNavigate();

  return (
        <section id="portfolio">
          <h5>{lenguage ? portfolioData.title.es : portfolioData.title.en}</h5>
          <h2>{portfolioData.subtitle}</h2>
          <div className="container portfolio__container">
          {soloProjects.map((project, index) => (
            <Card className={classes.root} key={index} style={{ backgroundColor: '#2c2c6c'}}>
              <CardActionArea onClick={()=> navigate(`/portfolio/${project.id}`)}>
                <CardMedia
                  component="img"
                  alt={project.title}
                  height="140"
                  image={project.img}
                  title={project.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" className={classes.information}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" className={classes.information} component="p">
                    {project.technologies}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            ))}
          </div>
        </section>
  );
};

export default Portfolio;
