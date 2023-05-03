import { useSelector } from 'react-redux';
import { LenguageState } from '../../redux/reducer/types';
import { HeaderData } from './HeaderData';

const CV = require('../../assets/cv.pdf');

const CTA = () => {
  const lenguage = useSelector((state: LenguageState) => state.lenguage);
  return (
    <div className="cta">
      <a href={CV} download="CurriculumVitae.pdf" className="btn">{lenguage ? HeaderData.cv.es : HeaderData.cv.en}</a>
      <a href="#contact" className="btn btn-primary">{lenguage ? HeaderData.contactButton.es : HeaderData.contactButton.en}</a>
    </div>
  )
}

export default CTA