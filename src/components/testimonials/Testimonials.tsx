import { BsLinkedin } from 'react-icons/bs';
import { Pagination, Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { TestimonialData, Testimonials } from './FullTestimonialsData';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';
import { useSelector } from 'react-redux';
import { LenguageState } from '../../redux/reducer/types';

const RecomendationCarrousel = () => {
  const lenguage = useSelector((state: LenguageState) => state.lenguage);

  return (
        <section id="testimonials">
          <h5>{lenguage ? TestimonialData.title.es : TestimonialData.title.en}</h5>
          <h2>{lenguage ? TestimonialData.subtitle.es : TestimonialData.subtitle.en}</h2>
          <Swiper
            className="container testimonials__container"
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
                <div className="client__avatar">
                  <a href={recomendation.link} target='_blanck'>
                    <BsLinkedin />
                  </a>
                </div>
                <h5 className='client__name'>{recomendation.name}</h5>
                <small className="client__review">{lenguage ? recomendation.test.es : recomendation.test.en}</small>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
  )
}

export default RecomendationCarrousel;
