import { useSelector } from 'react-redux';
import { LenguageState } from '../../redux/reducer/types';
import { headerData } from './HeaderData';

import CV from "../../assets/cv.pdf"

const CTA = () => {
  const lenguage = useSelector((state: LenguageState) => state.lenguage);
  return (
    <div className="cta">
      <a href={CV} download="CurriculumVitae.pdf" className="btn">{lenguage ? headerData.cv.es : headerData.cv.en}</a>
      <a href="#contact" className="btn btn-primary">{lenguage ? headerData.contactButton.es : headerData.contactButton.en}</a>
    </div>
  )
}

export default CTA