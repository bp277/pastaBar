import React, { useEffect } from "react";
import "../styles/Popular.css";
import AOS from "aos";
import PopularImg from "../assets/popularMain.png";
import { Link } from "react-router-dom";

function Popular() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="popular" id="popular">
      <div className="popularHeading">
        <h2>Izaberi pastu po tvojoj meri</h2>
        <h1>Naš izbor</h1>
      </div>
      <div className="popularMain">
        <div className="popularLeft" data-aos="slide-right">
          <div className="popularList">
            <p>Popularno</p>
            <ul className="pastaList">
              <li>
                <p className="pastaName">Carbonara</p>
                <span className="pastaPrice">380rsd</span>
              </li>
              <li>
                <p className="pastaName">Amatriciana</p>
                <span className="pastaPrice">320rsd</span>
              </li>
              <li>
                <p className="pastaName">Bolognese</p>
                <span className="pastaPrice">340rsd</span>
              </li>
              <li>
                <p className="pastaName">Funghi</p>
                <span className="pastaPrice">300rsd</span>
              </li>
            </ul>
            <div>
              <Link to="/menu">
                <button>Standard Menu</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="popularCenter">
          <img src={PopularImg} />
        </div>
        <div className="popularRight" data-aos="slide-left">
          <div className="popularList">
            <p>Vegan</p>
            <ul className="pastaList">
              <li>
                <p className="pastaName">Aglio e Olio</p>
                <span className="pastaPrice">290rsd</span>
              </li>
              <li>
                <p className="pastaName">Napolitana</p>
                <span className="pastaPrice">250rsd</span>
              </li>
              <li>
                <p className="pastaName">Spinaci</p>
                <span className="pastaPrice">270rsd</span>
              </li>
              <li>
                <p className="pastaName">Arrabiata</p>
                <span className="pastaPrice">260rsd</span>
              </li>
            </ul>
            <div>
              <Link to="/vegan-menu">
                <button>Vegan Menu</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popular;
