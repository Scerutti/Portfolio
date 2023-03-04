import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { Pagination, Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { testimonialsENG, testimonialsESP } from './FullTestimonialsData';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';
import { useSelector } from 'react-redux';

const Testimonials = () => {
  const lenguage = useSelector(state => state.lenguage);
  return (
    <>
      {!lenguage ?
        <section id="testimonials">
          <h5>Feedback from my peers</h5>
          <h2>Testimonials</h2>
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
            {testimonialsENG.map((test, index) => (
              <SwiperSlide className="testimonial" key={`${index}${test.id}${lenguage}`}>
                <div className="client__avatar">
                  <a href={test.link} target='_blanck'>
                    <BsLinkedin />
                  </a>
                </div>
                <h5 className='client__name'>{test.name}</h5>
                <small className="client__review">{test.test}</small>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
        :
        <section id="testimonials">
          <h5>Opinión de mis compañeros</h5>
          <h2>Testimonos</h2>
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
            {testimonialsESP.map((test, index) => (
              <SwiperSlide className="testimonial" key={`${index}${test.id}${lenguage}`}>
                <div className="client__avatar">
                  <a href={test.link} target='_blanck'>
                    <BsLinkedin />
                  </a>
                </div>
                <h5 className='client__name'>{test.name}</h5>
                <small className="client__review">{test.test}</small>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      }
    </>
  )
}

export default Testimonials
