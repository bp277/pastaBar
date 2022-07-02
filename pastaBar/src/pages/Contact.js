import React, { useEffect } from "react";
import ContactImg from "../assets/contactpic.jpg";
import "../styles/Contact.css";
import AOS from "aos";

function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="contact" id="contact">
      <div data-aos="slide-right"
        className="leftSide"
        style={{ backgroundImage: `url(${ContactImg})` }}
      ></div>
      <div className="rightSide" data-aos="slide-left">
        <h1>Kontakt</h1>
        <form id="contact-form" method="POST">
          <label htmlFor="name">Ime</label>
          <input
            name="name"
            type="text"
            placeholder="Vaše puno ime..."
            required
          />
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            placeholder="Vaš email..."
            required
          />
          <label htmlFor="message">Poruka</label>
          <textarea
            name="message"
            placeholder="Napišite vašu poruku..."
            rows="6"
            required
          ></textarea>
          <button type="submit">Pošalji</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
