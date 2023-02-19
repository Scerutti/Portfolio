import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import { useSelector } from 'react-redux';
import ME from '../../assets/me.jpg';
import './intro.css';

const Intro = () => {
  const lenguage = useSelector(state => state.lenguage);
  return (
    <>
      {!lenguage ?
        <section id="about">
          <h5>Get to know</h5>
          <h2>About Me</h2>
          <div className="container about__container">
            <div className="about__me">
              <div className="about__me-image">
                <img src={ME} alt="me" />
              </div>
            </div>
            <div className="about__content">
              <div className="about__cards">
                <article className="about__card">
                  <FaAward className="about__icon" />
                  <h5>Experience</h5>
                  <small>+1 year</small>
                </article>
                <article className="about__card">
                  <VscFolderLibrary className="about__icon" />
                  <h5>Projects</h5>
                  <small>5+ Completed Projects</small>
                </article>
              </div>
              <p>Who am I 👀<br />
                🔸 Full-Stack Developer with the ability to make web projects always keeping in mind that they are scalable and modularizable so we can build as a team.
                <br />
                <br />
                Why me 🙇<br />
                🔸 All members of this community have excellent technical skills, however with me you will get a curious developer with great problem solving skills and above all a developer always willing to teach and learn from others.
                <br />
                <br />
                My work history 😉<br />
                🔸 My experience has been mainly in the academic field, for 3 years I worked as a systems engineering student where I learned strong foundations in algorithms and data structures management.</p>
              <a href="#contact" className="btn btn-primary">Let's Talk</a>
            </div>
          </div>
        </section>
        :
        <section id="about">
          <h5>Conozca</h5>
          <h2>Sobre Mi</h2>
          <div className="container about__container">
            <div className="about__me">
              <div className="about__me-image">
                <img src={ME} alt="me" />
              </div>
            </div>
            <div className="about__content">
              <div className="about__cards">
                <article className="about__card">
                  <FaAward className="about__icon" />
                  <h5>Experiencia</h5>
                  <small>+1 año</small>
                </article>
                <article className="about__card">
                  <VscFolderLibrary className="about__icon" />
                  <h5>Proyectos</h5>
                  <small>5+ Proyectos Completos</small>
                </article>
              </div>
              <p>Quien soy? 👀<br />
                🔸 Full-Stack Developer con capacidad para realizar proyectos web siempre teniendo en cuenta que sean escalables.
                <br />
                <br />
                Por qué yo? 🙇<br />
                🔸 Todos los miembros de esta comunidad tienen excelentes habilidades técnicas, sin embargo conmigo obtendrá un desarrollador curioso con grandes habilidades para resolver problemas y sobre todo un desarrollador siempre dispuesto a enseñar y aprender de los demás.
                <br />
                <br />
                Mi historial de trabajo 😉<br />
                🔸 Mi experiencia ha sido principalmente en el ámbito académico, durante 3 años me dediqué al estudio en la carrera de ingeniería de sistemas donde aprendí bases sólidas en algoritmos y manejo de estructuras de datos. Actualmente me desempeño como Junior Full-Stack Developer en Proguide Global Services, y dictando tutorías en Numen Academy.</p>
              <a href="#contact" className="btn btn-primary">Hablemos</a>
            </div>
          </div>
        </section>
      }
    </>
  )
}

export default Intro