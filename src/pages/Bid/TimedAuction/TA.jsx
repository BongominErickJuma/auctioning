import React from "react";
import BidOpen from "./BidOpen";
import BidClose from "./BidClose";
import BidDetails from "./BidDetails";

const TA = () => {
  return (
    <div className="m-2">
      <BidOpen />
      <BidDetails />
      <BidClose />
      <BidDetails />
      <BidClose />
      <BidDetails />
      <BidClose />
    </div>
  );
};

export default TA;
