import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Slider1 from "../../assets/images/DM1.jpg";
import Slider2 from "../../assets/images/DM2.jpg";
import Slider3 from "../../assets/images/DM3.jpg";
import Slider4 from "../../assets/images/DM4.jpg";
import Slider1Mobile from "../../assets/images/M1.jpg";
import Slider2Mobile from "../../assets/images/M2.jpg";
import Slider3Mobile from "../../assets/images/M3.jpg";
import Slider4Mobile from "../../assets/images/M4.jpg";
import "../../assets/css/slider.css";
import { Carousel } from "bootstrap"; // Import Bootstrap Carousel

function Slider() {
  const carouselRef = React.useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Manually initialize the Bootstrap Carousel
    const carousel = new Carousel(carouselRef.current, {
      interval: 4000, // Set the desired interval for automatic sliding
    });

    return () => {
      // Dispose of the carousel when the component unmounts
      carousel.dispose();
    };
  }, [carouselRef]);

  return (
    <div>
      {/* .................slider............... */}

      <div
        id="myCarousel"
        className="carousel slide mb-6 mt-5"
        data-bs-ride="carousel"
        ref={carouselRef}
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label=""
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          {/* carousel 1 */}

          <div className="carousel-item active " data-mdb-interval="300">
            <img
              src={Slider1}
              data-src-mobile={Slider1Mobile}
              className="bd-placeholder-img sliderImg img-fluid"
              width="100%"
              height="100%"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              alt="banner1"
            />
            <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />

            <div className="container ">
              <div className="carousel-caption1 upperSpace sl1">
               

                <p >
                  <a
                    className="btn btn-lg btn-success ApplyNowBtn "
                    href="/Login"
                  >
                    <Link to="/Login" className="nav-link " aria-current="page">
                      Apply Now
                    </Link>
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* carousel 2 */}
          <div className="carousel-item" data-mdb-interval="300">
            <img
              src={Slider2}
              data-src-mobile={Slider2Mobile}
              className="bd-placeholder-img sliderImg img-fluid"
              width="100%"
              height="100%"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              alt="banner2"
            />
            <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />

            <div className="container">
              <div className="carousel-caption2 upperSpace">
             

                <p >
                  <a
                    className="btn btn-lg btn-success ApplyNowBtn"
                    href="/Login"
                  >
                    <Link to="/Login" className="nav-link " aria-current="page">
                      Apply Now
                    </Link>
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* carousel 3 */}
          <div className="carousel-item" data-mdb-interval="300">
            <img
              src={Slider3}
              data-src-mobile={Slider3Mobile}
              className="bd-placeholder-img sliderImg img-fluid"
              width="100%"
              height="100%"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              alt="banner3"
            />
            <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />

            <div className="container">
              <div className="carousel-caption3 upperSpace">
             

                <p>
                  <a
                    className="btn btn-lg btn-success ApplyNowBtn"
                    href="/Login"
                  >
                    <Link to="/Login" className="nav-link " aria-current="page">
                      Apply Now
                    </Link>
                  </a>
                </p>
              </div>
            </div>
          </div>
          {/* carousel 4 */}
          <div className="carousel-item" data-mdb-interval="300">
            <img
              src={Slider4}
              data-src-mobile={Slider4Mobile}
              className="bd-placeholder-img sliderImg img-fluid"
              width="100%"
              height="100%"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              alt="banner4"
            />
            <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />

            <div className="container">
              <div className="carousel-caption4 upperSpace">
           

                <p>
                  <a
                    className="btn btn-lg btn-success ApplyNowBtn"
                    href="/Login"
                  >
                    <Link to="/Login" className="nav-link " aria-current="page">
                      Apply Now
                    </Link>
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* .... */}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Slider;