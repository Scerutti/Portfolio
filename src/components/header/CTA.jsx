import React from 'react';
import { useSelector } from 'react-redux';
import CV from '../../assets/cv.pdf';
import { HeaderData } from './HeaderData';

const CTA = () => {
  const lenguage = useSelector(state => state.lenguage);
  return (
    <div className="cta">
      <a href={CV} download="CurriculumVitae.pdf" name="CurriculumVitae.pdf" className="btn">{lenguage ? HeaderData.cv.es : HeaderData.cv.en}</a>
      <a href="#contact" className="btn btn-primary">{lenguage ? HeaderData.contactButton.es : HeaderData.contactButton.en}</a>
    </div>
  )
}

export default CTA