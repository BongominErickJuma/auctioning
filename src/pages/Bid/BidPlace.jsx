import React from "react";

const BidPlace = () => {
  return (
    <div className="d-flex align-items-start justify-content-between mt-5">
      <div>
        <h3 className="text-primary">Bid in Ocana, ESP</h3>
        <div className="mt-5">
          <small>
            <a href="#">Learn how</a> to register to bid online at this auction.
          </small>
          <button className="btn btn-sm btn-primary ms-5">
            Register to bid
          </button>
        </div>
      </div>
      <small>
        Wednesday, September 18, 2024 to Thursday, September 19, 2024
      </small>
    </div>
  );
};

export default BidPlace;
