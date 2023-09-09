import "../../../App.css";

import React from "react";
// import Product from "./pages/Product";
import Cards from "../includes/Cards";
// import Navbar from "./inc/Navbar";
import Slider from "../includes/Slider";
// import Footer from "./inc/Footer";
import About2 from "../about/About2";
import CalculatorPage from "../scenes/CalculatorPage";
import { useEffect } from "react";

// import { Link } from "react-router-dom";

// import Homeloan from "./Homeloan";
// import Form from "./Form";

function HomeLanding() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Slider />
      {/* <hr className="featurette-divider" /> */}

      <Cards />
      <hr className="featurette-divider" />
      <CalculatorPage />
      {/* <hr className="featurette-divider" /> */}
      <About2 />
    </div>
  );
}

export default HomeLanding;
