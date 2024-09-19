// import React from "react";
import BidOpen from "./BidOpen";
import BidClose from "./BidClose";
import BidDetails from "./BidDetails";
import React, { useCallback, useEffect, useState } from "react";


const TA = () => {

  const [bidetails, setBidDetails] = useState([]);

  const fetchBidDetails = useCallback(async () => {
    try {
      const res = await fetch(
        `${import.meta.env.BASE_URL}/data/categoriesLinks.json`
      );
      const data = await res.json();

      const randomNum = Math.floor(Math.random() * 100) + 1;
      const selectedItems = data.data.slice(0, randomNum);
      setBidDetails(selectedItems);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    fetchBidDetails();
  }, []);


  return (
    <div className="m-2">
      {/* <BidOpen /> */}
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

      {/* <BidDetails /> */}
      <div className="">
      <h5>Equipment categories:</h5>
      <ul
        className="row px-5"
        style={{
          listStyle: "disc",
        }}
      >
        {bidetails.map((category, index) => (
          <li className="col-lg-4 my-2" key={index}>
            {category.name}
          </li>
        ))}
      </ul>
      <hr />
    </div>
      {/* <BidClose /> */}

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

      {/* <BidDetails /> */}

      <div className="">
      <h5>Equipment categories:</h5>
      <ul
        className="row px-5"
        style={{
          listStyle: "disc",
        }}
      >
        {bidetails.map((category, index) => (
          <li className="col-lg-4 my-2" key={index}>
            {category.name}
          </li>
        ))}
      </ul>
      <hr />
    </div>
      {/* <BidClose /> */}

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


      {/* <BidDetails /> */}

      <div className="">
      <h5>Equipment categories:</h5>
      <ul
        className="row px-5"
        style={{
          listStyle: "disc",
        }}
      >
        {bidetails.map((category, index) => (
          <li className="col-lg-4 my-2" key={index}>
            {category.name}
          </li>
        ))}
      </ul>
      <hr />
    </div>


      {/* <BidClose /> */}

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

export default TA;
