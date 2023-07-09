import { useSelector } from 'react-redux';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import { aboutContent } from "./AboutContent"
import { LenguageState } from '../../redux/reducer/types';
import  ME from "../../assets/me.png";

import './intro.css';


const Intro = () => {
  const lenguage = useSelector((state: LenguageState )=> state.lenguage);
  return (
        <section id="about">
          <h5>{lenguage ? aboutContent.title.es : aboutContent.title.en}</h5>
          <h2>{lenguage ? aboutContent.subtitle.es : aboutContent.subtitle.en}</h2>
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
                  <h5>{lenguage ? aboutContent.cards[0].title.es : aboutContent.cards[0].title.en}</h5>
                  <small>{lenguage ? aboutContent.cards[0].subtitle.es : aboutContent.cards[0].subtitle.en}</small>
                </article>
                <article className="about__card">
                  <VscFolderLibrary className="about__icon" />
                  <h5>{lenguage ? aboutContent.cards[1].title.es : aboutContent.cards[1].title.en}</h5>
                  <small>{lenguage ? aboutContent.cards[1].subtitle.es : aboutContent.cards[1].subtitle.en}</small>
                </article>
              </div>
              <p dangerouslySetInnerHTML={{ __html: lenguage ? aboutContent.paragraph.es : aboutContent.paragraph.en }}></p>
              <a href="#contact" className="btn btn-primary">{lenguage ? aboutContent.button.es : aboutContent.button.en}</a>
            </div>
          </div>
        </section>
  )
}

export default Intro