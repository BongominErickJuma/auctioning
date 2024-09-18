import React from "react";

const ProductThumbnails = () => {
  return (
    <div className="row g-1">
      <div className="col-2 mb-4 mb-lg-0">
        <div
          className="bg-image hover-overlay ripple shadow-1-strong rounded"
          data-ripple-color="light"
        >
          <img
            src={`${import.meta.env.BASE_URL}/images/graders/grader3.jpg`}
            className="w-100"
          />
          <a href="#!" data-mdb-modal-init data-mdb-target="#exampleModal1">
            <div
              className="mask"
              style={{
                backgroundColor: "rgba(251, 251, 251, 0.2)",
              }}
            ></div>
          </a>
        </div>
      </div>
      <div className="col-2 mb-4 mb-lg-0">
        <div
          className="bg-image hover-overlay ripple shadow-1-strong rounded"
          data-ripple-color="light"
        >
          <img
            src={`${import.meta.env.BASE_URL}/images/graders/grader3.jpg`}
            className="w-100"
          />
          <a href="#!" data-mdb-modal-init data-mdb-target="#exampleModal1">
            <div
              className="mask"
              style={{
                backgroundColor: "rgba(251, 251, 251, 0.2)",
              }}
            ></div>
          </a>
        </div>
      </div>

      <div className="col-2 mb-4 mb-lg-0">
        <div
          className="bg-image hover-overlay ripple shadow-1-strong rounded"
          data-ripple-color="light"
        >
          <img
            src={`${import.meta.env.BASE_URL}/images/graders/grader4.jpg`}
            className="w-100"
          />
          <a href="#!" data-mdb-modal-init data-mdb-target="#exampleModal2">
            <div
              className="mask"
              style={{
                backgroundColor: "rgba(251, 251, 251, 0.2)",
              }}
            ></div>
          </a>
        </div>
      </div>

      <div className="col-2 mb-4 mb-lg-0">
        <div
          className="bg-image hover-overlay ripple shadow-1-strong rounded"
          data-ripple-color="light"
        >
          <img
            src={`${import.meta.env.BASE_URL}/images/graders/grader4.jpg`}
            className="w-100"
          />
          <a href="#!" data-mdb-modal-init data-mdb-target="#exampleModal2">
            <div
              className="mask"
              style={{
                backgroundColor: "rgba(251, 251, 251, 0.2)",
              }}
            ></div>
          </a>
        </div>
      </div>

      <div className="col-2 mb-4 mb-lg-0">
        <div
          className="bg-image hover-overlay ripple shadow-1-strong rounded"
          data-ripple-color="light"
        >
          <img
            src={`${import.meta.env.BASE_URL}/images/graders/grader3.jpg`}
            className="w-100"
          />
          <a href="#!" data-mdb-modal-init data-mdb-target="#exampleModal3">
            <div
              className="mask"
              style={{
                backgroundColor: "rgba(251, 251, 251, 0.2)",
              }}
            ></div>
          </a>
        </div>
      </div>

      <div className="col-2 mb-4 mb-lg-0">
        <div
          className="bg-image hover-overlay ripple shadow-1-strong rounded"
          data-ripple-color="light"
        >
          <img
            src={`${import.meta.env.BASE_URL}/images/graders/grader3.jpg`}
            className="w-100"
          />
          <a href="#!" data-mdb-modal-init data-mdb-target="#exampleModal1">
            <div
              className="mask"
              style={{
                backgroundColor: "rgba(251, 251, 251, 0.2)",
              }}
            ></div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductThumbnails;
