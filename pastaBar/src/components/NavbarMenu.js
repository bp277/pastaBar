import Logo from "../assets/pastaLogo.png";
import "../styles/Navbar.css";
import { Link } from "react-scroll";
import { Link as ReactLink } from "react-router-dom";
import "aos/dist/aos.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={Logo} alt="Logo" />
        <div className="hiddenLinks">
          <Link
            className="link"
            to="home"
            spy={true}
            smooth={true}
            offset={-500}
            duration={500}
          >
            <ReactLink to="/">Home</ReactLink>
          </Link>
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
        >
          <ReactLink to="/">Home</ReactLink>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
