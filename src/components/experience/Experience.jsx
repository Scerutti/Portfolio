import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import './experience.css';
import { FrontEndExperience, BackEndExperience } from './FullDataExp';

const Experience = () => {
  const lenguage = useSelector(state => state.lenguage);
  return (
    <section id="experience">
      {!lenguage ?
        <>
          <h5>The Skills I Have</h5>
          <h2>Skills</h2>
        </>
        :
        <>
          <h5>Mis </h5>
          <h2>Habilidades</h2>
        </>
      }
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front-end Development</h3>
          <div className="experience__content">
            {
              FrontEndExperience.map((front) => (
                <article className="experience__details" key={front.id}>
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
              BackEndExperience.map((back) => (
                <article className="experience__details" key={back.id}>
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