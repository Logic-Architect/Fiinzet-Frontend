import React, { useEffect } from "react";
import BackgroundImage from "../../assets/images/abanner.png"; // Replace with the path to your background image
import "../../assets/css/about.css";
import logoFiinzet from "../../assets/images/logoPng.png";

function About2() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <div
                className="p-5 mt-5 mb-4 bg-body-tertiary rounded-3 mainB "
                style={{ backgroundImage: `url(${BackgroundImage})` }}
            >

                <div className="container  py-4 AboutB2 ">
                    <div className="container-fluid ">
                        {/* <h1 className="display-5 fw-bold">FIINZET</h1> */}
                        <div className="logoCSS2">
                            <img
                                src={logoFiinzet}
                                className="logo"
                                alt="Bootstrap"
                                width="80"
                                height="80"
                            />
                        </div>

                        <p>
                            Welcome to Fiinzet.com - your key to unlocking effortless home financing! Through strategic corporate alliances with premier Banks and NBFCs, 
                            we offer an array of home loans, seamless Existing Home loan transfers, and property loans. As a consumer-centric venture, we prioritize clarity and speed,
                            streamlining the home loan process for you. Bid farewell to complications and say hello to your new home with Fiinzet.com, where transparency and swift processing redefine your journey to homeownership!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About2;