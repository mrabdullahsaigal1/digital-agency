import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const Services = ({ heading, firstPara, items, secondPara, faq }) => {
  return (
    <>
      <div className="services-details-area ptb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 services-details">
              <div className="services-details-desc">
                <h3>{heading}</h3>
                <p>{firstPara}</p>
                <p>
                  <ul>
                    {items?.map((item, index) => (
                      <li style={{ fontWeight: "normal" }} key={index}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </p>

                {/* <p>Took a galley of type and scrambled it to make a type specimen book. survived not only five centuries, but also the leap into electronic remaining. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer when an unknown.</p> */}
              </div>
            </div>

            <div className="col-lg-6 services-details-image">
              <img
                src="/images/services-details-image/services-details1.png"
                className="animate__animated animate__fadeInUp"
                alt="image"
              />
            </div>
          </div>

          <div className="separate"></div>

          <div className="row align-items-center">
            <div className="col-lg-6 services-details-image">
              <img
                src="/images/services-details-image/services-details2.png"
                className="animate__animated animate__fadeInUp"
                alt="image"
              />
            </div>

            <div className="col-lg-6 services-details">
              <div className="services-details-desc">
                <p>{secondPara}</p>

                <div className="services-details-accordion">
                  <Accordion preExpanded={["a"]}>
                    <AccordionItem uuid="a">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>{faq?.question1}</span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>{faq?.answer1}</p>
                      </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem uuid="b">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>{faq?.question2}</span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>{faq?.answer2}</p>
                      </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem uuid="c">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>{faq?.question3}</span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>{faq?.answer3}</p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
