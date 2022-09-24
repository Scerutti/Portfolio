import React from 'react';
import IMG1 from '../../assets/dogs-page-home.png';
import IMG2 from '../../assets/rick-morty-home.png';
import IMG3 from '../../assets/ecommerce.png';
import IMG4 from '../../assets/task-list.png';
import IMG5 from '../../assets/chuck-norris-jokes.jpeg';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Doogies Page',
      img: IMG1,
      description:
        'Doggies Page is an app that allows you to view a list of dog breeds, sort them, filter them and as an extra feature create one from scratch.',
      technologies: 'React | Redux | Node Js | Express | PostgreSQL',
      link: 'https://doggies-page.vercel.app',
      github: 'https://github.com/Scerutti/Dogs-API-Deployment',
    },
    {
      id: 2,
      title: 'Chuck Norris Jokes',
      img: IMG5,
      description:
        'It is a SPA that generates random jokes consumed from an external API.',
      technologies: ' TypeScript | React ',
      link: 'https://chuck-norris-jokes-scerutti.vercel.app',
      github: 'https://github.com/Scerutti/chuck-norris-jokes',
    },
    {
      id: 3,
      title: 'E-commerce App',
      img: IMG3,
      description: 'This App is a page dedicated to the purchase of electronic products, which has functionalities such as login, shopping cart, among others.',
      technologies: 'JavaScript | Webpack',
      link: 'https://salchistore.vercel.app',
      github: 'https://github.com/federicoacuna/soyHenryWebFT23b-G01-PF',
    },
    {
      id: 4,
      title: 'Task List App',
      img: IMG4,
      description:
        'A SPA, which allows the user to load tasks, with subtasks. Saving the session in the Local Storage.',
      technologies: ' TypeScript | React | Redux | Node Js',
      link: 'https://todos-list-wine.vercel.app',
      github: 'https://github.com/Scerutti/TaskList-complete',
    },
    {
      id: 5,
      title: 'Rick & Morty SPA',
      img: IMG2,
      description:
        'Rick and Morty application that provides information about the characters of this animated series.',
      technologies: 'React | Redux',
      link: 'https://rick-and-morty-olive.vercel.app',
      github: 'https://github.com/Scerutti/Rick-and-Morty',
    }
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
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
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
