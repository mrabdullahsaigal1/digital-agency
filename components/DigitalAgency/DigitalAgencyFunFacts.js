import React from "react";
import Link from "next/link";

const DigitalAgencyFunFacts = () => {
  return (
    <>
      <div className="funfacts-area ptb-80">
        <div className="container">
          <div className="section-title">
            <h2>We Completed 130+ Projects Yearly Successfully & Counting</h2>
            <div className="bar"></div>
            <p>
              At Keycode Syntax, we empower your digital evolution with our
              bespoke, innovative solutions. By harnessing the latest technology
              and our industry expertise, we create strategic, user-centric
              digital experiences that not only align with your business goals
              but also drive growth and elevate your brand in the competitive
              digital landscape.
            </p>
            <div style={{ padding: "10px" }}>
              <p>we Completed 130+ Projects Yearly Successfully & Counting.</p>
            </div>
            <div style={{ padding: "10px" }}>
              <p>
                Demonstrating Consistent Excellence: Over 130 Annual Projects
                Delivered with Precision and Quality, and the Success Stories
                Keep Growing.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-3 col-6">
              <div className="funfact">
                <h3>180K</h3>
                <p>Downloaded</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-6">
              <div className="funfact">
                <h3>20K</h3>
                <p>Feedback</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-6">
              <div className="funfact">
                <h3>500+</h3>
                <p>Workers</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-6">
              <div className="funfact">
                <h3>70+</h3>
                <p>Contributors</p>
              </div>
            </div>
          </div>

          <div className="contact-cta-box">
            <h3>Have any question about us?</h3>
            <p>Don't hesitate to contact us</p>

            <Link href="/contact" className="btn btn-primary">
              Contact Us
            </Link>
          </div>

          <div className="map-bg">
            <img src="/images/map.png" alt="map" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DigitalAgencyFunFacts;
