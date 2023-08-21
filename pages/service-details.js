import React from "react";
import NavbarStyleFive from "@/components/_App/NavbarStyleFive";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import Services from "./services";

const ServiceDetails = () => {
  const itemList = [
    "Lifetime Support",
    "Cutting-Edge Design",
    "Resolve Complexities With Us",
    "Delivering Superior Services",
    "SEO-Friendly Approach",
  ];
  const faqData = [
    {
      question:
        "What differentiates your web and app development services from others?",
      answer:
        "Our web and app development services stand out for their dedication to innovation, user-centric design, and business-specific customization. We combine state-of-the-art technology with our vast industry experience to create solutions that are not only visually appealing but also functional and efficient. We also offer ongoing lifetime support to ensure that your digital platforms remain up-to-date and continue to deliver an optimal user experience.",
    },
    {
      question: "How do you ensure my website or app will be SEO-friendly?",
      answer:
        "Search engine optimization is deeply ingrained in our development process. We follow the best practices recommended by major search engines such as Google, including the use of meta-tags, appropriate keyword density, mobile optimization, and fast loading speeds. In addition, we ensure that your website or app has a user-friendly layout and engaging content which search engines value when ranking websites.",
    },
    {
      question: "Can you help us with complex web and app development issues?",
      answer:
        "Absolutely! Our team thrives on resolving complex challenges. We have extensive experience and skills in various aspects of web and app development, including complex programming, integration issues, and crafting bespoke solutions. No matter what challenges you're facing, we're confident that we can turn these obstacles into opportunities for enhancing your digital presence.",
    },
    // Add more question-answer pairs as needed
  ];
  return (
    <>
      <NavbarStyleFive />
      <PageBanner pageTitle="Web and App Development" />
      <Services
        heading="Web and App Development"
        firstPara="Experience the art of technology fused with innovation as we construct seamless integrations for web and app development. We strive to deliver an unparalleled experience, embracing the harmony of form and function. We provide exceptional solutions that go beyond the boundaries of the ordinary, with no exceptions."
        items={itemList}
        secondPara="We offer exclusive designs that blend aesthetics with efficiency, custom-tailored to fit your business' unique persona. Our mission is to make your web and app interfaces intuitive and engaging, keeping users captivated and ensuring they return time and again. In this digital age, visibility is paramount. Our web and app development strategies are firmly rooted in SEO-friendly practices. We meticulously embed SEO elements to ensure your platform ranks high on search engines, ultimately driving organic traffic and boosting your business reach."
        faq={faqData}
      />
      <Footer />
    </>
  );
};

export default ServiceDetails;
