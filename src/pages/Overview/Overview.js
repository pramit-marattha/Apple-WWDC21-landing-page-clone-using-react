import React from "react";

//components
import Navbar from "../../components/Navbar";
import BodySection from "../../components/BodySection";
import Footer from "../../components/Footer";

const Overview = () => {
  return (
    <>
      <div className="mobile">
        <Navbar />
        <BodySection />
        <Footer />
      </div>
    </>
  );
};

export default Overview;
