import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/images/landingFoodRecipes.jpg";
import IMG2 from "../../assets/images/PlatziBlogMaster.jpg";
import IMG3 from "../../assets/images/MobileFirstBatataBitPlatzi.jpg";
import IMG4 from "../../assets/images/spotifuLeonidasEsteban.jpg";
import IMG5 from "../../assets/images/calendarioGridLeonidasEsteban.jpg";
import IMG6 from "../../assets/images/inmobilApp.jpg";
import IMG7 from "../../assets/images/pokemonStatics.png";

import triviaChallengeIMG from "../../assets/images/triviaChallenge.jpg";
import everyonesStoreIMG from "../../assets/images/everyOnesStore.jpg";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      image: triviaChallengeIMG,
      title: "Trivia Challenge [MERN]",
      github: "https://github.com/babaquero07/trivia-challenge-client",
      deploy: "https://trivia-challenge-ten.vercel.app/",
    },
    {
      id: 2,
      image: IMG6,
      title: "InmobilApp (Group project) [MERN]",
      github: "https://github.com/InmobilApp",
      deploy: "https://inmobilapp.vercel.app/",
    },
    {
      id: 3,
      image: everyonesStoreIMG,
      title: "E-commerce (Group project) [PERN]",
      github: "https://github.com/E-commerce-pf",
      deploy: "https://respaldo-everyones-store.vercel.app/",
    },
    {
      id: 4,
      image: IMG1,
      title: "Food Recipes [PERN]",
      github: "https://github.com/babaquero07/PI-Food",
      deploy: "https://food-recipes-one.vercel.app/",
    },
    {
      id: 5,
      image: IMG7,
      title: "Pokemon Static [NextJS, TypeScript]",
      github: "https://github.com/babaquero07/pokemon-static-NextJS",
      deploy: "https://pokemon-static-gold.vercel.app/",
    },
    {
      id: 6,
      image: IMG2,
      title: "Blog [HTML & CSS]",
      github: "https://github.com/babaquero07/blog",
      deploy: "https://babaquero07.github.io/blog/",
    },
    {
      id: 7,
      image: IMG3,
      title: "BatataBit [HTML & CSS]",
      github: "https://github.com/babaquero07/batata-bit",
      deploy: "https://babaquero07.github.io/batata-bit/",
    },
    {
      id: 8,
      image: IMG4,
      title: "Spotifu [HTML & CSS (FlexBox)]",
      github: "https://github.com/babaquero07/Spotifu",
      deploy: "https://babaquero07.github.io/Spotifu/",
    },
    {
      id: 9,
      image: IMG5,
      title: "Calendario [HTML & CSS (GRID)]",
      github: "https://github.com/babaquero07/calendario",
      deploy: "https://babaquero07.github.io/calendario/",
    },
  ];

  return (
    <section id="portfolio">
      <h5>Proyectos recientes</h5>
      <h2>Portafolio</h2>

      <div className="container portfolio__container">
        {projects.map((project) => {
          return (
            <article className="portfolio__item" key={project.id}>
              <div className="portfolio__item-image">
                <img src={project.image} alt="preview project img" />
              </div>
              <h3>{project.title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={project.github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={project.deploy}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Deploy
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
