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
        "How do your e-commerce solutions stand out from others?",
      answer1:
        "Our e-commerce solutions are distinguished by our personalized approach, comprehensive support, and commitment to excellence. We customize our solutions to align with your specific business goals and brand ethos. Additionally, we provide lifetime support, ensuring your e-commerce platform stays updated and scalable to meet evolving business needs. With our exclusive design approach and SEO-friendly practices, we enhance the user experience and increase your online visibility.",

      question2:
        "How do you ensure my e-commerce platform will have high visibility and reach the intended audience?",
      answer2:
        "We employ SEO-friendly practices in designing your e-commerce platform. This includes using appropriate keywords, optimizing site architecture, ensuring quick page load times, and crafting engaging product descriptions. These elements improve your site's ranking on search engines, thereby increasing visibility and organic traffic. Alongside this, we create a user-friendly and visually appealing platform to engage and retain your target audience.",

      question3: "Can you assist with the complexities of setting up and maintaining an e-commerce platform?",
      answer3:
        "Absolutely! Our team is well-versed in the unique challenges of e-commerce, such as payment gateway integration, inventory management, and website optimization. We tackle these complexities head-on and transform them into opportunities for enhancing your online store. With our robust and efficient e-commerce solutions, we ensure a smooth and hassle-free shopping experience for your customers.",
    }
    // Add more question-answer pairs as needed
  return (
    <>
      <NavbarStyleFive />
      <PageBanner pageTitle="E-Commerce Solutions" />
      <Services
        heading="Strategic Branding & Marketing"
        firstPara="Venture into the world of online selling with our comprehensive e-commerce solutions. We transform your retail vision into a thriving digital storefront. Our team ensures your e-commerce platform is user-friendly, secure, and perfectly aligned with your business objectives."
        items={itemList}
        secondPara="In the competitive world of online retail, standing out is key. We offer exclusive designs tailored to reflect your brand ethos and captivate your target customers. From intuitive navigation to engaging product displays, we ensure your e-commerce platform is a visual delight that boosts conversions. E-commerce comes with its unique set of challenges. Whether it's integrating payment gateways, managing inventory, or optimizing page load times, our experienced team is here to tackle these challenges. We transform obstacles into strategic opportunities, driving your online business towards success."
        faq={faqData}
      />
      <Footer />
    </>
  );
};

export default ServiceDetails;
