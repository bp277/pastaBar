import React from "react";
import bgImage from "../assets/pastaBg.jpg";
import "../styles/Home.css";
import { Link } from "react-scroll";

function Home() {
  return (
    <div
      className="home"
      id="home"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="headerContainer">
        <h1>
          Carbopolitana <br /> Pasta Bar
        </h1>
        <p>Pasta za svačiji ukus</p>
        <Link
          to="popular"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}>
          <button>Menu</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
