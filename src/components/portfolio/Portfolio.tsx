import './portfolio.css';
import { PortfolioData, SoloProjects } from './FullDataPortfolio';
import { useSelector } from 'react-redux';
import { LenguageState } from '../../redux/reducer/types';

const Portfolio = () => {
  const lenguage = useSelector((state: LenguageState) => state.lenguage);

  return (
        <section id="portfolio">
          <h5>{lenguage ? PortfolioData.title.es : PortfolioData.title.en}</h5>
          <h2>{PortfolioData.subtitle}</h2>
          <div className="container portfolio__container">
          {SoloProjects.map(project => (
              <article className="portfolio__item" key={project.id}>
                <div className="portfolio__item-image">
                  <img src={project.img} alt={project.title} />
                </div>
                <div className="portfolio__item-content">
                  <h3>{project.title}</h3>
                  <p>{lenguage ? project.description.es : project.description.en}</p>
                  <p>{project.technologies}</p>
                </div>
                <div className="portfolio__item-cta">
                  <a
                    href={project.github}
                    target="_blank"
                    className="btn"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.link ? project.link : "/error" }
                    target={project.link ? "_blank" : undefined}
                    className="btn btn-primary"
                    rel="noreferrer"
                  >
                    {lenguage ? PortfolioData.button.es : PortfolioData.button.en}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
  );
};

export default Portfolio;
