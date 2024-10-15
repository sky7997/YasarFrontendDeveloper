import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import "./index.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">AI.GEN</div>
      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li>
          <Link
            activeClass="active"
            offset={-50}
            spy={true}
            to="home"
            smooth={true}
            duration={500}
            onClick={() => setIsOpen(false)} // Close menu on link click
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            spy={true}
            to="features"
            smooth={true}
            duration={500}
            onClick={() => setIsOpen(false)} // Close menu on link click
          >
            Features
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            spy={true}
            to="roadmap"
            smooth={true}
            duration={500}
            onClick={() => setIsOpen(false)} // Close menu on link click
          >
            Roadmap
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            spy={true}
            to="tokenomics"
            smooth={true}
            duration={500}
            onClick={() => setIsOpen(false)} // Close menu on link click
          >
            Tokenomics
          </Link>
        </li>
      </ul>
      <div className="login-btns">
        <button className="btn">Wallpaper</button>
        <button className="btn">Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;
