import React from "react";
import Link from "next/link";

const AboutUsContent = () => {
  return (
    <>
      <div className="agency-about-area">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="agency-about-img">
                <img
                  src="/images/agency-image/agency-about-img.jpg"
                  alt="image"
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="agency-about-content">
                <span className="sub-title">About Us</span>
                <h2>About Keycode Syntax Elevating Your Digital Journe</h2>
                <div className="bar"></div>
                <p>
                  Keycode Syntax is a forward-thinking digital solutions company
                  that marries creativity, technology, and data to craft
                  compelling, high-performance business solutions. Since our
                  establishment, we have dedicated ourselves to drive innovation
                  and redefine the limits of the digital world.
                </p>
                <p>
                  Our extensive range of services encompasses web and app
                  development, game creation, strategic digital marketing, and
                  e-commerce solutions. Our seasoned team utilizes cutting-edge
                  technologies.
                </p>

                <Link href="/about" className="btn btn-secondary">
                  Discover More
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape2 rotateme">
          <img src="/images/shape2.svg" alt="shape" />
        </div>
        <div className="shape3">
          <img src="/images/shape3.svg" alt="shape" />
        </div>
        <div className="shape6 rotateme">
          <img src="/images/shape4.svg" alt="shape" />
        </div>
        <div className="shape7">
          <img src="/images/shape4.svg" alt="shape" />
        </div>
        <div className="shape8 rotateme">
          <img src="/images/shape2.svg" alt="shape" />
        </div>
        <div className="shape10">
          <img src="/images/agency-image/agency-shape2.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default AboutUsContent;
