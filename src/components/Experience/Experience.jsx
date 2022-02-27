import React from "react";
import "./experience.css";
import { BsCheckCircleFill } from "react-icons/bs";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiRedux,
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiSequelize,
  SiMaterialui,
} from "react-icons/si";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Tech Skills</h5>
      <h2>Mi experiencia</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiFillHtml5 className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Intermedio</small>
              </div>
            </article>
            <article className="experience__details">
              <IoLogoCss3 className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermedio</small>
              </div>
            </article>
            <article className="experience__details">
              <SiJavascript className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Avanzado</small>
              </div>
            </article>
            <article className="experience__details">
              <FaReact className="experience__details-icon" />
              <div>
                <h4>REACT</h4>
                <small className="text-light">Avanzado</small>
              </div>
            </article>
            <article className="experience__details">
              <SiRedux className="experience__details-icon" />
              <div>
                <h4>REDUX</h4>
                <small className="text-light">Avanzado</small>
              </div>
            </article>
            <article className="experience__details">
              <SiMaterialui className="experience__details-icon" />
              <div>
                <h4>Material UI</h4>
                <small className="text-light">Principiante</small>
              </div>
            </article>
          </div>
        </div>
        {/*  */}
        <div className="experience__backend">
          <h3>Backend development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaNodeJs className="experience__details-icon" />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Intermedio</small>
              </div>
            </article>
            <article className="experience__details">
              <SiExpress className="experience__details-icon" />
              <div>
                <h4>Express JS</h4>
                <small className="text-light">Intermedio</small>
              </div>
            </article>
            <article className="experience__details">
              <SiMongodb className="experience__details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermedio</small>
              </div>
            </article>
            <article className="experience__details">
              <BsCheckCircleFill className="experience__details-icon" />
              <div>
                <h4>Mongoose</h4>
                <small className="text-light">Intermedio</small>
              </div>
            </article>
            <article className="experience__details">
              <SiPostgresql className="experience__details-icon" />
              <div>
                <h4>PostgreSQL</h4>
                <small className="text-light">Intermedio</small>
              </div>
            </article>
            <article className="experience__details">
              <SiSequelize className="experience__details-icon" />
              <div>
                <h4>Sequelize</h4>
                <small className="text-light">Intermedio</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
