import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/images/landingFoodRecipes.jpg";
import IMG2 from "../../assets/images/PlatziBlogMaster.jpg";
import IMG3 from "../../assets/images/MobileFirstBatataBitPlatzi.jpg";
import IMG4 from "../../assets/images/spotifuLeonidasEsteban.jpg";
import IMG5 from "../../assets/images/calendarioGridLeonidasEsteban.jpg";
import IMG6 from "../../assets/images/inmobilApp.jpg";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      image: IMG1,
      title: "SPA Food Recipes [PERN]",
      github: "#linkRepo",
      deploy: "#linkDeploy",
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
      image: IMG2,
      title: "Blog [HTML & CSS]",
      github: "#linkRepo",
      deploy: "#linkDeploy",
    },
    {
      id: 4,
      image: IMG3,
      title: "BatataBit [HTML & CSS]",
      github: "#linkRepo",
      deploy: "#linkDeploy",
    },
    {
      id: 5,
      image: IMG4,
      title: "Spotifu [HTML & CSS (FlexBox)]",
      github: "#linkRepo",
      deploy: "#linkDeploy",
    },
    {
      id: 6,
      image: IMG5,
      title: "Calendario [HTML & CSS (GRID)]",
      github: "#linkRepo",
      deploy: "#linkDeploy",
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
                <a href={project.github} className="btn" target="_blank">
                  GitHub
                </a>
                <a href={project.deploy} className="btn" target="_blank">
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
