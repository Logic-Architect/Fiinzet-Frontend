import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import logoFiinzet from "../assets/images/logoPng.png";
import '../assets/css/navbar.css';



function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [removeBorder, setRemoveBorder] = useState(false);


  const handleLinkClick = () => {
    setIsNavOpen(false);
  };

  const handleToggleClick = () => {
    setIsNavOpen(!isNavOpen);
    setRemoveBorder(false);
  };
  

  useEffect(() => {
    const closeNavOnOutsideClick = (e) => {
      if (isNavOpen && !e.target.closest(".navbar")) {
        setIsNavOpen(false);
      }
    };

    document.addEventListener("click", closeNavOnOutsideClick);

    return () => {
      document.removeEventListener("click", closeNavOnOutsideClick);
    };
  }, [isNavOpen]);

  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light fixed-top" id="neubar">
        <div className="container">
          <div>
            <a className="navbar-brand" href="/">
              <img
                src={logoFiinzet}
                className="logo"
                alt="Bootstrap"
                width="50"
                height="50"
              />
            </a>
          </div>
          <button
            className={`navbar-toggler${removeBorder ? " remove-border" : ""}`}
            type="button"
            aria-expanded={isNavOpen}
            aria-label="Toggle navigation"
            onClick={handleToggleClick}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse${isNavOpen ? " show" : ""}`}>
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <Link to="/" className="nav-link" aria-current="page" onClick={handleLinkClick}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link" aria-current="page" onClick={handleLinkClick}>
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/product" className="nav-link" aria-current="page" onClick={handleLinkClick}>
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link" aria-current="page" onClick={handleLinkClick}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;