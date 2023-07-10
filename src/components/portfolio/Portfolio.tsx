import { Card, CardActionArea, CardContent, CardMedia, Typography, makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { LenguageState } from '../../redux/reducer/types';
import './portfolio.css';
import { useNavigate } from 'react-router-dom';
import { PortfolioData, SoloProjects } from './FullDataPortfolio';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  information: {
    color: theme.palette.common.white
  }
}));

const Portfolio = () => {
  const lenguage = useSelector((state: LenguageState) => state.lenguage);
  const classes = useStyles();
  const navigate = useNavigate();


  return (
    <section id="portfolio">
      <h5>{lenguage ? PortfolioData.title.es : PortfolioData.title.en}</h5>
      <h2>{PortfolioData.subtitle}</h2>
      <div className="container portfolio__container">
        {SoloProjects.map((project, index) => (
          <Card className={classes.root} key={index} style={{ backgroundColor: '#2c2c6c' }}>
            <CardActionArea onClick={() => navigate(`/portfolio/${project.id}`)}>
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
