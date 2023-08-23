import React from 'react';
import NavbarStyleFive from "@/components/_App/NavbarStyleFive";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import Link from 'next/link';
 
const Services2 = () => {
    return (
        <>
            <NavbarStyleFive />


            <PageBanner pageTitle="Services We Offer" />

            <div className="ml-services-area ptb-80">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-ml-services-box">
                                <div className="image">
                                    <img src="/images/services-image/service-image1.png" alt="image" />
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        Web & App Development
                                    </Link>
                                </h3>
                                <p>Utilizing cutting-edge technologies like React, Flutter and Node.js to create engaging digital platforms.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-ml-services-box">
                                <div className="image">
                                    <img src="/images/services-image/service-image2.png" alt="image" />
                                </div>
                                <h3>
                                    <Link href="/service-details-two">
                                    Game Development
                                    </Link>
                                </h3>
                                <p>Harnessing the power of Unity and Unreal Engine to design immersive gaming experiences.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-ml-services-box">
                                <div className="image">
                                    <img src="/images/services-image/service-image3.png" alt="image" />
                                </div>
                                <h3>
                                    <Link href="/service-details-three">
                                    Strategic Branding & Marketing
                                    </Link>
                                </h3>
                                <p>Leveraging advanced tools like Google Analytics and SEMrush for data-driven marketing strategies.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-ml-services-box">
                                <div className="image">
                                    <img src="/images/services-image/service-image4.png" alt="image" />
                                </div>
                                <h3>
                                    <Link href="/service-details-four">
                                    E-Commerce Solutions
                                    </Link>
                                </h3>
                                <p>Implementing WooCommerce, Shopify, eBay, Amazon and Etsy frameworks for seamless online shopping experiences.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-ml-services-box">
                                <div className="image">
                                    <img src="/images/services-image/service-image5.png" alt="image" />
                                </div>
                                <h3>
                                    <Link href="/service-details-five">
                                    SEO & Content
                                    </Link>
                                </h3>
                                <p>Harnessing the power of Unity and Unreal Engine to design immersive gaming experiences.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-ml-services-box">
                                <div className="image">
                                    <img src="/images/services-image/service-image6.png" alt="image" />
                                </div>
                                <h3>
                                    <Link href="/service-details-six">
                                        Data Analytics
                                    </Link>
                                </h3>
                                <p>Harnessing the power of Unity and Unreal Engine to design immersive gaming experiences.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="shape1">
                    <img src="/images/shape1.png" alt="shape" />
                </div>
                <div className="shape2 rotateme">
                    <img src="/images/shape2.svg" alt="shape" />
                </div>
                <div className="shape3">
                    <img src="/images/shape3.svg" alt="shape" />
                </div>
                <div className="shape4">
                    <img src="/images/shape4.svg" alt="shape" />
                </div>
                <div className="shape7">
                    <img src="/images/shape4.svg" alt="shape" />
                </div>
                <div className="shape8 rotateme">
                    <img src="/images/shape2.svg" alt="shape" />
                </div>
            </div> 
 
            <Footer />
        </>
    )
}

export default Services2;