import { Pagination, Autoplay, Navigation } from 'swiper';
import { TestimonialData, Testimonials } from './FullTestimonialsData';
import { useSelector } from 'react-redux';
import { LenguageState } from '../../redux/reducer/types';
import { Box, Card, CardContent, CardHeader, Typography, makeStyles, useTheme } from '@material-ui/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { useWindowSize } from '../../shared/size-hook';
import { parseNumber } from '../../shared/parse-number';
import clsx from 'clsx';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';


const useStyles = makeStyles((theme)=>({
  container:{ marginTop: theme.spacing(16) },
  typographyRoot: { fontWeight: 500 },
  textColor:{ color: theme.palette.common.white},
  title:{
    color: "rgba(255, 255, 255, 0.6)",
    textAlign: "center",
    [theme.breakpoints.down("sm")]:{
      display:"none"
    }
  },
  subtitle:{
    textAlign: "center",
    marginBottom: theme.spacing(3),
    color: "#4db5ff",
    [theme.breakpoints.down("sm")]:{
      display:"none"
    }
  },
  swipperConteiner:{
    width: "var(--container-width-lg)",
    margin: "0 auto",
    [theme.breakpoints.down("sm")]:{
      display:"none"
    }
  },
  swipperStyle:{
    width: "40%",
    height: 440,
    paddingBottom: theme.spacing(8)
  },
  card: {
    background: 'var(--color-bg-variant)',
    textAlign: 'center',
    padding: theme.spacing(2),
    borderRadius: theme.spacing(2),
    userSelect: 'none',
    boxShadow: "unset",
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
    padding: theme.spacing(0,1,1,1),
    margin: '0.8rem auto 0'
  },
}))

const RecomendationCarrousel = () => {
  const classes = useStyles();
  const theme = useTheme();
  const windowSize = useWindowSize();
  const lenguage = useSelector((state: LenguageState) => state.lenguage);

  const truncateTestimonial = (testimonial: string, maxLength: number):string =>{
    if(testimonial.length > maxLength && (parseNumber(windowSize?.width) <= parseNumber(theme.breakpoints.values.md))){
      return testimonial.substring(0, maxLength) + "...";
    }
    return testimonial;
  }

  const paginado = parseNumber(windowSize?.width) >= parseNumber(theme.breakpoints.values.md)

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
            pagination={paginado}
            autoHeight
            navigation={parseNumber(windowSize?.width) >= parseNumber(theme.breakpoints.values.md)}
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
                      {lenguage ? truncateTestimonial(recomendation.test.es, 250) : truncateTestimonial(recomendation.test.en,150)}
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
