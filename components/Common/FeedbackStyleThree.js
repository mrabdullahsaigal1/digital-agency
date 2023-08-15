import React from "react";
import * as Icon from "react-feather";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

const FeedbackStyleThree = () => {
  return (
    <>
      <div className="ml-feedback-area ptb-80">
        <div className="container">
          <div className="section-title st-fs-28">
            <span className="sub-title">Testimonials</span>
            <h2>Our Clients Feedback</h2>
            <div className="bar"></div>
            <p>
              Hear it from the Source: Client Testimonials that Reflect Our
              Commitment to Exceptional Service and Solutions
            </p>
          </div>

          <Swiper
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 6000,
              pauseOnMouseEnter: true,
            }}
            modules={[Pagination, Autoplay]}
            className="ml-feedback-slides">
            <SwiperSlide>
              <div className="single-testimonials-item">
                <p>
                  Partnering with Keycode Syntax has been a game-changer for our
                  online presence. Their creative approach to web design,
                  combined with innovative SEO strategies, has significantly
                  boosted our site's traffic and conversions. The team's
                  commitment to excellence is evident in their attention to
                  detail and responsiveness to our needs. We couldn't ask for a
                  better digital solutions partner.
                </p>

                <div className="client-info">
                  <img src="/images/client-image/client1.jpg" alt="image" />

                  <div className="rating">
                    <Icon.Star />
                    <Icon.Star />
                    <Icon.Star />
                    <Icon.Star />
                    <Icon.Star />
                  </div>

                  <h3>Sarah Taylor</h3>
                  <span>CEO at Envato</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-testimonials-item">
                <p>
                  Keycode Syntax has taken our digital marketing efforts to new
                  heights. Their data-driven approach has provided us with
                  valuable insights, leading to more effective campaigns and
                  increased ROI. They have truly become an extension of our own
                  team, always ready to go the extra mile to ensure our success.
                </p>

                <div className="client-info">
                  <img src="/images/client-image/client2.jpg" alt="image" />

                  <div className="rating">
                    <Icon.Star />
                    <Icon.Star />
                    <Icon.Star />
                    <Icon.Star />
                    <Icon.Star />
                  </div>

                  <h3>Steven Smith</h3>
                  <span>CEO at Envato</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-testimonials-item">
                <p>
                  Working with Keycode Syntax on our e-commerce platform has
                  been nothing short of extraordinary. The user-friendly design
                  and seamless functionality they created have resulted in a
                  significant uplift in sales. Their exceptional customer
                  service, coupled with their technical expertise, make them our
                  go-to digital solutions provider. Highly recommended!
                </p>

                <div className="client-info">
                  <img src="/images/client-image/client3.jpg" alt="image" />

                  <div className="rating">
                    <Icon.Star />
                    <Icon.Star />
                    <Icon.Star />
                    <Icon.Star />
                    <Icon.Star />
                  </div>

                  <h3>James Eva</h3>
                  <span>CEO at Envato</span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Shape Images */}
        <div className="user-shape1">
          <img src="/images/agency-image/agency-user1.png" alt="shape" />
        </div>
        <div className="user-shape2">
          <img src="/images/agency-image/agency-user2.png" alt="shape" />
        </div>
        <div className="user-shape3">
          <img src="/images/agency-image/agency-user3.png" alt="shape" />
        </div>
        <div className="user-shape4">
          <img src="/images/agency-image/agency-user4.png" alt="shape" />
        </div>
        <div className="user-shape5">
          <img src="/images/agency-image/agency-user5.png" alt="shape" />
        </div>
        <div className="user-shape6">
          <img src="/images/agency-image/agency-user6.png" alt="shape" />
        </div>
      </div>
    </>
  );
};

export default FeedbackStyleThree;
