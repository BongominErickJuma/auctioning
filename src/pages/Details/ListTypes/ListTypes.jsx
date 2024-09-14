import React from "react";
import { Link } from "react-router-dom";
import detail from "../../../js/Details/details.js";

const ListTypes = () => {
  return (
    <>
      <div className="mb-3">
        <div className="row gy-3">
          {detail.map((det, idx) => (
            <div className="col-lg-4 " key={idx}>
              <Link to={"/auctioning/productDetail"}>
                <div className="card">
                  <img src={det.image} alt="image" />
                  <div className="card-body text-start">
                    <button className="btn btn-sm bg-dark text-white rounded-5 mb-3 py-0">
                      lot {det.lot}
                    </button>
                    <h5 className="card-title">{det.name}</h5>
                    <p className="card-text mb-0">
                      {" "}
                      <i className="bi bi-geo-alt me-2"></i>
                      {det.location}
                    </p>
                    <p className="card-text mt-0 mb-3">
                      {" "}
                      <i className="bi bi-alarm me-2"></i>Usage: {det.usage}
                    </p>
                    <hr />
                    {det.thumbnails.map((th, idx) => (
                      <p key={idx} className="mb-0">
                        {th}
                      </p>
                    ))}

                    <div className="text-end mt-5">
                      <h4 className="text-muted">Timed Auction</h4>
                      <p>{det.date} (day 2 of 3)</p>
                    </div>
                    <a
                      href="#!"
                      data-mdb-ripple-init
                      className="btn btn-primary mt-3 w-100"
                    >
                      <i className="bi bi-heart me-2"></i>Add to Watchlist
                    </a>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ListTypes;
