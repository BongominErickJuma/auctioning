import React from "react";
import "./ProductDetails.css";
import ProductThumbnails from "./ProductThumbnails";
import ImageCarousel from "./ImageCarousel";

const ProductDetails = () => {
  return (
    <div className="ecommerce-gallery">
      <div className="row py-3 shadow-5">
        <ImageCarousel />
        {/* <div className="col-6 mb-1 mx-auto">
          <div className="lightbox">
            <img
              src={`${import.meta.env.BASE_URL}/images/graders/grader1.jpg`}
              alt="Gallery image 1"
              className="ecommerce-gallery-main-img active w-100"
            />
          </div>
        </div> */}
        <div className="col-lg-12 mt-5">
          <ProductThumbnails />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
