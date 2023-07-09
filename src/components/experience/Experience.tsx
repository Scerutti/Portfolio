import { BsFillPatchCheckFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { LenguageState } from '../../redux/reducer/types';
import './experience.css';
import { frontEndExperience, backEndExperience, experienceData } from './FullDataExp';

const Experience = () => {
  const lenguage = useSelector((state: LenguageState) => state.lenguage);
  return (
    <section id="experience">
          <h5>{lenguage ? experienceData.title.es : experienceData.title.en}</h5>
          <h2>{lenguage ? experienceData.subtitle.es : experienceData.subtitle.en}</h2>
        
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front-end Development</h3>
          <div className="experience__content">
            {
              frontEndExperience.map((front, index) => (
                <article className="experience__details" key={`frontid${front.id}-index${index}-name${front.name}`}>
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <h4>{front.name}</h4>
                </article>
              ))
            }
          </div>
        </div>
        <div className="experience__backend">
          <h3>Back-end Development</h3>
          <div className="experience__content">
            {
              backEndExperience.map((back, index) => (
                <article className="experience__details" key={`back-${back.id}-${index}`}>
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <h4>{back.name}</h4>
                </article>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience