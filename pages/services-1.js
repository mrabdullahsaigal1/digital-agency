import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import Link from 'next/link';
import * as Icon from 'react-feather';
 
const Services1 = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Services Style One" />

            <div className="services-area-two pt-80 pb-50 bg-f9f6f6">
                <div className="container">
                    <div className="section-title">
                        <h2>Transformative Digital Solutions Tailored For You</h2>
                        <div className="bar"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <Icon.Settings />
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        Incredible Infrastructure
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <Icon.Mail />
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        Email Notifications
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <Icon.Bell />
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        Best Analytics Audits
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon bg-c679e3">
                                    <Icon.Grid />
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        Simple Dashboard
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon bg-c679e3">
                                    <Icon.Info />
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        Information Retrieval
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon bg-c679e3">
                                    <Icon.HardDrive />
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        Deep Technical SEO
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon bg-eb6b3d">
                                    <Icon.MousePointer />
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        Drag & Drop Functionality
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon bg-eb6b3d">
                                    <Icon.Bell />
                                </div> 
                                <h3>
                                    <Link href="/service-details">
                                        Deadline Reminders
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon bg-eb6b3d">
                                    <Icon.Send />
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        Modern Keyword Analysis
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
 
            <Footer />
        </>
    )
}

export default Services1;