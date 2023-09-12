
import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert, Button } from "react-bootstrap";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useUserAuth } from "../../../context/UserAuthContext";
import "../../assets/css/phoneSignup.css";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { Context } from "../../../App";
import { auth } from "../../../firebase/firebase";
const PhoneSignUp = () => {
  const [error, setError] = useState("");
  const [number, setNumber] = useState("");
  const [flag, setFlag] = useState(false);
  const [otp, setOtp] = useState("");
  const [result, setResult] = useState("");
  const { setUpRecaptha } = useUserAuth();
  const [timer, setTimer] = useState(false);
  const [parameter, setParameter] = useState("");
  const contextValue = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    setNumber(contextValue.phone);
  }, [timer]);

  const getOtp = async (e) => {
    setParameter(e);
    e.preventDefault();
    console.log(
      number,
      contextValue.name,
      contextValue.email,
      contextValue.status,
      contextValue.pincode,
      contextValue.city
    );
    console.log("from otp");
    setError("");
    if (number === "" || number === undefined)
      return setError("Please enter a valid phone number!");
    try {
      const response = await setUpRecaptha(number);
      console.log("******", { response }, response.verificationId);
      setResult(response);
      // console.log(result)
      setFlag(true);
    } catch (err) {
      setError(err);
      console.log(error);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    if (otp === "" || otp === null) return;
    try {
      await result.confirm(otp);

      let a = contextValue.name;
      let b = contextValue.email;
      let c = number;
      let d = contextValue.status;
      let e = contextValue.pincode;
      let f = contextValue.city;

      async function add() {
      
        // fetch("https://fiinzet.com/senduserinput", prerequire)
        fetch("http://localhost:8000/senduserinput", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
         
          body: new URLSearchParams({
            name: a,
            phone: c,
            email: b,
            status: d,
            pincode: e,
            city:f
           })})
          .then((data) => {
            console.log(data);
          })
          .catch((err) => {
            console.log("data not save ",err);
          });
        //console.log(name,email,phone,status,pincode)
      }
      add();
      navigate("/homebackend");
    } catch (err) {
      setError(err.message);
    }
  };

  async function resendOtp() {
    setTimer(true);
    setTimeout(() => {
      setTimer(false);
    }, 1000 * 60 * 1);
    // setFlag(true)
    console.log(result);
    console.log(number);
    const recaptchaVerifier = new RecaptchaVerifier(auth, "resend", {});
    console.log("////", { recaptchaVerifier });
    return signInWithPhoneNumber(auth, number, recaptchaVerifier);
  }

  return (
    <>
      <div className="main mt-5">
        <section className="section mt-5 pt-4 pb-5 contact-div">
          <div className="container mt-5">
            <div className="card shadow">
              <div className="card-body">
                <div className="p-4 box">
                  <h2 className="mb-4">Verification process </h2>
                  {error && <Alert variant="danger">{error?.code}</Alert>}
                  <Form
                    onSubmit={getOtp}
                    style={{ display: !flag ? "block" : "none" }}
                  >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <PhoneInput
                        defaultCountry="IN"
                        value={number}
                        onChange={setNumber}
                        placeholder="Enter Phone Number"
                      />
                      <div id="recaptcha-container"></div>
                    </Form.Group>
                    <div className="button-right">
                      <Link to="/">
                        <Button className="secBTN" variant="secondary">
                          Cancel
                        </Button>
                      </Link>
                      &nbsp;
                      <Button type="submit" variant="primary">
                        Send Otp
                      </Button>
                    </div>
                  </Form>

                  <Form
                    onSubmit={verifyOtp}
                    style={{ display: flag ? "block" : "none" }}
                  >
                    <Form.Group className="mb-3" controlId="formBasicOtp">
                      <Form.Control
                        type="otp"
                        defaultCountry="IN"
                        placeholder="Enter OTP"
                        onChange={(e) => setOtp(e.target.value)}
                      />
                    </Form.Group>
                    <div className="button-right">
                      <Link to="recaptcha-container">
                        <Button className="secBTN" variant="secondary">
                          Cancel
                        </Button>
                      </Link>
                      &nbsp;
                      <Button type="submit" variant="primary">
                        Verify
                      </Button>
                    </div>
                    <div id="resend"></div>
                    {!timer ? (
                      <div className="resend-otp">
                        Didn't Received OTP?
                        <span
                          className="change-cursor-to-pointer"
                          onClick={resendOtp}
                        >
                          Send Again
                        </span>
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PhoneSignUp;
