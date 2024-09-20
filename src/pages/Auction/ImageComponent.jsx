import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const ImageComponent = (props) => {
  // References to navigation buttons
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  // Array containing image data
  const images = [
    {
      src: `${import.meta.env.BASE_URL}/images/graders/grader1.jpg`,
      alt: "grader image 1",
    },
    {
      src: `${import.meta.env.BASE_URL}/images/graders/grader1.jpg`,
      alt: "grader image 2",
    },
    {
      src: `${import.meta.env.BASE_URL}/images/graders/grader1.jpg`,
      alt: "grader image 3",
    },
    {
      src: `${import.meta.env.BASE_URL}/images/graders/grader1.jpg`,
      alt: "grader image 4",
    },
    {
      src: `${import.meta.env.BASE_URL}/images/graders/grader1.jpg`,
      alt: "grader image 5",
    },
    {
      src: `${import.meta.env.BASE_URL}/images/graders/grader1.jpg`,
      alt: "grader image 6",
    },
  ];

  // Calculate the number of images to display
  const imagesToDisplay = images.slice(0, parseInt(props.images));

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;
      // Set the navigation elements to Swiper instance
      if (swiper.params && swiper.params.navigation) {
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
        swiper.navigation.update();
      }
    }
  }, [imagesToDisplay.length]);

  return (
    <div className="my-5">
      <div
        className="flex-r justify-content-between p-2 mb-3"
        style={{
          background: "rgba(48, 48, 48, 0.1)",
          borderTop: "2px solid black",
        }}
      >
        <h4>{props.title}</h4>
        <div>
          <i className="bi bi-images me-2"></i>
          <strong>{props.images} photos</strong>
        </div>
      </div>
      {/* Custom Navigation Controls */}

      <Swiper
        ref={swiperRef}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={imagesToDisplay.length > 4} // Enable loop only if more than 4 images
        spaceBetween={10}
        navigation={true}
        slidesPerView={Math.min(imagesToDisplay.length, 4)} // Dynamic slidesPerView
        freeMode={true}
        watchSlidesProgress={true}
        onSwiper={(swiper) => {
          // Bind navigation elements to Swiper
          if (swiper.params.navigation) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.update();
          }
        }}
        modules={[FreeMode, Navigation, Thumbs]}
      >
        {imagesToDisplay.map((image, index) => (
          <SwiperSlide key={index}>
            <Link to={"/auctioning/productDetail"}>
              <img src={image.src} alt={image.alt} width="150" height="100" />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="row mt-3">
        <h3 className="col-md-5">
          <strong>Limited Function Check</strong>
        </h3>
        <p className="col-md-7">{props.description}</p>
      </div>
    </div>
  );
};

export default ImageComponent;
