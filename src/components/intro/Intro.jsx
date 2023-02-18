import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/me.jpg';
import './intro.css';

const Intro = () => {
  return (
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
  )
}

export default Intro