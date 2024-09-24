// import React, { useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// import { useParams } from "react-router-dom";
// import useFetch from "../../useFetch";


// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/navigation";
// import "swiper/css/thumbs";
// import "./Product.css";

// // import required modules
// import { FreeMode, Navigation, Thumbs } from "swiper/modules";

// const Product = () => {
//   const [thumbsSwiper, setThumbsSwiper] = useState(null);

//   const { id } = useParams();

//   const BASE_URL = import.meta.env.KCLIENT_BASE_URL;
//   const url = `${BASE_URL}/users/get/part/${id}`;

//   const query = {
//     perPage: '50',
//     orderBy: 'desc',
//     relationship:'part_gallaries'
//   };

//   const { data, isPending, error } = useFetch(url, query);

// // alert(JSON.stringify(data))

//   return (
//     <div className="product-swiper mb-5">
//       <Swiper
//         style={{
//           "--swiper-navigation-color": "#fff",
//           "--swiper-pagination-color": "#fff",
//         }}
//         loop={true}
//         spaceBetween={10}
//         navigation={true}
//         thumbs={{ swiper: thumbsSwiper }}
//         modules={[FreeMode, Navigation, Thumbs]}
//         className="mySwiper2"
//       >
//         <SwiperSlide>
//           <img src={`${import.meta.env.BASE_URL}/images/graders/grader1.jpg`} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={`${import.meta.env.BASE_URL}/images/graders/grader2.jpg`} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={`${import.meta.env.BASE_URL}/images/graders/grader3.jpg`} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={`${import.meta.env.BASE_URL}/images/graders/grader4.jpg`} />
//         </SwiperSlide>
//       </Swiper>





//       <Swiper
//         onSwiper={setThumbsSwiper}
//         loop={true}
//         spaceBetween={10}
//         slidesPerView={4}
//         freeMode={true}
//         watchSlidesProgress={true}
//         modules={[FreeMode, Navigation, Thumbs]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <img src={`${import.meta.env.BASE_URL}/images/graders/grader1.jpg`} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={`${import.meta.env.BASE_URL}/images/graders/grader2.jpg`} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={`${import.meta.env.BASE_URL}/images/graders/grader3.jpg`} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={`${import.meta.env.BASE_URL}/images/graders/grader4.jpg`} />
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// };

// export default Product;

import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useParams } from "react-router-dom";
import useFetch from "../../useFetch";

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
  const { id } = useParams();
  const IMAGE_URL = import.meta.env.KCLIENT_IMAGE_URL;

  const BASE_URL = import.meta.env.KCLIENT_BASE_URL;
  const url = `${BASE_URL}/users/get/part/${id}`;

  const query = {
    perPage: '50',
    orderBy: 'desc',
    relationship: 'part_gallaries'
  };

  const { data, isPending, error } = useFetch(url, query);

  // Log the data for debugging
  console.log(data); // Log the whole data object
  console.log(data?.data?.results?.data); // Log the specific images array

  return (
    <div className="product-swiper mb-5">
      {error ? (
        <div className="alert alert-danger bg-danger text-light border-0 alert-dismissible fade show" role="alert">
          Check your internet: {error}
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      ) : isPending ? (
        <div className="d-flex justify-content-center align-items-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        data?.data?.results?.data && (
          <>
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              loop={false} // Set to false for testing
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              {data.data.results.data.map((image) => (
                <SwiperSlide key={image.id}>
                  <img src={`${IMAGE_URL}/${image.image}`} alt={`Image ${image.id}`} />
                </SwiperSlide>
              ))}
            </Swiper>

            <Swiper
              onSwiper={setThumbsSwiper}
              loop={false} // Set to false for testing
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              {data.data.results.data.map((image) => (
                <SwiperSlide key={image.id}>
                  <img src={`${IMAGE_URL}/${image.image}`} alt={`Thumbnail ${image.id}`} />
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        )
      )}
    </div>
  );
};

export default Product;
