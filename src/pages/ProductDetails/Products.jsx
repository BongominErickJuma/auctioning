import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./Product.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const Product = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="product-swiper mb-5">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src={`${import.meta.env.BASE_URL}/images/graders/grader1.jpg`} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={`${import.meta.env.BASE_URL}/images/graders/grader2.jpg`} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={`${import.meta.env.BASE_URL}/images/graders/grader3.jpg`} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={`${import.meta.env.BASE_URL}/images/graders/grader4.jpg`} />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={`${import.meta.env.BASE_URL}/images/graders/grader1.jpg`} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={`${import.meta.env.BASE_URL}/images/graders/grader2.jpg`} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={`${import.meta.env.BASE_URL}/images/graders/grader3.jpg`} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={`${import.meta.env.BASE_URL}/images/graders/grader4.jpg`} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Product;
