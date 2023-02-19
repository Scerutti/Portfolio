import './portfolio.css';
import { soloProjectsENG, soloProjectsESP } from './FullDataPortfolio';
import { useSelector } from 'react-redux';

const Portfolio = () => {
  const lenguage = useSelector(state => state.lenguage);
  return (
    <>
      {!lenguage ?
        <section id="portfolio">
          <h5>My Recent Work</h5>
          <h2>Portfolio</h2>
          <div className="container portfolio__container">
            {soloProjectsENG.map((pro) => (
              <article className="portfolio__item" key={pro.id}>
                <div className="portfolio__item-image">
                  <img src={pro.img} alt={pro.title} />
                </div>
                <div className="portfolio__item-content">
                  <h3>{pro.title}</h3>
                  <p>{pro.description}</p>
                  <p>{pro.technologies}</p>
                </div>
                <div className="portfolio__item-cta">
                  <a
                    href={pro.github}
                    target="_blank"
                    className="btn"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                  {
                    !pro.link ?
                      <a
                        href={'/error'}
                        className="btn btn-primary"
                      >
                        Live Demo
                      </a>
                      :
                      <a
                        href={pro.link}
                        target="_blank"
                        className="btn btn-primary"
                        rel="noreferrer"
                      >
                        Live Demo
                      </a>
                  }
                </div>
              </article>
            ))}
          </div>
        </section>
        :
        <section id="portfolio">
          <h5>Mi trabajo reciente</h5>
          <h2>Portfolio</h2>
          <div className="container portfolio__container">
            {soloProjectsESP.map((pro) => (
              <article className="portfolio__item" key={pro.id}>
                <div className="portfolio__item-image">
                  <img src={pro.img} alt={pro.title} />
                </div>
                <div className="portfolio__item-content">
                  <h3>{pro.title}</h3>
                  <p>{pro.description}</p>
                  <p>{pro.technologies}</p>
                </div>
                <div className="portfolio__item-cta">
                  <a
                    href={pro.github}
                    target="_blank"
                    className="btn"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                  {
                    !pro.link ?
                      <a
                        href={'/error'}
                        className="btn btn-primary"
                      >
                        Demo
                      </a>
                      :
                      <a
                        href={pro.link}
                        target="_blank"
                        className="btn btn-primary"
                        rel="noreferrer"
                      >
                        Demo
                      </a>
                  }
                </div>
              </article>
            ))}
          </div>
        </section>
      }
    </>
  );
};

export default Portfolio;
