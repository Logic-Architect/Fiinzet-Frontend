import Box from "@mui/material/Box";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";


import Contact from "../../assets/images/homeLoan2.png";

import "../../assets/css/homeloan.css";

function HomeLoan() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [num3, setNum3] = useState(0);
  const [Add, setAdd] = useState("");

  const calcSum = (e) => {
    e.preventDefault();
    console.log(e);

    if (num1 === 0 || num2 === 0 || num3 === 0) {
      alert(
        "Please enter a valid principal amount, rate of interest, and time period"
      );
    } else {
      const principalAmount = parseInt(num1);
      console.log("principalAmount",principalAmount)
      const interestRate = parseFloat(num2) / 100;
      console.log("interestRate",interestRate)
      const timePeriodInMonths = parseInt(num3) * 12;
      console.log("timePeriodInMonths",timePeriodInMonths)

      const monthlyInterestRate = interestRate / 12;
      console.log("monthlyInterestRate",monthlyInterestRate)
      const numerator =
        principalAmount *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, timePeriodInMonths);
        console.log("numerator",numerator)
      const denominator =
        Math.pow(1 + monthlyInterestRate, timePeriodInMonths) - 1;
        console.log("denominator",denominator)  

      const emi = numerator / denominator;
      console.log("emi",emi)
      setAdd(emi.toFixed(2)); // Set EMI with 2 decimal places
    }
  };

  const handleClick = (e) => {
    setAdd(0);
    window.location.reload();
  };

  return (
    <section className="section mt-5 pt-4 pb-5 contact-div sectionCSS">
      <div className="container">
        <div className="row">
          <div className="col-md-6  contactCSS">
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

          <div className="col-md-6  contactCSS">
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            ></Box>

            <div className="homeapp">
              <div className="homecontainer">
                <div className="heading_text">
                  <h1 className="headerCS mt-3">HOME LOAN CALCULATOR</h1>
                  <hr className="hrCSS" />
                </div>
                <div className="total_amount_card">
                  <div className="card_text ">
                    <h3 className="total_amount_heading">₹ {Add}</h3>
                    <p className="total_amount_para">Your Monthly EMI</p>
                  </div>
                </div>
                <form onSubmit={calcSum}>
                  <div className="input_area">
                    <div className="from-group hlCSS">
                      <label>₹ Principal amount</label>
                      <input
                        //type="number"
                        type="text"
                        inputMode="numeric"
                        placeholder="Enter Principal Amount"
                        className="form-control"
                        value={num1 || ""}
                        onChange={(e) => setNum1(e.target.value)}
                        id="outlined-basic"
                        label="Enter Principal amount"
                        variant="outlined"
                      />
                    </div>
                    <div className="from-group  hlCSS">
                      <label>Rate of interest (p.a) %</label>
                      <input
                        //type="number"
                        type="text"
                        inputMode="numeric"
                        placeholder="Enter Rate of Interest  %"
                        className="form-control"
                        value={num2 || ""}
                        onChange={(e) => setNum2(e.target.value)}
                        id="outlined-basic"
                        label="Enter Rate of interest  %"
                        variant="outlined"
                      />
                    </div>
                    <div className="from-group  hlCSS">
                      <label>Time period ( Yr )</label>
                      <input
                       // type="number"
                       type="text"
                       inputMode="numeric"
                        placeholder="Enter Time Period"
                        className="form-control"
                        value={num3 || ""}
                        onChange={(e) => setNum3(e.target.value)}
                        id="outlined-basic"
                        label="Enter Time period"
                        variant="outlined"
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
                        >
                          Calculate
                        </Button>
                        <Button
                          className="button button2"
                          onClick={handleClick}
                          variant="outlined"
                        >
                          Reset
                        </Button>
                      </Stack>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeLoan;
