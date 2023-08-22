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
        "What makes your SEO and content services unique?",
      answer1:
        "Our SEO and content services stand out due to our personalized approach, lifetime support, and focus on superior service delivery. We tailor our strategies to align with your unique brand voice and business goals. We provide ongoing support, adapting your SEO and content strategies to match the ever-evolving digital landscape. Additionally, we leverage our expertise to turn challenges into opportunities, helping your brand stand out in the digital realm.",

      question2:
        "How can you ensure my content will reach the right audience?",
      answer2:
        "We use a strategic, SEO-friendly approach to ensure your content reaches its intended audience. This involves a mix of keyword optimization, meta tag improvements, and structuring content for search engine crawlers. These practices help your content rank higher on search engine result pages, increasing its visibility and driving more organic traffic to your site. Additionally, we focus on creating engaging, relevant content that resonates with your target audience.",

      question3: "Can you assist with the complexities of SEO and content creation?",
      answer3:
        "Absolutely! We understand the complexities involved in SEO and content creation. Whether it's understanding search engine algorithms, creating compelling content, or identifying your audience's content preferences, our team is equipped to handle these challenges. We transform these complexities into strategic opportunities that elevate your brand's online presence and drive engagement.",
    }
    // Add more question-answer pairs as needed
  return (
    <>
      <NavbarStyleFive />
      <PageBanner pageTitle="SEO & Content" />
      <Services
        heading="SEO & Content"
        firstPara="Empower your digital presence with our tailored SEO and content strategies. We craft engaging content that speaks to your audience and optimized SEO tactics that enhance your online visibility. Together, they form a robust strategy that drives organic traffic, boosts engagement, and fuels your business growth."
        items={itemList}
        secondPara="The world of SEO and content can seem labyrinthine. Our team of experts is equipped to handle these complexities. Whether it's understanding search engine algorithms, creating compelling content, or identifying your audience's preferences, we convert these challenges into strategic opportunities that propel your brand's online presence. As your trusted SEO and content partner, we are committed to delivering services that shape your digital success. We craft engaging content that informs, captivates, and converts your audience, while our strategic SEO techniques ensure that your message reaches your target audience effectively. We believe your brand deserves nothing but the best. "
        faq={faqData}
      />
      <Footer />
    </>
  );
};

export default ServiceDetails;
