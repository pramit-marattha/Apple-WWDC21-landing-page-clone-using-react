import React from "react";
import "./BodySection.css";
import wwdcVideo from "../../assets/hero-landscape-large-2048x1152.mp4";

const BodySection = () => {
  return (
    <div>
      <video autoPlay muted className="video__position">
        <source src={wwdcVideo} type="video/mp4" />
      </video>
      <h1 className="text__position">Glow and Behold.</h1>
      <p className="paragraph__text">
        The Apple Worldwide Developers Conference is coming to a screen near
        you,
        <br /> June 7 to 11. Join the worldwide developer community for an
        all-online program <br /> with exciting announcements, sessions, and
        labs at no cost. You’ll get a first look
        <br /> at the latest Apple platforms, tools, and technologies — so you
        can create your
        <br /> most innovative apps and games yet.
      </p>
      <div className="paragraph__text__second">
        Learn about this year’s{"  "}
        <a
          style={{ textDecoration: "none" }}
          href="https://developer.apple.com/wwdc21/swift-student-challenge/"
        >
          {" "}
          Swift Student Challenge
        </a>
        , and stay tuned for additional details.
      </div>
    </div>
  );
};

export default BodySection;
