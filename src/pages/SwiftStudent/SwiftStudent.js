import React from "react";

// components
import Navbar from "../../components/Navbar";
import SwiftStudentFooter from "../../components/SwiftStudentFooter";
import SwiftStudentBody from "../../components/SwiftStudentBody";

const SwiftStudent = () => {
  return (
    <>
      <Navbar />
      <SwiftStudentBody />
      <SwiftStudentFooter />
    </>
  );
};

export default SwiftStudent;
