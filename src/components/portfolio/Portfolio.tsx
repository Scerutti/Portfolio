import { Card, CardActionArea, CardContent, CardMedia, Typography, makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { LenguageState } from '../../redux/reducer/types';
import { useNavigate } from 'react-router-dom';
import { PortfolioData, SoloProjects } from './FullDataPortfolio';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    backgroundColor: '#2c2c6c',
    borderRadius: '2rem',
    border: '1px solid transparent',
    transition: theme.transitions.create(['border-color', 'background'], {
      duration: theme.transitions.duration.short,
    }),
    '&:hover': {
      borderColor: theme.palette.primary.main,
      background: 'transparent',
    },
  },
  information: {
    color: theme.palette.common.white,
  },
  media: {
    borderRadius: '1.5rem',
    overflow: 'hidden',
    maxWidth: '100%',
  },
  cardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: theme.spacing(3),
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr',
    },
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: 'repeat(5, 1fr)',
    },
  },
}));

const Portfolio = () => {
  const lenguage = useSelector((state: LenguageState) => state.lenguage);
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <section id="portfolio" role="portfolio">
      <h5>{lenguage ? PortfolioData.title.es : PortfolioData.title.en}</h5>
      <h2>{PortfolioData.subtitle}</h2>
      <div className={classes.cardGrid}>
        {SoloProjects.map((project, index) => (
          <Card key={index} className={classes.root} role={`card-portfolio-${project.id}`}>
            <CardActionArea onClick={() => navigate(`/portfolio/${project.id}`)}>
              <CardMedia
                component="img"
                alt={project.title}
                height="140"
                image={project.img}
                title={project.title}
                className={classes.media}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2" className={classes.information} role={`card-title-${project.id}`}>
                  {project.title}
                </Typography>
                <Typography variant="body2" className={classes.information} component="p" role={`card-tecnologias-${project.id}`}>
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
