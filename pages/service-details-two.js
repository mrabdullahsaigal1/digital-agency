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
      "How do your game development services differentiate from others?",
    answer1:
      "Our game development services are distinguished by our unique blend of creativity, technological expertise, and deep understanding of the gaming industry. We create immersive gaming experiences that reflect your unique vision, while our exclusive designs and strong technical support ensure a seamless, engaging experience for players. Additionally, our commitment to SEO-friendly practices helps your game gain increased visibility in a competitive marketplace.",
    question2:
      "How do you ensure that my game will be visible and reach the intended audience?",
    answer2:
      "Visibility is a key aspect of our development strategy. We employ SEO-friendly practices and app store optimization techniques to increase your game's discoverability. This includes choosing the right keywords, creating engaging game descriptions, and optimizing images and video trailers. Additionally, we aim to create games that not only attract but also retain players through engaging gameplay, compelling design, and constant updates and improvements.",
    question3: "Can you assist with complex game development issues?",
    answer3:
      "Certainly! Our team is well-versed in all aspects of game development, from coding complex game mechanics to designing intricate in-game systems. No challenge is too big or too small for us. We leverage our vast experience and technical knowledge to solve any issues that arise, ensuring your game delivers a smooth and captivating experience to all players.",
    // Add more question-answer pairs as needed
  };
  return (
    <>
      <NavbarStyleFive />
      <PageBanner pageTitle="Game Development" />
      <Services
        heading="Game Development"
        firstPara="Embark on a journey where imagination meets technology. Our game development solutions are custom-tailored, bringing your unique ideas to life while providing immersive and thrilling gaming experiences. With a relentless pursuit for perfection, we push boundaries to create games that captivate and fascinate."
        items={itemList}
        secondPara="Game development comes with its own set of complex challenges. Whether it's optimizing performance or crafting intricate gaming algorithms, our experienced team is here to tackle these challenges. We turn obstacles into opportunities, ensuring your game is smooth, robust, and ready for action. As your game development partner, we commit to delivering top-notch services that drive your game's success. We focus on creating high-quality, engaging games that cater to your target audience's tastes and preferences. We believe your game deserves nothing less than the best."
        faq={faqData}
      />
      <Footer />
    </>
  );
};

export default ServiceDetails;
