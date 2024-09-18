import React from "react";

const BidOpen = () => {
  return (
    <div>
      <div className="d-flex align-items-start">
        <p>Bidding opens on:</p>
        <div className="ms-5">
          <h6>Friday, September 13, 2024</h6>
          <p>1:00 PM (Friday, September 13 at 2:00 PM your time zone)</p>
        </div>
      </div>
      <div className="d-flex align-items-start">
        <p>All Timed Auction lots:</p>
        <div className="ms-5">
          <p>1 - 9016</p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default BidOpen;
