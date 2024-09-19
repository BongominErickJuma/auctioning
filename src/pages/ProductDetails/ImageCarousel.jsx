import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
// import "./ImageCarousel.css";
import { Link } from "react-router-dom";

const ImageCarousel = () => {
  return (
    <section id="slider" className="slider">
      <Swiper
        modules={[Navigation]}
        loop={true}
        speed={600}
        slidesPerView="auto"
        centeredSlides={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        <SwiperSlide
          style={{
            backgroundImage: `url(${
              import.meta.env.BASE_URL
            }/images/graders/grader1.jpg)`,
            backgroundPosition: "center",
            backgroundSize: "500px auto",
          }}
        >
          <Link
            to="/auctioning/bids"
            style={{
              display: "block",
              width: "100%",
              height: "100%",
              position: "absolute",
            }}
            className="text-success"
          ></Link>
        </SwiperSlide>

        <SwiperSlide
          style={{
            backgroundImage: `url(${
              import.meta.env.BASE_URL
            }/images/graders/grader2.jpg)`,
            backgroundPosition: "center",
            backgroundSize: "500px auto",
          }}
        >
          <Link
            to="/auctioning/bids"
            style={{
              display: "block",
              width: "100%",
              height: "100%",
              position: "absolute",
            }}
            className="text-success"
          ></Link>
        </SwiperSlide>

        <SwiperSlide
          style={{
            backgroundImage: `url(${
              import.meta.env.BASE_URL
            }/images/graders/grader3.jpg)`,
            backgroundPosition: "center",
            backgroundSize: "500px auto",
          }}
        >
          <Link
            to="/auctioning/bids"
            style={{
              display: "block",
              width: "100%",
              height: "100%",
              position: "absolute",
            }}
            className="text-success "
          ></Link>
        </SwiperSlide>

        <SwiperSlide
          style={{
            backgroundImage: `url(${
              import.meta.env.BASE_URL
            }/images/graders/grader4.jpg)`,
            backgroundPosition: "center",
            backgroundSize: "500px auto",
          }}
        >
          <Link
            to="/auctioning/bids"
            style={{
              display: "block",
              width: "100%",
              height: "100%",
              position: "absolute",
            }}
            className="text-success "
          ></Link>
        </SwiperSlide>

        <SwiperSlide
          style={{
            backgroundImage: `url(${
              import.meta.env.BASE_URL
            }/images/graders/grader1.jpg)`,
            backgroundPosition: "center",
            backgroundSize: "500px auto",
          }}
        >
          <Link
            to="/auctioning/bids"
            style={{
              display: "block",
              width: "100%",
              height: "100%",
              position: "absolute",
            }}
            className="text-success "
          ></Link>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `url(${
              import.meta.env.BASE_URL
            }/images/graders/grader2.jpg)`,
            backgroundPosition: "center",
            backgroundSize: "500px auto",
          }}
        >
          <Link
            to="/auctioning/bids"
            style={{
              display: "block",
              width: "100%",
              height: "100%",
              position: "absolute",
            }}
            className="text-success "
          ></Link>
        </SwiperSlide>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </Swiper>
    </section>
  );
};

export default ImageCarousel;
