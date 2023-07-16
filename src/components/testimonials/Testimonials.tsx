import { Pagination, Autoplay, Navigation } from 'swiper';
import { TestimonialData, Testimonials } from './FullTestimonialsData';
import { useSelector } from 'react-redux';
import { LenguageState } from '../../redux/reducer/types';
import { Box, Card, CardContent, CardHeader, Typography, makeStyles } from '@material-ui/core';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';
import clsx from 'clsx';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme)=>({
  container:{ marginTop: theme.spacing(16) },
  typographyRoot: { fontWeight: 500 },
  textColor:{ color: theme.palette.common.white},
  title:{
    color: "rgba(255, 255, 255, 0.6)",
    textAlign: "center"
  },
  subtitle:{
    textAlign: "center",
    marginBottom: theme.spacing(3),
    color: "#4db5ff"
  },
  swipperConteiner:{
    width: "var(--container-width-lg)",
    margin: "0 auto"
  },
  swipperStyle:{
    width: "40%",
    height: 450,
    paddingBottom: theme.spacing(8)
  },
  card: {
    background: 'var(--color-bg-variant)',
    textAlign: 'center',
    padding: theme.spacing(2),
    borderRadius: theme.spacing(2),
    userSelect: 'none',
    boxShadow: "unset"
  },
  avatar: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    borderRadius: '50%',
  },
  review: {
    color: 'var(--color-light)',
    fontWeight: 300,
    display: 'block',
    width: '90%',
    margin: '0.8rem auto 0',
  },
}))

const RecomendationCarrousel = () => {
  const classes = useStyles();
  const lenguage = useSelector((state: LenguageState) => state.lenguage);

  return (
        <Box id="testimonials" component={"section"} className={classes.container}>
          <Typography variant='subtitle1' className={clsx(classes.typographyRoot, classes.title)}>{lenguage ? TestimonialData.title.es : TestimonialData.title.en}</Typography>
          <Typography variant='h5' className={clsx(classes.typographyRoot, classes.subtitle)}>{lenguage ? TestimonialData.subtitle.es : TestimonialData.subtitle.en}</Typography>
          <Swiper
            className={clsx(classes.swipperConteiner, classes.swipperStyle)}
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={40}
            slidesPerView={1}
            centeredSlides={true}
            pagination={{ clickable: true }}
            navigation={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            {Testimonials.map(recomendation => (
              <SwiperSlide className="testimonial" key={recomendation.id}>
                <Card className={classes.card}>
                  <CardHeader
                    avatar={
                      <Box data-testid={`avatar`} className={classes.avatar} >
                        <Link to={recomendation.link} target='_blank' data-testid={`linkedin-link`} >
                          <img src={recomendation.avatar} alt={recomendation.name} className={classes.avatar} />
                        </Link>
                      </Box>
                    }
                    title={<Typography variant='subtitle1' className={clsx(classes.typographyRoot, classes.textColor)}>{recomendation.name}</Typography>}
                  />
                  <CardContent>
                    <Typography variant="body2" className={classes.review} data-testid={`testimonial-text`}>
                      {lenguage ? recomendation.test.es : recomendation.test.en}
                    </Typography>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
  )
}

export default RecomendationCarrousel;
