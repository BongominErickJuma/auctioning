import React from "react";

const Types = () => {
  return (
    <section className="mb-3">
      <section className="">
        <div className="row">
          <div className="col-3 rounded  mb-4 mb-lg-0">
            <div
              className="bg-image hover-overlay ripple shadow-1-strong rounded"
              data-ripple-color="light"
            >
              <img
                src={`${import.meta.env.BASE_URL}/images/graders/grader3.jpg`}
                className="w-100 rounded-3"
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
            <b>Air Compressor 701</b>
          </div>

          <div className="col-3 mb-4 mb-lg-0">
            <div
              className="bg-image hover-overlay ripple shadow-1-strong rounded"
              data-ripple-color="light"
            >
              <img
                src={`${import.meta.env.BASE_URL}/images/graders/grader4.jpg`}
                className="w-100 rounded-3"
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
            <b>Air Drier 701</b>
          </div>

          <div className="col-3 mb-4 mb-lg-0">
            <div
              className="bg-image hover-overlay ripple shadow-1-strong rounded"
              data-ripple-color="light"
            >
              <img
                src={`${import.meta.env.BASE_URL}/images/graders/grader3.jpg`}
                className="w-100 rounded-3"
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
            <b>Air cooler 701</b>
          </div>
          <div className="col-3 mb-4 mb-lg-0">
            <div
              className="bg-image hover-overlay ripple shadow-1-strong rounded"
              data-ripple-color="light"
            >
              <img
                src={`${import.meta.env.BASE_URL}/images/graders/grader4.jpg`}
                className="w-100 rounded-3"
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
            <b>Air receiver 701</b>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Types;
