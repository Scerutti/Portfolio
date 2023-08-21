import { Grid, Button, Typography, makeStyles, IconButton } from '@material-ui/core'
import React from 'react'
import { PortfolioData, ProyectsDTO, SoloProjects } from '../../components/portfolio/FullDataPortfolio';
import { useSelector } from 'react-redux';
import { LenguageState } from '../../redux/reducer/types';
import { useNavigate, useParams } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';




const useCardContainerStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100%',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  content: {
    flex: '1 0 auto',
  },
  coverContainer: {
    width: '100%',
    height: '100%',
  },
  coverImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  marginButtons: { marginRight: theme.spacing(2) }
}));


const CardContainer = () => {
  const lenguage = useSelector((state: LenguageState) => state.lenguage);
  const classes = useCardContainerStyle();
  const navigate = useNavigate();
  const params = useParams();
  const [project, setProject] = React.useState<ProyectsDTO>();

  React.useEffect(() => {
    if (params.id) {
      const proyecto = SoloProjects.find((item) => item.id === params.id);
      setProject(proyecto);
    }
  }, []);

  return (
    <div role='project-detail'>
      {project && (
        <Grid container style={{ marginTop: 32, height: '80vh' }}>
          <Grid item xs={12} md={10} style={{ backgroundColor: '#1f1f30', margin: '0 auto' }}>
            <Grid container spacing={3} className={classes.root}>
              <Grid item xs={12} md={8} className={classes.details}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <IconButton aria-label="Go Back" onClick={() => navigate(-1)} color='primary'>
                      <ArrowBackIcon />
                    </IconButton>
                  </Grid>
                  <Grid item xs={12} style={{ textAlign: "center" }}>
                    <Typography component="h5" variant="h5">
                      {project.title}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="subtitle1">
                      {lenguage ? project.description.es : project.description.en}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} style={{ display: "flex", justifyContent: "center" }}>
                    <div className={classes.controls}>
                      <Button
                        component="a"
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        variant="outlined"
                        color="primary"
                        className={classes.marginButtons}
                      >
                        Github
                      </Button>
                      <Button
                        component="a"
                        href={project.link ? project.link : "/error"}
                        target={project.link ? "_blank" : undefined}
                        variant="contained"
                        color="primary"
                        className={classes.marginButtons}
                      >
                        {lenguage ? PortfolioData.button.es : PortfolioData.button.en}
                      </Button>
                    </div>
                  </Grid>

                </Grid>
              </Grid>
              <Grid item xs={12} md={4} className={classes.coverContainer}>
                <img
                  className={classes.coverImage}
                  src={project.img}
                  alt={project.title}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default CardContainer;