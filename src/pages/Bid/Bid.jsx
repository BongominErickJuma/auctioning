import React from "react";
import BidPlace from "./BidPlace";
import AuctionType from "./AuctionType";
import TA from "./TimedAuction/TA";

const Bid = () => {
  return (
    <div className="mt-5 px-5">
      <BidPlace />
      <hr />
      <AuctionType />
      <div
        className="my-3"
        style={{
          border: "1px solid black",
        }}
      >
        <h3 className="bg-dark text-white py-1 px-2">Timed Auction</h3>
        <TA />
      </div>
    </div>
  );
};

export default Bid;
