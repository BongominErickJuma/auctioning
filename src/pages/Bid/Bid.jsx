// import React from "react";
import BidPlace from "./BidPlace";
import AuctionType from "./AuctionType";
import TA from "./TimedAuction/TA";
import React, { useCallback, useEffect, useState } from "react";
import useFetch from "../../useFetch"
import { useNavigate, useParams } from "react-router-dom";


const Bid = () => {
  const { id } = useParams();

  const BASE_URL = import.meta.env.KCLIENT_BASE_URL;
  const url = `${BASE_URL}/users/AuctionTypes/${id}`;

  const query = {
    perPage: '50',
    orderBy: 'desc',
  };

  const { data, isPending, error } = useFetch(url, query);

  return (
    <div className="mt-5 px-5">
      {error ? (
        <div className="alert alert-danger bg-danger text-light border-0 alert-dismissible fade show" role="alert">
          Check your internet
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      ) : isPending ? (
        <div className="d-flex justify-content-center align-items-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : data && data.auction ? (
        <div>
          {/* Auction Header */}
          <div className="d-flex align-items-start justify-content-between mt-5">
            <div>
              <h3 className="text-primary">{data.auction.name}</h3>
              <div className="mt-5">
                <small>
                  <a href="#">Learn how</a> to register to bid online at this auction.
                </small>
                <button className="btn btn-sm btn-primary ms-5">Register to bid</button>
              </div>
            </div>
            <small>
              {`Wednesday, ${new Date(data.auction.open_time).toLocaleString()} to Thursday, ${new Date(
                data.auction.close_time
              ).toLocaleString()}`}
            </small>
          </div>
          <hr />

          {/* Loop through AuctionTypes */}
          {data.auctionTypes && data.auctionTypes.length > 0 ? (
            data.auctionTypes.map((auctionType) => (
              <div
                key={auctionType.id}
                className="my-3"
                style={{ border: '1px solid black' }}
              >
                <h3 className="bg-dark text-white py-1 px-2">{auctionType.name}</h3>
                
                {/* AuctionType open and close times */}
                <div className="m-2">
                  <div className="d-flex align-items-start">
                    <p>Bidding opens on:</p>
                    <div className="ms-5">
                      <h6>{new Date(auctionType.open_time).toLocaleString()}</h6>
                    </div>
                  </div>

                  <div className="d-flex align-items-start">
                    <p>Bidding closes on:</p>
                    <div className="ms-5">
                      <h6>{new Date(auctionType.close_time).toLocaleString()}</h6>
                    </div>
                  </div>

                  <hr />

                  {/* Loop through AuctionTimes */}
                  {auctionType.auction_times && auctionType.auction_times.length > 0 ? (
                    auctionType.auction_times.map((auctionTime) => (
                      <div key={auctionTime.auction_time_id}>
                        <h4>Ring: {auctionTime.name}</h4>

                        {/* Equipment Categories */}
                        <div className="row px-5" style={{ listStyle: 'disc' }}>
                          <h5>Equipment categories:</h5>
                          <ul>
                            {auctionTime.categories && auctionTime.categories.length > 0 ? (
                              auctionTime.categories.map((category) => (
                                <li key={category.id}>{category.name}</li>
                              ))
                            ) : (
                              <p>No Equipment Category available.</p>
                            )}
                          </ul>
                        </div>
                        <hr />
                      </div>
                    ))
                  ) : (
                    <p>No auction times available.</p>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p>No auction types available.</p>
          )}
        </div>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default Bid;






// <div className="mt-5 px-5">
// <BidPlace />
// <hr />
// {/* <AuctionType /> */}

// <h5>Timed Auction</h5>
// <div className="row align-items-start">
//   <div className="col-lg-4">
//     <small>All Timed Auction lots: 1 - 9016</small>
//     <h6>
//       <a href="#">Timed Auction details</a>
//     </h6>
//   </div>
//   <div className="col-lg-8">
//     <button className="btn btn-sm btn-primary d-block">View only</button>
//     <small className="d-block">
//       <b>Registered and bidding on-site with PIN?</b>
//     </small>
//     <small className="d-block">
//       <a href="#">Use your pin</a> to enter Timed Auction
//     </small>
//   </div>
// </div>
// <div
//   className="my-3"
//   style={{
//     border: "1px solid black",
//   }}
// >
//   <h3 className="bg-dark text-white py-1 px-2">Timed Auction</h3>
//   {/* <TA /> */}

//   <div className="m-2">
//     {/* <BidOpen /> */}
//     <div className="d-flex align-items-start">
//       <p>Bidding opens on:</p>
//       <div className="ms-5">
//         <h6>Friday, September 13, 2024</h6>
//         <p>1:00 PM (Friday, September 13 at 2:00 PM your time zone)</p>
//       </div>
//     </div>
//     <div className="d-flex align-items-start">
//       <p>All Timed Auction lots:</p>
//       <div className="ms-5">
//         <p>1 - 9016</p>
//       </div>
//     </div>
//     <hr />

//     {/* <BidDetails /> */}
//     <div className="">
//       <h5>Equipment categories:</h5>
//       <ul
//         className="row px-5"
//         style={{
//           listStyle: "disc",
//         }}
//       >
//         {bidetails.map((category, index) => (
//           <li className="col-lg-4 my-2" key={index}>
//             {category.name}
//           </li>
//         ))}
//       </ul>
//       <hr />
//     </div>
//     {/* <BidClose /> */}

//     {/* <div className="d-flex align-items-start mt-5">
//       <p>Bidding closes on:</p>
//       <div className="ms-5">
//         <h6>Friday, September 13, 2024</h6>
//         <p>
//           Lots will close at 15 second intervals. Lot 1304 will be sold
//           Thursday, September 19 at 12:54 PM (your time zone)
//         </p>
//       </div>
//     </div>
//     <div className="d-flex align-items-start">
//       <p>Lots:</p>
//       <div className="ms-5">
//         <p>1304 - 2193</p>
//       </div>
//     </div> */}

//     {/* <BidDetails /> */}

//     {/* <div className="">
//       <h5>Equipment categories:</h5>
//       <ul
//         className="row px-5"
//         style={{
//           listStyle: "disc",
//         }}
//       >
//         {bidetails.map((category, index) => (
//           <li className="col-lg-4 my-2" key={index}>
//             {category.name}
//           </li>
//         ))}
//       </ul>
//       <hr />
//     </div> */}
//     {/* <BidClose /> */}
//     {/* 
// <div className="d-flex align-items-start mt-5">
//   <p>Bidding closes on:</p>
//   <div className="ms-5">
//     <h6>Friday, September 13, 2024</h6>
//     <p>
//       Lots will close at 15 second intervals. Lot 1304 will be sold
//       Thursday, September 19 at 12:54 PM (your time zone)
//     </p>
//   </div>
// </div>
// <div className="d-flex align-items-start">
//   <p>Lots:</p>
//   <div className="ms-5">
//     <p>1304 - 2193</p>
//   </div>
// </div> */}


//     {/* <BidDetails /> */}

//     {/* <div className="">
// <h5>Equipment categories:</h5>
// <ul
//   className="row px-5"
//   style={{
//     listStyle: "disc",
//   }}
// >
//   {bidetails.map((category, index) => (
//     <li className="col-lg-4 my-2" key={index}>
//       {category.name}
//     </li>
//   ))}
// </ul>
// <hr />
// </div> */}


//     {/* <BidClose /> */}

//     <div className="d-flex align-items-start mt-5">
//       <p>Bidding closes on:</p>
//       <div className="ms-5">
//         <h6>Friday, September 13, 2024</h6>
//         <p>
//           Lots will close at 15 second intervals. Lot 1304 will be sold
//           Thursday, September 19 at 12:54 PM (your time zone)
//         </p>
//       </div>
//     </div>
//     <div className="d-flex align-items-start">
//       <p>Lots:</p>
//       <div className="ms-5">
//         <p>1304 - 2193</p>
//       </div>
//     </div>


//   </div>








// </div>
// </div>