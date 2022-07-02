import React, { useState, useEffect } from "react";
import Logo from "../assets/pastaLogo.png";
import "../styles/Navbar.css";
import ReorderOutlinedIcon from "@mui/icons-material/ReorderOutlined";
import { Link } from "react-scroll";
import "aos/dist/aos.css";

const Navbar = () => {
  const [openLinks, setOpenLinks] = useState(false);
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} alt="Logo" />
        <div className="hiddenLinks">
          <div className="hiddenOne">
            <Link
              className="link"
              to="home"
              spy={true}
              smooth={true}
              offset={-500}
              duration={500}
            >
              Home
            </Link>

            <Link
              className="link"
              to="popular"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
            >
              Menu
            </Link>
          </div>
          <div className="hiddenTwo">
            <Link
              className="link"
              to="about"
              spy={true}
              smooth={true}
              offset={270}
              duration={500}
            >
              About
            </Link>
            <Link
              className="link"
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
      <div className="rightSide">
        <Link
          className="link"
          to="home"
          spy={true}
          smooth={true}
          offset={-500}
          duration={500}
          x
        >
          Home
        </Link>

        <Link
          className="link"
          to="popular"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
        >
          Menu
        </Link>
        <Link
          className="link"
          to="about"
          spy={true}
          smooth={true}
          offset={270}
          duration={500}
        >
          About
        </Link>
        <Link
          className="link"
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          Contact
        </Link>
        <button id={openLinks ? "openSvg" : ""} onClick={toggleNavbar}>
          <ReorderOutlinedIcon />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
