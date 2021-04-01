import React from "react";
import "./Navbar.css";
import wwdcImg from "../../assets/wwdc.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar__top">
      <div className="navbar__wrapper">
        <div className="navbar__background"></div>
        <div className="navbar__content">
          <h2 className="navbar__title">
            <a href="http://localhost:3000/" className="navbar__title__logo">
              <img
                className="navbar__logo"
                src={wwdcImg}
                alt="wwdc 2021 logo"
              />
            </a>
          </h2>
          <div className="navbar__menu">
            <Link to="/" className="menu__item">
              <a>Overview</a>{" "}
            </Link>

            <Link to="/swift-student-challenge" className="menu__item__second">
              <a>Swift Student Challenge</a>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
