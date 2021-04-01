import React from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import wwdcDevImg from "../../assets/apple_developer.png";
import "./SwiftStudentFooter.css";

const SwiftStudentFooter = () => {
  return (
    <>
      <div className="footer__contain">
        <div className="footer__message">
          <a href="https://developer.apple.com/" className="footer__logo">
            <img className="foot__logo" src={wwdcDevImg} alt="wwdc 2021 logo" />
          </a>
          <ArrowForwardIosIcon />
          {/* <i class="fab fa-apple"></i> */}
          {/* <i class="fas fa-chevron-right"></i> */}
          <p>WWDC2021</p>
          <ArrowForwardIosIcon />
          <p>Swift Student Challenge</p>
        </div>
        <div className="horizontal__line"></div>
        <div className="footer__contact">
          <p>
            To view the latest developer news, visit{" "}
            <a href="https://developer.apple.com/news/">News and updates </a>
          </p>
        </div>
        <div class="footer__copyright">
          <p>
            Copyright © {new Date().getFullYear()} Apple Inc. All rights
            reserved.
          </p>

          <ul>
            <li>
              <a href="https://www.apple.com/legal/internet-services/terms/site.html">
                Terms of Use
              </a>
            </li>
            <div class="line__vertical"></div>
            <li>
              <a href="https://www.apple.com/legal/privacy/en-ww/">
                Privacy Policy
              </a>
            </li>
            <div class="line__vertical"></div>
            <li>
              <a href="https://developer.apple.com/terms/">
                License Agreements
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SwiftStudentFooter;
