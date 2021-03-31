import React from "react";
import "./Navbar.css";
import wwdcImg from "../../assets/wwdc.svg";

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
            <a href="http://localhost:3000/" className="menu__item">
              Overview
            </a>
            <a href="http://localhost:3000/" className="menu__item__second">
              Swift Student Challenge
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
