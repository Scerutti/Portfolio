import React from 'react';
import { useSelector } from 'react-redux';
import CV from '../../assets/cv.pdf';

const CTA = () => {
  const lenguage = useSelector(state => state.lenguage);
  return (
    <>
      {
        !lenguage ?
          <div className="cta">
            <a href={CV} download="CurriculumVitae.pdf" className="btn">Download CV</a>
            <a href="#contact" className="btn btn-primary">Let's talk</a>
          </div>
          :
          <div className="cta">
            <a href={CV} download="CurriculumVitae.pdf" className="btn">Descargar CV</a>
            <a href="#contact" className="btn btn-primary">Contáctame</a>
          </div>
      }
    </>
  )
}

export default CTA