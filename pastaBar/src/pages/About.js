import React, { useEffect } from "react";
import AboutImg from "../assets/aboutImg.jpg";
import "../styles/About.css";
import AOS from "aos";

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="about" id="about">
      <div className="aboutLeft" data-aos="slide-right">
          <h1>Naša priča</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
            est voluptatum sit, quas asperiores libero optio molestias fugiat
            sequi vero culpa porro harum possimus praesentium. Voluptatem ea
            quaerat eveniet debitis ratione adipisci ut cumque porro sapiente
            est nihil, sit assumenda quidem exercitationem ipsam sunt quae
            obcaecati, doloribus aspernatur eius culpa, delectus dolor quisquam.
            Odio quam, fugit quidem minus voluptas autem exercitationem repellat
            quos voluptatibus id optio iusto laboriosam eveniet nostrum!
          </p>
      </div>
      <div data-aos="slide-left"
        className="aboutRight"
        style={{
          backgroundImage: `url(${AboutImg})`,
        }}
      ></div>
    </div>
  );
}

export default About;
