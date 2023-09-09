import React, { useState, useEffect } from "react";
import Contact from "../../assets/images/contact.jpg";
import "../../assets/css/contact.css";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const [flage, setflage] = useState();
 

  const add = async () => {
    if (name && phone && email && message) {
      
      setflage(false);
      
      // fetch("https://fiinzet.com/contact", prerequire)
      fetch('http://localhost:8000/contact', {
             method: 'POST',
             headers:{
               'Content-Type': 'application/x-www-form-urlencoded'
             },    
             body: new URLSearchParams({
              name: name,
                  phone: phone,
                 email: email,
                message: message,})
             })
        .then(() => {
          setname("");
          setemail("");
          setphone("");
          setmessage("");
          window.alert("Register successfully ");
        })
        .catch((err) => {
          console.log("err ", err);
        });

    } else {
      //setflage(true)
      alert("Enter All Details");
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
                width="300"
                height="300"
                alt="Balance Transfer"
              />
            </div>
          </div>

          <div className="col-md-6  contactCSS">
            <h2 className="headerCSS">CONTACT US</h2>
            {/* {flage?(<h3 className="headerCSS abc">Enter all details</h3>):<></>} */}
            <hr className="hrCSS" />
            <div className="from-group">
              <label className="mt-2 ">Full Name</label>

              <input
                type="text "
                value={name}
                onChange={(e) => {
                  setname(e.target.value);
                }}
                className="form-control "
                name="name"
                id="name"
                placeholder="Enter Full Name"
              />
            </div>

            <div className="from-group">
              <label className="mt-4  labelCSS">Phone Number</label>
              <input
                type="text"
                maxLength={10}
                value={phone}
                onChange={(e) => {
                  setphone(e.target.value);
                }}
                className="form-control"
                name="phone"
                id="phone"
                placeholder="Enter Phone Number"
              />
            </div>
            <div className="from-group">
              <label className="mt-4 labelCSS">Email Address</label>

              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                className="form-control"
                name="email"
                id="email"
                placeholder="Enter Email Address"
              />
            </div>
            <div className="from-group">
              <label className="mt-4 labelCSS">Message</label>
              <textarea
                rows="2"
                type="message"
                value={message}
                onChange={(e) => {
                  setmessage(e.target.value);
                }}
                className="form-control"
                name="message"
                id="message"
                placeholder="Type your message..."
              ></textarea>
            </div>

            <div class="button-container">
              <div className="from-group py-3">
                <button
                  type="button"
                  onClick={add}
                  className="btn btn-primary shadow btnC"
                  id="submit"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
