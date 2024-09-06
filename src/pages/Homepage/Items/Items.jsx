import React from "react";
import ItemsList from "../../../js/Homepage/list";
import "./Items.css";

const Items = () => {
  return (
    <div className="items my-3">
      <div className="flex-r justify-content-between mb-3">
        <h3>Featured Items in upcoming auctions</h3>
        <button className="btn btn-sm btn-outline-primary">
          View All Auctions
        </button>
      </div>
      {ItemsList.map((item, idx) => (
        <div className="card shadow-sm border-0 mt-3" key={idx}>
          <div className="row">
            <div className="col-lg-5">
              <div className="p-3">
                <p className="mb-0">
                  <i className={item.flag}></i>
                  <b className="mx-2">{item.date}</b>
                  {item.bid ? (
                    <b className="text-primary">{item.bid}</b>
                  ) : (
                    <span></span>
                  )}
                </p>
                <h3 className="my-0">{item.name}</h3>
                <p className="mb-0">
                  items located in
                  {item.location.map((loc, idx) => (
                    <span key={idx} className="mx-1">
                      {loc.city}, {item.region}
                    </span>
                  ))}
                </p>
                <p className="fw-light mb-0">
                  Participate:
                  {item.found.map((fd, idx) => (
                    <span key={idx} className="me-1">
                      <i
                        className={
                          fd === "online"
                            ? "bi bi-phone"
                            : "bi bi-person-walking"
                        }
                      ></i>
                      {fd}
                    </span>
                  ))}
                </p>
                <p className="fw-light mt-0">
                  Format:
                  <i
                    className={
                      item.format === "timed auction"
                        ? "bi bi-clock mx-1"
                        : "bi bi-mic mx-1"
                    }
                  ></i>
                  {item.format}
                </p>
                <button className="btn btn-sm btn-primary">
                  Register to bid online
                </button>
                {item.bid ? (
                  <button className="btn btn-sm btn-outline-primary mx-2">
                    Enter auction
                  </button>
                ) : (
                  <span className="mx-2"></span>
                )}

                <a href="#">see all {item.stock} items</a>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row gx-2 h-100">
                {item.images.map((img, imgIdx) => (
                  <div key={imgIdx} className="col-lg-4 img-container">
                    <img src={img} alt="tractor Image" />
                    <button className="img-btn rounded-5">112 tractors</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Items;
