import React from "react";
import "./ProductDetails.css";
import ProductThumbnails from "./ProductThumbnails";
import ImageCarousel from "./ImageCarousel";

const ProductDetails = () => {
  return (
    <div className="ecommerce-gallery">
      <div className="row py-3 shadow-5">
        <ImageCarousel />
        <div className="col-lg-12 mt-5">
          <ProductThumbnails />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
