import React, { useState, useEffect , useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";

import Contact from "../../assets/images/details.jpg";
import "../../assets/css/login.css";
import "../../assets/css/contact.css";
import PhoneSignUp from "./PhoneSignUp";
import { Context } from "../../../App";

const Login = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const contextValue = useContext(Context)
  const [error, setError] = useState("");
  // const [name, setname] = useState("");
   const [phone, setphone1] = useState("");
  // const [email, setemail] = useState("");
  // const [pincode, setpincode] = useState("");
  // const [status, setstatus] = useState("");
  // const [city, setcity] = useState("");
  const [flage, setflage] = useState("");
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      // await logIn(email, password);

      navigate("/homebackend");
    } catch (err) {
      setError(err.message);
    }
  };
  const add = async () => {
    
    if ( contextValue.setname &&contextValue.email && phone && contextValue.pincode && contextValue.status && contextValue.city) {
    
      
      
      contextValue.setPhone(`+91${phone}`)
      console.log(contextValue)
      
      navigate("/phonesignup");
     // setflage(false);
    } else {
      alert("Enter All Details")
      //setflage(true);
    }
  };

  return (
      
    <section className="section mt-5 pt-4 pb-5 contact-div">
      <div className="container">
        <div className="row">
          <div className="col-md-6  contactCSS">
            <div className=" img-fluid">
              <img
                src={Contact}
                className="bd-placeholder-img card-img-top img-fluid"
                width="200"
                height="200"
                alt="Balance Transfer"
              />
            </div>
          </div>

          <div className="col-md-6  contactCSS">
            {/* {flage ? (
              <h5 className="mt-4 fontS " id="heding"  >Enter All Details...</h5>
            ) : (
              <h2 className="mt-4 fontS">ENTER YOUR DETAILS</h2>
            )} */}
            {/* <h2 className="mb-3">Enter Your Details</h2> */}
            <h2 className="mt-4 fontS">ENTER YOUR DETAILS</h2>
            <hr className="hrCSS" />
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <div>
                <label>Full Name</label>

                <input
                  type="text"
                  value={ contextValue.name}
                  onChange={(e) => {
                    contextValue.setname(e.target.value);
                  }}
                  
                  className="form-control mb-2"
                  placeholder="Enter Full Name"
                ></input>
              </div>
              <div>
                <label>Phone Number</label>
                <input
                  type="text"
                  inputMode="numeric"
              
                maxLength={10}
                  value={ phone}
                  onChange={(e) => {
                    setphone1(e.target.value);
                  }}
                  className="form-control mb-2"
                  placeholder="Enter Phone Number"
                ></input>
              </div>
              <div>
                <label>Email Address</label>
                <input
                  type="email"
                  value={ contextValue.email}
                  onChange={(e) => {
                    contextValue.setemail(e.target.value);
                  }}
                  className="form-control mb-2"
                  placeholder="Enter Email Address"
                ></input>
              </div>

              <div>
                <label>City</label>
                <select
                  value={ contextValue.city}
                  onChange={(e) => {
                    contextValue.setcity(e.target.value);
                  }}
                  className="form-control mb-2 sizeW"
                >
                  <option disabled selected value="">
                    Select an option...
                  </option>
                  <option>Pune</option>
                </select>
              </div>

              <div>
                <label>Pincode</label>
                <input
                  type="text"
                  inputMode="numeric"
                maxLength={6}
                  value={ contextValue.pincode}
                  onChange={(e) => {
                    contextValue.setpincode(e.target.value);
                  }}
                  className="form-control mb-2"
                  placeholder="Enter Pincode"
                ></input>
              </div>

              <div>
                <label>Employee Status</label>
                <select
                  value={ contextValue.status}
                  onChange={(e) => {
                    contextValue.setstatus(e.target.value);
                  }}
                  className="form-control mb-2 sizeW"
                >
                  <option disabled selected value="">
                    Select an option...
                  </option>
                  <option>Self-Employed</option>
                  <option>Salaried</option>
                </select>
              </div>
              <div><br/>
                
                <input
                  type="checkbox"
                  required
              
                  // className="form-control mb-2"
                  // placeholder="Enter Pincode"
                >
                  
                </input> I agree to Fiinzet Privacy Policy and Terms & Conditions and receive communication from Fiinzet via Call, SMS, E-mail, and WhatsApp.
              </div>
            </Form>
            <div class="button-container">
              <div className="from-group py-3 hlB">
                <button onClick={add} className="btn btn-primary shadow w-100 verifyBtn">
                  Verify OTP
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
   
  );
};

export default Login;
