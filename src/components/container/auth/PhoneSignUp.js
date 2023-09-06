// import React, { useEffect, useState,useContext } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Form, Alert, Button } from "react-bootstrap";
// import "react-phone-number-input/style.css";
// import PhoneInput from "react-phone-number-input";
// import { useUserAuth } from "../../../context/UserAuthContext";
// import "../../assets/css/phoneSignup.css";
// import { RecaptchaVerifier,
//   signInWithPhoneNumber,
// } from "firebase/auth";
// import { auth } from "../../../firebase/firebase";
// import  createcontext  from "./Login.js";
// import { Context } from "../../../App";
// const PhoneSignUp = () => {
//   const myname=useContext(createcontext)
//   const [error, setError] = useState("");
//   const [number, setNumber] = useState("");
//   const [flag, setFlag] = useState(false);
//   const [otp, setOtp] = useState("");
//   const [result, setResult] = useState("");
//   const { setUpRecaptha } = useUserAuth();
//   const [timer , setTimer ] = useState(false)
//   const [parameter , setParameter] = useState('')

//   const contextValue = useContext(Context)

//   const navigate = useNavigate();

//   useEffect(() => {
//     console.log('COntext Value of phone number is ',{contextValue})
//     setNumber(contextValue.phone)
//   }, [timer]);

//   const getOtp = async (e) => {
//     setParameter(e)
//     e.preventDefault();
//     console.log(number);
//     console.log("from otp")
//     setError("");
//     if (number === "" ||number=== undefined)
//       return setError("Please enter a valid phone number!");
//     try {
//       const response = await setUpRecaptha(number)
//       console.log('******',{response},response.verificationId)
//       setResult(response);
//       // console.log(result)
//       setFlag(true);
//     } catch (err) {
//       setError(err);
//       console.log("from err")
//       console.log(error)
//     }
//   };

//   const verifyOtp = async (e) => {
//     e.preventDefault();
//     setError("");
//     if (otp === "" || otp === null) return;
//     try {
//       await result.confirm(otp);

//       let a = contextValue.name
//       let b = contextValue.email
//       let c = number
//       let d = contextValue.status
//       let e = contextValue.pincode
//       let f = contextValue.city
//       //let f=sessionStorage.getItem("")
//       // console.log(a,b,c,d,e)

