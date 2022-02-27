import React from "react";
import "./about.css";
import ME from "../../assets/images/caboDeLaVela-COL.jpeg";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h2>Acerca de mí</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experiencia</h5>
              <small>Poco más de un año</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Proyectos</h5>
              <small>5+ proyectos realizados</small>
            </article>
          </div>

          <p>
            FullStack developer con experiencia académica creando aplicaciones
            Web. Utilizo los Stacks: MERN (MongoDB, Express, React, Nodejs) o
            PERN (PostgreSQL, Express, React, Nodejs) para generar proyectos
            escalables y moduralizables. Excelente capacidad de aprendizaje y
            una gran adaptabilidad a diferentes entornos y grupos laborales.
            Desempeño mis funciones con alto rendimiento y eficacia. Interés en
            desarrollar tanto frontend, como backend.
          </p>

          <a href="#contact" className="btn btn-primary">
            Contáctame
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
