import { BsFillPatchCheckFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { LenguageState } from '../../redux/reducer/types';
import './experience.css';
import { FrontEndExperience, BackEndExperience, ExperienceData } from './FullDataExp';

const Experience = () => {
  const lenguage = useSelector((state: LenguageState) => state.lenguage);
  return (
    <section id="experience">
          <h5>{lenguage ? ExperienceData.title.es : ExperienceData.title.en}</h5>
          <h2>{lenguage ? ExperienceData.subtitle.es : ExperienceData.subtitle.en}</h2>
        
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front-end Development</h3>
          <div className="experience__content">
            {
              FrontEndExperience.map((front, index) => (
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
              BackEndExperience.map((back, index) => (
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