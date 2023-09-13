import React, { useState, useEffect } from "react";
// import numeral from "numeral"; // For formatting currency
import "../../assets/css/calculator.css";
// import Contact from "../../assets/images/homeLoan2.jpg";
import Contact from "../../assets/images/homecal.jpg";
import Box from "@mui/material/Box";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const LoanEligibilityCalculator = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [netIncome, setNetIncome] = useState("");
  const [tenure, setTenure] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [otherEmis, setOtherEmis] = useState("");
  const [homeLoanEligibility, setHomeLoanEligibility] = useState(0);
  const [homeLoanEmi, setHomeLoanEmi] = useState(0);

  useEffect(() => {
    calculateHomeLoanEmi(); // Calculate EMI whenever homeLoanEligibility changes
  }, [homeLoanEligibility]);

  const calculateHomeLoanEligibility = () => {
    const maxEmiPercentage = 0.5; // Maximum EMI percentage of net income
    const monthlyIncome = parseFloat(netIncome);
    const existingEmis = parseFloat(otherEmis);
    const rateOfInterest = parseFloat(interestRate) / 100 / 12;
    const totalMonths = parseInt(tenure) * 12;

    // Calculate maximum eligible EMI based on income and other EMIs
    const maxEligibleEmi = monthlyIncome * maxEmiPercentage - existingEmis;

    // Calculate eligible loan amount based on EMI and interest rate
    const principal =
      (maxEligibleEmi / rateOfInterest) *
      (1 - Math.pow(1 + rateOfInterest, -totalMonths));
    setHomeLoanEligibility(principal.toFixed(2));
  };

  const calculateHomeLoanEmi = () => {
    const principal = parseFloat(homeLoanEligibility);
    console.log("principal",principal)
    const rateOfInterests = parseFloat(interestRate) / 100;
    console.log("rateOfInterest",rateOfInterests)
    const totalMonths = parseInt(tenure) * 12;
    console.log("totalMonths",totalMonths)

    // Calculate the monthly EMI using the formula
    const monthlyInterestRateforeligiiblity=rateOfInterests/12;
    console.log("monthlyInterestRateforeligiiblity",monthlyInterestRateforeligiiblity)
    const numerator1=principal*monthlyInterestRateforeligiiblity*Math.pow(1 + monthlyInterestRateforeligiiblity, totalMonths);
    console.log("numerator1",numerator1)
    const denominator1=
        Math.pow(1 + monthlyInterestRateforeligiiblity, totalMonths) - 1;
    console.log("denominator1",denominator1)    
    const emi = numerator1 / denominator1;
    console.log("emi",emi)
    setHomeLoanEmi(emi.toFixed(0));
  };

  
  const checkEligibility = () => {
    calculateHomeLoanEligibility();
    // calculateHomeLoanEmi();
    if(!netIncome || !tenure || !interestRate || !otherEmis){
      alert("Enter All Details")
    }
    if (
      isNaN(netIncome) ||
      isNaN(tenure) ||
      isNaN(interestRate) ||
      isNaN(otherEmis)
    ) {
      // If any input value is not a valid number, set eligibility and EMI to 0
      setHomeLoanEligibility(0);
      setHomeLoanEmi(0);
      return;
    }
  };

  const resetCalculator = () => {
    setNetIncome("");
    setTenure("");
    setInterestRate("");
    setOtherEmis("");
    setHomeLoanEligibility(0);
    setHomeLoanEmi(0);
  };

  const handleInputChange = (event, setState) => {
    const input = event.target.value;
    if (!isNaN(input)) {
      setState(input);
    }
  };

  return (
    <section className="section mt-5 pt-4 pb-5 contact-div sectionCSS ">
      <div className="container2">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6  contactCSS">
              <div className="row">
                <div className="img-fluid">
                  <img
                    src={Contact}
                    className="bd-placeholder-img card-img-top img-fluid"
                    width="400"
                    height="400"
                    alt="Balance Transfer"
                  />
                </div>
              </div>
            </div>

            <div className="col-md-6  contactCSS">
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            ></Box>
              
              <h2 className="headerCSS"> LOAN ELIGIBILITY CALCULATOR</h2>
              
              <hr className="hrCSS" />
              <div className="total_amount_card">
              <div className="card_text ">
                  <div>
                  <p>
  Your Home Loan Eligibility Amount:
  <span className="AmtCss">
    {isNaN(homeLoanEligibility) ? "₹0" : `₹${homeLoanEligibility}`}
  </span>
</p>
<p>
  Your Home Loan EMI Amount:
  <span className="AmtCss">
    {isNaN(homeLoanEmi) ? "₹0" : `₹${homeLoanEmi}`}
  </span>
</p>
                  </div>
                </div>
                </div>
               <br/>
              <div className="con1">
                <div>
                  <label>Net Income (monthly):</label>
                  <input
                className="form-control mb-1"
                type="text"
                inputMode="numeric"
                value={netIncome}
                onChange={(e) => handleInputChange(e, setNetIncome)}
              />
                </div>

                <div>
                  <label>Tenure (years):</label>
                  <input
                className="form-control mb-1"
                type="text"
                inputMode="numeric"
                value={tenure}
                onChange={(e) => handleInputChange(e, setTenure)}
              />
                </div>

                <div>
                  <label>Interest Rate (% P.A.):</label>
                  <input
                className="form-control mb-1"
                type="text"
                inputMode="numeric"
                value={interestRate}
                onChange={(e) => handleInputChange(e, setInterestRate)}
              />
                </div>

                <div>
                  <label>Other EMIs (monthly):</label>
                  <input
                className="form-control mb-1"
                type="text"
                inputMode="numeric"
                value={otherEmis}
                onChange={(e) => handleInputChange(e, setOtherEmis)}
              />
                </div>

              </div>
          
            
              <div class="button-container">

              <div className="from-group py-3 hlB">
              <Stack spacing={2} direction="row">
                        <Button
                          type="submit"
                          className="button button1"
                          variant="outlined"
                          onClick={checkEligibility} 
                        >
                        {/* <Button
                          type="submit"
                          className="button button1"
                          variant="outlined"
                          onClick={() => {calculateHomeLoanEligibility();calculateHomeLoanEmi();}}
                        > */}
                          Calculate
                        </Button>
                        
                        <Button
                          className="button button2"
                          onClick={resetCalculator}
                          variant="outlined"
                        >
                          Reset
                        </Button>
                      </Stack>
                      </div>
                      </div>
             
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoanEligibilityCalculator;