import React from "react";
import "../styles/Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram"
import TwitterIcon from "@mui/icons-material/Twitter"
import FacebookIcon from "@mui/icons-material/Facebook"

function Footer() {
  return <div className="footer">
    <div className="socialMedia">
      <InstagramIcon style={{width: "40px"}} />
      <TwitterIcon style={{width: "40px"}}/>
      <FacebookIcon style={{width: "40px"}}/>
    </div>
    <p>&copy; 2022 carbopolitana.com</p>
  </div>;
}

export default Footer;
