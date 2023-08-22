import React from "react";
import NavbarStyleFive from "@/components/_App/NavbarStyleFive";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import Services from "./services";

const ServiceDetails = () => {
  const itemList = [
    "Lifetime Support",
    "Exclusive Design",
    "Overcome Challenges with Us",
    "Providing Superior Services",
  ];
  const faqData = {
      question1:
        "How do your data analytics services stand out from others?",
      answer1:
        "Our data analytics services stand out due to our comprehensive approach, lifetime support, and commitment to excellence. We turn complex data into simple, actionable insights that empower your decision-making process and business strategies. We provide ongoing support, ensuring your data analytics strategies remain relevant and effective in the face of evolving business and market dynamics.",

      question2:
        "How do you handle the complexities of data analytics?",
      answer2:
        "Our team is equipped to handle the complexities of data analytics, from data cleaning and interpretation to predictive modelling. We use cutting-edge tools and methodologies to analyze your data and derive valuable insights. Moreover, we transform these complexities into strategic opportunities that contribute to your business growth.",

      question3: "How does your SEO-friendly approach work in the context of data analytics?",
      answer3:
        "In addition to generating valuable insights from your data, we also ensure that your online data content is SEO-optimized. This involves using appropriate keywords, optimizing content structure, and making the data content easily discoverable by search engines. By enhancing your digital visibility, we help drive more organic traffic to your site, extending your business reach and influence.",
    }
    // Add more question-answer pairs as needed
  return (
    <>
      <NavbarStyleFive />
      <PageBanner pageTitle="Data Analytics" />
      <Services
        heading="Data Analytics"
        firstPara="Unleash the power of data with our comprehensive data analytics solutions. We analyze your complex data sets to generate actionable insights that fuel your business strategies. With our data analytics services, make more informed decisions, optimize operations, and drive growth."
        items={itemList}
        secondPara="Navigating the world of data can be overwhelming. Our team is here to tackle the complexities of data analytics, be it data cleaning, interpretation, or predictive modelling. We transform these challenges into strategic opportunities, driving your business towards success. As your data analytics partner, we're committed to delivering services that drive your business success. We focus on turning your raw data into actionable insights that inform decision making, optimize operations, and enhance customer experiences. Your business deserves the best, and that's what we're here to deliver."
        faq={faqData}
      />
      <Footer />
    </>
  );
};

export default ServiceDetails;
