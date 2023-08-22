import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";

const WhatWeOffer = () => {
  return (
    <>
      <div className="solutions-area ptb-80">
        <div className="container">
          <div className="section-title st-fs-28">
            <span className="sub-title">What We Offer</span>
            <h2>
              Empowering Digital Success: Our Comprehensive Digital Solutions
            </h2>
            <div className="bar"></div>
            <p>
              Unlock your digital potential with our comprehensive web solutions
              and strategic SEO & Content, fueling growth and enhancing user
              experiences.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="solutions-box">
                <div className="icon">
                  <i className="bx bx-landscape"></i>
                  <img
                    src="/images/agency-image/agency-icon-bg.png"
                    alt="image"
                  />
                </div>

                <h3>
                  <Link href="/service-details">Web & App Development</Link>
                </h3>
                <p>
                  Utilizing cutting-edge technologies like React, Flutter and
                  Node.js to create engaging digital platforms.
                </p>

                <Link href="/service-details" className="learn-more-btn">
                  <Icon.PlusCircle /> Learn More
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="solutions-box">
                <div className="icon">
                  <i className="bx bx-bar-chart-alt"></i>
                  <img
                    src="/images/agency-image/agency-icon-bg.png"
                    alt="image"
                  />
                </div>

                <h3>
                  <Link href="/service-details-two">Game Development</Link>
                </h3>
                <p>
                  Harnessing the power of Unity and Unreal Engine to design
                  immersive gaming experiences.
                </p>

                <Link href="/service-details-two" className="learn-more-btn">
                  <Icon.PlusCircle /> Learn More
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="solutions-box">
                <div className="icon">
                  <i className="bx bx-devices"></i>
                  <img
                    src="/images/agency-image/agency-icon-bg.png"
                    alt="image"
                  />
                </div>

                <h3>
                  <Link href="/service-details-three">
                    Strategic Branding & Marketing
                  </Link>
                </h3>
                <p>
                  Leveraging advanced tools like Google Analytics and SEMrush
                  for data-driven marketing strategies.
                </p>

                <Link href="/service-details-three" className="learn-more-btn">
                  <Icon.PlusCircle /> Learn More
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="solutions-box">
                <div className="icon">
                  <i className="bx bx-chalkboard"></i>
                  <img
                    src="/images/agency-image/agency-icon-bg.png"
                    alt="image"
                  />
                </div>

                <h3>
                  <Link href="/service-details-four">E-Commerce Solutions</Link>
                </h3>
                <p>
                  Implementing WooCommerce, Shopify, eBay, Amazon and Etsy
                  frameworks for seamless online shopping experiences.
                </p>

                <Link href="/service-details-four" className="learn-more-btn">
                  <Icon.PlusCircle /> Learn More
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6 col-md-6">
              <div className="solutions-box">
                <div className="icon">
                  <i className="bx bx-bar-chart-alt"></i>
                  <img
                    src="/images/agency-image/agency-icon-bg.png"
                    alt="image"
                  />
                </div>

                <h3>
                  <Link href="/service-details-five">SEO & Content</Link>
                </h3>
                <p>
                  Harnessing the power of Unity and Unreal Engine to design
                  immersive gaming experiences.
                </p>

                <Link href="/service-details-five" className="learn-more-btn">
                  <Icon.PlusCircle /> Learn More
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6 col-md-6">
              <div className="solutions-box">
                <div className="icon">
                  <i className="bx bx-bar-chart-alt"></i>
                  <img
                    src="/images/agency-image/agency-icon-bg.png"
                    alt="image"
                  />
                </div>

                <h3>
                  <Link href="/service-details-six">Data Analytics</Link>
                </h3>
                <p>
                  Harnessing the power of Unity and Unreal Engine to design
                  immersive gaming experiences.
                </p>

                <Link href="/service-details-six" className="learn-more-btn">
                  <Icon.PlusCircle /> Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="shape9 slow mobile-dnone">
          <img
            src="/images/agency-image/agency-shape1.png"
            className="animate__animated animate__fadeInLeft animate__delay-0.7s"
            alt="image"
          />
        </div>
      </div>
    </>
  );
};

export default WhatWeOffer;
