import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        BABAQUERO
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Principal</a>
        </li>
        <li>
          <a href="#about">Acerca de mí</a>
        </li>
        <li>
          <a href="#experience">Experiencia</a>
        </li>
        <li>
          <a href="#portfolio">Portafolio</a>
        </li>
        <li>
          <a href="#contact">Contáctame</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/babaquero07/" target="_blank">
          <BsLinkedin />
        </a>
        <a href="https://github.com/babaquero07" target="_blank">
          <FaGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy; Adaptado de
          <a
            href="https://www.youtube.com/channel/UCL8l_VxCAN0jOpaLaRAm8sQ"
            target="_blank"
          >
            _EGATOR_
          </a>
          Tutorials. Todos los derechos reservados.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
