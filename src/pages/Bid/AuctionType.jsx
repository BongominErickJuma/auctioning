import React from "react";

const AuctionType = () => {
  return (
    <div>
      <h5>Timed Auction</h5>
      <div className="row align-items-start">
        <div className="col-lg-4">
          <small>All Timed Auction lots: 1 - 9016</small>
          <h6>
            <a href="#">Timed Auction details</a>
          </h6>
        </div>
        <div className="col-lg-8">
          <button className="btn btn-sm btn-primary d-block">View only</button>
          <small className="d-block">
            <b>Registered and bidding on-site with PIN?</b>
          </small>
          <small className="d-block">
            <a href="#">Use your pin</a> to enter Timed Auction
          </small>
        </div>
      </div>
    </div>
  );
};

export default AuctionType;
