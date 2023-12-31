import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <>
            <div className="agency-main-banner">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="agency-banner-content">
                                <span className="sub-title">We are creative</span>
                                <h1>Innovative IT Solutions for a Digitally Progressive World</h1>
                                <p>Fusing aesthetics and functionality through websites, mobile apps, games, and digital campaigns, powered by a dedicated team of skilled professionals.</p>

                                <Link href="/contact" className="btn btn-secondary">
                                    Get Started
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="agency-banner-image">
                                <img src="/images/agency-image/agency-banner-img.jpg" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="shape2 rotateme">
                    <img src="/images/shape2.svg" alt="shape" />
                </div>
                <div className="shape8 rotateme">
                    <img src="/images/shape2.svg" alt="shape" />
                </div>
                <div className="shape3">
                    <img src="/images/shape3.svg" alt="shape" />
                </div>
                <div className="shape4">
                    <img src="/images/shape4.svg" alt="shape" />
                </div>
            </div>
        </>
    );
}

export default MainBanner;