//       async function add() {
//         let prerequire = {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             name: a,
//             phone: c,
//             email: b,
//             status: d,
//             pincode: e,
//             city:f
//           }),
//         };
//         fetch("https://fiinzet.com/senduserinput", prerequire)
//           .then((data) => {
//             console.log(data);
//           })
//           .catch(() => {
//             console.log("data not save ");
//           });
//         //console.log(name,email,phone,status,pincode)
//       }
//       add();
//       navigate("/homebackend");
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   async function resendOtp(){
//     setTimer(true)
//     setTimeout(() => {
//       setTimer(false)
//     }, 1000*60*1);
//     // setFlag(true)
//     console.log(result)
//     console.log(number)
//     const recaptchaVerifier = new RecaptchaVerifier(
//             auth,
//             "resend",
//             {}
//           );
//           console.log('////',{recaptchaVerifier})
//     return signInWithPhoneNumber(auth, number, recaptchaVerifier);
//   }
//   // const add=(e)=>{
//   //   contextValue.setPhone(e.target.value);
//   // }

//   return (
//     <>
//       <div className="main mt-5">
//         <section className="section mt-5 pt-4 pb-5 contact-div">
//           <div className="container mt-5">
//             <div className="card shadow">
//               <div className="card-body">
//                 <div className="p-4 box">
//                   <h2 className="mb-3">Verification process </h2>
//                   {error && <Alert variant="danger">{error?.code}</Alert>}
//                   <Form
//                     onSubmit={getOtp}
//                     style={{ display: !flag ? "block" : "none" }}
//                   >
//                     <Form.Group className="mb-3" controlId="formBasicEmail">
//                       <PhoneInput
//                        defaultCountry="IN"
//                         value={number}
//                         // onChange={(e) => {
                          
//                         //  contextValue.setPhone(e.target.value);
//                         // }}
//                         onChange={setNumber}
//                         placeholder="Enter Phone Number"
//                       />
//                       <div id="recaptcha-container"></div>
//                     </Form.Group>
//                     <div className="button-right">
//                       <Link to="/">
//                         <Button className="secBTN" variant="secondary">
//                           Cancel
//                         </Button>
//                       </Link>
//                       &nbsp;
//                       <Button type="submit" variant="primary">
//                         Send Otp
//                       </Button>
//                     </div>
//                   </Form>

//                   <Form
//                     onSubmit={verifyOtp}
//                     style={{ display: flag ? "block" : "none" }}
//                   >
//                     <Form.Group className="mb-3" controlId="formBasicOtp">
//                       <Form.Control
//                         type="otp"
//                         defaultCountry="IN"
//                         placeholder="Enter OTP"
//                         onChange={(e) => setOtp(e.target.value)}
//                       />
//                     </Form.Group>
//                     <div className="button-right">
//                       <Link to="recaptcha-container">
//                         <Button className="secBTN" variant="secondary">
//                           Cancel
//                         </Button>
//                       </Link>
//                       &nbsp;
//                       <Button type="submit" variant="primary">
//                         Verify
//                       </Button>
//                     </div>
//                     <div id="resend"></div>
//                     {(!timer)?(<div className="resend-otp">
//                     Didn't Received OTP?<span className="change-cursor-to-pointer" onClick={resendOtp}>Send Again</span>
//                     </div>):(<div>

//                     </div>)}
//                   </Form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// };

// export default PhoneSignUp;
import React, { useEffect, useState,useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert, Button } from "react-bootstrap";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useUserAuth } from "../../../context/UserAuthContext";
import "../../assets/css/phoneSignup.css";
import { RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { Context } from "../../../App";
import { auth } from "../../../firebase/firebase";
const PhoneSignUp = () => {
  const [error, setError] = useState("");
  const [number, setNumber] = useState("");
  const [flag, setFlag] = useState(false);
  const [otp, setOtp] = useState("");
  const [result, setResult] = useState("");
  const { setUpRecaptha } = useUserAuth();
  const [timer , setTimer ] = useState(false)
  const [parameter , setParameter] = useState('')
  const contextValue = useContext(Context)
  const navigate = useNavigate();

  useEffect(() => {
    
    setNumber(contextValue.phone)
  }, [timer]);

  const getOtp = async (e) => {
    setParameter(e)
    e.preventDefault();
    console.log(number,contextValue.name,contextValue.email,contextValue.status,contextValue.pincode,contextValue.city);
    console.log("from otp")
    setError("");
    if (number === "" || number === undefined)
      return setError("Please enter a valid phone number!");
    try {
      const response = await setUpRecaptha(number)
      console.log('******',{response},response.verificationId)
      setResult(response);
      // console.log(result)
      setFlag(true);
    } catch (err) {
      setError(err);
      console.log(error)
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    if (otp === "" || otp === null) return;
    try {
      await result.confirm(otp);

     
      let a = contextValue.name
      let b = contextValue.email
      let c = number
      let d = contextValue.status
      let e = contextValue.pincode
      let f = contextValue.city

      async function add() {
        let prerequire = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: a,
            phone: c,
            email: b,
            status: d,
            pincode: e,
            city:f
          }),
        };
        fetch("https://fiinzet.com/senduserinput", prerequire)
          .then((data) => {
            console.log(data);
          })
          .catch(() => {
            console.log("data not save ");
          });
        //console.log(name,email,phone,status,pincode)
      }
      add();
      navigate("/homebackend");
    } catch (err) {
      setError(err.message);
    }
  };

  async function resendOtp(){
    setTimer(true)
    setTimeout(() => {
      setTimer(false)
    }, 1000*60*1);
    // setFlag(true)
    console.log(result)
    console.log(number)
    const recaptchaVerifier = new RecaptchaVerifier(
            auth,
            "resend",
            {}
          );
          console.log('////',{recaptchaVerifier})
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
                  <h2 className="mb-3">Verification process </h2>
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
                    {(!timer)?(<div className="resend-otp">
                    Didn't Received OTP?<span className="change-cursor-to-pointer" onClick={resendOtp}>Send Again</span>
                    </div>):(<div>

                    </div>)}
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