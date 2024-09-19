import React from "react";

const ProductThumbnails = () => {
  return (
    <div className="row g-1">
      <div className="col-2 mb-4 mb-lg-0">
        <img
          src={`${import.meta.env.BASE_URL}/images/graders/grader1.jpg`}
          className="w-100"
        />
      </div>
      <div className="col-2 mb-4 mb-lg-0">
        <img
          src={`${import.meta.env.BASE_URL}/images/graders/grader2.jpg`}
          className="w-100"
        />
      </div>

      <div className="col-2 mb-4 mb-lg-0">
        <img
          src={`${import.meta.env.BASE_URL}/images/graders/grader3.jpg`}
          className="w-100 h-100"
        />
      </div>

      <div className="col-2 mb-4 mb-lg-0">
        <img
          src={`${import.meta.env.BASE_URL}/images/graders/grader4.jpg`}
          className="w-100 h-100"
        />
      </div>

      <div className="col-2 mb-4 mb-lg-0">
        <img
          src={`${import.meta.env.BASE_URL}/images/graders/grader1.jpg`}
          className="w-100"
        />
      </div>

      <div className="col-2 mb-4 mb-lg-0">
        <img
          src={`${import.meta.env.BASE_URL}/images/graders/grader2.jpg`}
          className="w-100"
        />
      </div>
    </div>
  );
};

export default ProductThumbnails;
