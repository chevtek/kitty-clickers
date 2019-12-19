import React from "react";
import logo from "../../images/game-logo.png";
import Image from "react-bootstrap/Image";
import "./styles.css";

const Footer = () => (
  <footer className="d-flex flex-column justify-content-end align-items-center pb-3">
    <div>
      <Image
        style={{ width: "30px", height: "30px" }}
        className="logo text-center"
        src={logo}
      />
      <div>
        <a href="https://github.com/nikkiford/kitty-clickers">Kitty Clickers</a>{" "}
        by <a href="https://github.com/nikkiford">Nikki Ford</a>
      </div>
    </div>
  </footer>
);

export default Footer;
