import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/calculatorpage.css";
import card1 from "../../assets/images/homecal2.png";
import card2 from "../../assets/images/elgcal2.png";

function CalculatorPage() {
  
  return (
    <div>
      <section className="section mt-5 pt-4 pb-5 contact-div">
        <div className="container">
          <div>
            <div className="card-body">
              {/* ........... */}

              {/* ..... */}

              <div className="row">
                {/* <!-- ...................Card1..................... --> */}
                <div className="col-lg-6 mb-4">
                  <div className="card">
                    {/* <img className="img-fluid" src="" alt="" /> */}

                    <div className="card-body">
                      <img src={card1} className="card-logoC" alt="card" />
                      <h3 className="card-title text-center carT">
                        HOME LOAN CALCULATOR
                      </h3>
                      <hr className="hrcss" />
                      <p className="text-center paraCss2">
                        A home loan calculator is a tool that calculates
                        estimated monthly mortgage payments based on loan
                        amount, interest rate, and loan term.
                      </p>

                      <button
                        type="button"
                        className=" btn w-100 btn-lg btn-primary CPbutton"
                      >
                        <Link
                          to="/homeloan"
                          className="nav-link nav-linkCP"
                          aria-current="page"
                        >
                          Check Now
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
                {/* <!-- ...................Card2..................... --> */}
                <div className="col-lg-6 mb-4">
                  <div className="card">
                    {/* <img className="card-img-top" src="" alt="" /> */}

                    <div className="card-body">
                      <img src={card2} className="card-logoC" alt="logo"></img>
                      <h3 className="card-title text-center carT">
                        ELIGIBILITY CALCULATOR
                      </h3>
                      <hr className="hrcss" />
                      <p className="text-center paraCss2">
                        An eligibility calculator is a tool that assesses an
                        individual's qualification for a specific financial
                        product, such as a loan.
                      </p>

                      <button
                        type="button"
                        className=" btn w-100 btn-lg btn-primary CPbutton"
                      >
                        <Link
                          to="/calculator"
                          className="nav-link nav-linkCP"
                          aria-current="page"
                        >
                          Check Now
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CalculatorPage;
