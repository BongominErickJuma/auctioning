import React from "react";

const BidClose = () => {
  return (
    <div>
      <div className="d-flex align-items-start mt-5">
        <p>Bidding closes on:</p>
        <div className="ms-5">
          <h6>Friday, September 13, 2024</h6>
          <p>
            Lots will close at 15 second intervals. Lot 1304 will be sold
            Thursday, September 19 at 12:54 PM (your time zone)
          </p>
        </div>
      </div>
      <div className="d-flex align-items-start">
        <p>Lots:</p>
        <div className="ms-5">
          <p>1304 - 2193</p>
        </div>
      </div>
    </div>
  );
};

export default BidClose;
