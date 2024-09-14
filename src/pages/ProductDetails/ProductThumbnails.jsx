import React from "react";

const ProductThumbnails = () => {
  return (
    <section className="">
      <section className="">
        <div className="row">
          <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
            <div
              className="bg-image hover-overlay ripple shadow-1-strong rounded"
              data-ripple-color="light"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/screens/yt/screen-video-1.webp"
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

          <div className="col-lg-3 mb-4 mb-lg-0">
            <div
              className="bg-image hover-overlay ripple shadow-1-strong rounded"
              data-ripple-color="light"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/screens/yt/screen-video-2.webp"
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

          <div className="col-lg-3 mb-4 mb-lg-0">
            <div
              className="bg-image hover-overlay ripple shadow-1-strong rounded"
              data-ripple-color="light"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/screens/yt/screen-video-3.webp"
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

          <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
            <div
              className="bg-image hover-overlay ripple shadow-1-strong rounded"
              data-ripple-color="light"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/screens/yt/screen-video-1.webp"
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
      </section>

      <section className="">
        <div
          className="modal fade"
          id="exampleModal1"
          tabIndex="-1"
          aria-labelledby="exampleModal1Label"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.youtube.com/embed/A3PDXmYoF5U"
                  title="YouTube video"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="text-center py-3">
                <button
                  type="button"
                  data-mdb-button-init
                  data-mdb-ripple-init
                  className="btn btn-secondary"
                  data-mdb-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="exampleModal2"
          tabIndex="-1"
          aria-labelledby="exampleModal2Label"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.youtube.com/embed/wTcNtgA6gHs"
                  title="YouTube video"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="text-center py-3">
                <button
                  type="button"
                  data-mdb-button-init
                  data-mdb-ripple-init
                  className="btn btn-secondary"
                  data-mdb-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="exampleModal3"
          tabIndex="-1"
          aria-labelledby="exampleModal3Label"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.youtube.com/embed/vlDzYIIOYmM"
                  title="YouTube video"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="text-center py-3">
                <button
                  type="button"
                  data-mdb-button-init
                  data-mdb-ripple-init
                  className="btn btn-secondary"
                  data-mdb-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ProductThumbnails;
