import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    await emailjs.sendForm(
      "service_akv24uf",
      "template_zvuktg6",
      form.current,
      "saDSkTlmI2A6wzQZG"
    );
    e.target.reset();
    alert("Mensaje enviado");
  };

  return (
    <section id="contact">
      <h5>Ponerse en contacto</h5>
      <h2>Contáctame</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>brayanalexanderb@gmail.com</h5>
            <a href="mailto:brayanalexanderb@gmail.com" target="_blank">
              Enviar un correo
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+57 305 890 4094</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+573058904094"
              target="_blank"
            >
              Enviar un mensaje
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Nombre completo"
            required
          />
          <input type="email" name="email" placeholder="Correo" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Mensaje..."
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
