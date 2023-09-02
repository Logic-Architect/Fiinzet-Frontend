import React, { useEffect } from "react";
import BackgroundImage from "../../assets/images/bannerA1.png"; // Replace with the path to your background image
import "../../assets/css/about2.css";
import logoFiinzet from "../../assets/images/logoPng.png";

function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div
        className="p-5 mt-5 mb-4 bg-body-tertiary rounded-3 mainB "
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        <h1 className="display-5 fw-bold text-center hCSS">ABOUT US</h1>

        <div className="container  py-4 AboutB ">
          <div className="container-fluid ">
            {/* <h1 className="display-5 fw-bold">FIINZET</h1> */}
            <div className="logoCSS">
              <img
                src={logoFiinzet}
                className="logo"
                alt="Bootstrap"
                width="80"
                height="80"
              />
            </div>

            <p>
              Welcome to our company! We are a leading provider of home loans
              and existing loan solutions, dedicated to helping individuals and
              families achieve their homeownership dreams and financial goals.
              With years of experience in the financial industry, Fiinzet have
              built a reputation for reliability, transparency, and exceptional
              customer service.
            </p>
            <p>
              Our team of experts understands that buying a home is one of the
              most significant investments you'll ever make. That's why we offer
              a wide range of home loan products tailored to suit your unique
              needs and financial situation. Whether you're a first-time
              homebuyer or looking to refinance your existing mortgage, we are
              here to guide you through the process and make it as smooth and
              hassle-free as possible.
            </p>

            <p>
              For those with existing loans, we provide personalized solutions
              to help you manage your finances better. Our refinancing options
              can help you lower your monthly payments, consolidate debt, or
              access cash for other important expenses. Our team will work
              closely with you to understand your financial objectives and
              tailor a solution that aligns with your goals.
            </p>
            <p>
              Whether you're a first-time homebuyer, a homeowner looking to
              refinance, or need assistance with an existing loan, we are here
              to assist you. Our mission is to make the home loan process
              stress-free and empower you to make informed financial decisions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
