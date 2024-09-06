import React from "react";
import service from "../../../js/Homepage/services";
import "./Services.css";

const Services = () => {
  return (
    <div className="services mb-5 ">
      <div className="row gx-3">
        {service.map((ser, idx) => (
          <div className="col-lg-4" key={idx}>
            <div className="shadow-sm p-3 h-100 bg-white">
              <div className="img-container mb-2">
                <img
                  src={ser.imageSrc}
                  alt="pertner Img"
                  className="w-100 d-block"
                />
              </div>
              <h1 className="title  p-0 mb-0">RITCHIE BROS.</h1>
              <p className="service-title">{ser.title}</p>
              <p className="mb-5">{ser.text}</p>
              <a href="#" className="float-end my-5">
                learn more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
