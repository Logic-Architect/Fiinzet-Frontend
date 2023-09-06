import React, { useEffect } from "react";

import HomeLoan from "../../assets/images/homeLoan2.png";
import BalanceTransfer from "../../assets/images/BT.jpg";
import LoanAgainstProperty from "../../assets/images/LAP.jpg";
import { Link } from "react-router-dom";
import "../../assets/css/product.css";
function Product() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mt-3 pt-2 main">
      <div className="container marketing my-5 ">
        {/* <hr className="featurette-divider" /> */}

        <div className="row featurette hiCSS">
          <div className="col-md-5 order-md-2 iCSS ">
            <img
              src={HomeLoan}
              className="bd-placeholder-img card-img-top img-fluid mt-2 "
              width="400"
              height="400"
              alt="Home loan"
            />
          </div>

          {/* Content column with order-md-1 to place it below the image in mobile view */}
          <div className="col-md-7  order-md-1 bCSS" id="homeloan">
            <h2 className="featurette-heading fw-normal lh-1 headCSS">
              Home Loan.
              {/* <span className="text-body-secondary">It’ll blow your mind.</span> */}
            </h2>
            <p className="lead">
              "Welcome to Fiinzet, where we make your dream of owning a home a
              reality. Our team of experts is dedicated to providing you with
              personalized solutions and guidance throughout the entire loan
              process."
            </p>
            <p className="lead">
              With competitive interest rates and flexible repayment options, we
              ensure that you find the perfect plan to fit your financial needs.
              Whether you are a first-time buyer or looking to refinance, we are
              here to support you every step of the way. Apply now and take the
              first step towards making your dream home a reality with our
              trusted and reliable home loans company.
            </p>
            <button className=" btn btn-lg CPbutton">
              <Link
                to="/login"
                className="nav-link nav-linkCP"
                aria-current="page"
              >
                Apply Now
              </Link>
            </button>
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette hiCSS">
          {/* Image column with order-md-1 to keep it in the original order */}
          <div className="col-md-5 order-md-1 iCSS">
            <img
              src={BalanceTransfer}
              className="bd-placeholder-img card-img-top img-fluid "
              width="400"
              height="400"
              alt="Balance Transfer"
            />
          </div>

          {/* Content column with order-md-2 to place it on top in mobile view */}
          <div className="col-md-7  order-md-2 bCSS">
            <h2 className="featurette-heading fw-normal lh-1 headCSS">
              Balance Transfer
              {/* <span className="text-body-secondary">See for yourself.</span> */}
            </h2>
            <p className="lead">
              " At Fiinzet, we understand the importance of managing your
              finances effectively. That's why we offer seamless and efficient
              balance transfer solutions to help you save on your existing home
              loan."
            </p>
            <p className="lead">
              With our expert team by your side, you can enjoy lower interest
              rates, reduced EMIs, and a smoother repayment journey. Trust us to
              simplify your financial decisions and provide a seamless balance
              transfer experience tailored to your needs. Take the leap towards
              financial freedom and apply for a balance transfer today!
            </p>
            <button type="button" className=" btn btn-lg CPbutton">
              <Link
                to="/login"
                className="nav-link nav-linkCP"
                aria-current="page"
              >
                Apply Now
              </Link>
            </button>
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette hiCSS">
          {/* Image column with order-md-2 to place it on top in mobile view */}
          <div className="col-md-5 order-md-2 iCSS">
            <img
              src={LoanAgainstProperty}
              className="bd-placeholder-img card-img-top img-fluid "
              width="400"
              height="400"
              alt="Loan Against Property"
            />
          </div>

          {/* Content column with order-md-1 to place it below the image in mobile view */}
          <div className="col-md-7 order-md-1 bCSS">
            <h2 className="featurette-heading fw-normal lh-1 headCSS">
              Loan Against Property.
              {/* <span className="text-body-secondary">Check Now</span> */}
            </h2>
            <p className="lead">
              "Enjoy the convenience of doorstep service for all your home loan
              needs with our expert team at your service!"
            </p>
            <p className="lead">
              Fiinzet.com its Loan Against Property, allowing you to leverage your property's value while retaining ownership.
              Benefit from our competitive interest rates and repayment plans tailored to your needs. 
              Our experienced advisors will expertly guide you through the process, ensuring a seamless experience.
              Seize opportunities by applying online today and take full advantage of your property's potential. 
              Your financial goals are within reach with Fiinzet.cm's Loan Against Property.
            </p>
            <button type="button" className=" btn btn-lg CPbutton">
              <Link
                to="/login"
                className="nav-link nav-linkCP"
                aria-current="page"
              >
                Apply Now
              </Link>
            </button>
          </div>
        </div>

        {/* <hr className="featurette-divider" /> */}
      </div>
    </div>
  );
}

export default Product;