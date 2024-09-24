import React, { useState,useContext, useEffect } from "react";
// import { Link } from "react-router-dom";
import useWebSocket from "react-use-websocket";
import { AppContext } from "../../Contex/AppContext";

import { Link, useNavigate, useParams } from "react-router-dom";
import useFetch from "../../useFetch";




const AuctioningPage = () => {


  
  const { user, loading } = useContext(AppContext); // Get user from context

  // Check if the user data is still loading
  if (loading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }



  const { id } = useParams();

  const BASE_URL = import.meta.env.KCLIENT_BASE_URL;
  const IMAGE_URL = import.meta.env.KCLIENT_IMAGE_URL;


  const url = `${BASE_URL}/users/get/product/1`;

  const query = {
    perPage: '50',
    orderBy: 'desc',
  };

  const { data, isPending, error } = useFetch(url, query);


  // Assuming that the user object has a `name` property
  const  username = user.name;
  const  user_id = user.id;
  const  product_id = 1;



  // Define WebSocket URL and pass username as query param
  const WS_URL = `ws://127.0.0.1:4000?username=${encodeURIComponent(username)}`;

  // Establish WebSocket connection
  const { sendJsonMessage, lastJsonMessage } = useWebSocket(WS_URL, {
    onOpen: () => console.log("WebSocket connection established"),
    onClose: () => console.log("WebSocket connection closed"),
    shouldReconnect: () => true, // Auto reconnect on failure
  });

  // State to store the users' data received from WebSocket
  const [usersData, setUsersData] = useState({});
  const [currentHighestPrice, setCurrentHighestPrice] = useState(0); // Track the highest price

  // Update the usersData state whenever a new message is received
  useEffect(() => {
    if (lastJsonMessage) {
      setUsersData(lastJsonMessage);

      // Calculate the current highest price from all users
      const highestPrice = Math.max(
        ...Object.values(lastJsonMessage).map(user => parseFloat(user.state?.price || 0))
      );
      setCurrentHighestPrice(highestPrice);
    }
  }, [lastJsonMessage]);

  // State for the price input
  const [price, setPrice] = useState(0);
  const [errorMessage, setErrorMessage] = useState(null); // For displaying error message

  // Function to handle sending the price update
  const sendPriceUpdate = () => {
    const enteredPrice = parseFloat(price);

    if (enteredPrice <= currentHighestPrice) {
      setErrorMessage(`Your bid price is too low. Current highest bid is $${currentHighestPrice}.`);
    } else {
      const priceUpdate = {
        username,
        product_id,
        user_id,
        price: enteredPrice,
      };
      sendJsonMessage(priceUpdate);
      setErrorMessage(null); // Clear error if bid is successful
    }
  };


 
  return (
    <>
   




    <div className="container my-4">
    {error ? (
        <div className="alert alert-danger bg-danger text-light border-0 alert-dismissible fade show" role="alert">
          Check your internet {error}
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
      ) :data&& data.data && data.data.product ?(
        <div className="card border-0">
        <img
          src={`${IMAGE_URL}/${data.data.product.image}`}
          className="card-img-top mx-auto mt-3"
          alt="Auction Item"
        />
        <div className="card-body text-center p-0">
          <h2 className="my-3">
            <span className="me-2">{data.data.product.name}</span>
          </h2>
          <div className="flex-r  justify-content-between">

          <h1>Welcome, {username} </h1>

<h3>Current highest bid: ${currentHighestPrice}</h3>
         
<div className="mb-3">
Enter your bid price        
        <input
          type="number"
          className="form-control"
          id="priceInput"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>

      {/* Button to send the price update */} 
      <button className="btn btn-primary" onClick={sendPriceUpdate}>
        Submit Bid
      </button>
          </div>
         

          <div className="row g-3">

          {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}

          {Object.keys(usersData).length > 0 ? (
  Object.values(usersData).map((userData, index) => (
    <div key={index} className="col-md-3">
      <Link>
        <div className="card info-card sales-card">
          <div className="card-body">
            <h5 className="card-title">{userData.username}</h5>
            <div>
              <h6>${userData.state?.price || 0}</h6>
              <span className="text-success small pt-1 fw-bold">
                {/* Add other relevant details if needed */}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  ))
) : (
  <p>No auction data received yet.</p>
)}

          </div>
        </div>
      </div>
      ):(
          <p>No  product received yet.</p>

      )}
      
    </div>
    </>
  );
};

export default AuctioningPage;



// const AuctioningPage = ({ username }) => {
//   // WebSocket URL
//   const WS_URL = "ws://127.0.0.1:3000";

//   // State for auction items and users' bids
//   const [auctions, setAuctions] = useState([
//     {
//       location: "New York",
//       price: 4000,
//       seller: "ArtCollector_NY",
//       discount: "12%",
//     },
//     {
//       location: "Los Angeles",
//       price: 300.99,
//       seller: "ArtCollector_LA",
//       discount: "10%",
//     },
//     {
//       location: "Chicago",
//       price: 2000,
//       seller: "ArtCollector_CHI",
//       discount: "8%",
//     },
//     {
//       location: "Kampala",
//       price: 19900,
//       seller: "ArtCollector_KLA",
//       discount: "30%",
//     },
//   ]);

//   // WebSocket hook for sending and receiving messages
//   const { sendJsonMessage, lastJsonMessage } = useWebSocket(WS_URL, {
//     onOpen: () => console.log("Connected to WebSocket"),
//     onClose: () => console.log("Disconnected from WebSocket"),
//     shouldReconnect: () => true, // Automatically reconnect on connection loss
//   });

//   // Effect to handle receiving bid updates via WebSocket
//   useEffect(() => {
//     if (lastJsonMessage !== null) {
//       const updatedData = JSON.parse(lastJsonMessage.data);

//       if (updatedData.action === "updateBid") {
//         setAuctions((prevAuctions) =>
//           prevAuctions.map((auction) =>
//             auction.location === updatedData.location
//               ? { ...auction, price: updatedData.newPrice, seller: updatedData.username }
//               : auction
//           )
//         );
//       }
//     }
//   }, [lastJsonMessage]);

//   // Function to send a new bid to the server
//   const handleBidIncrease = (location) => {
//     const auction = auctions.find((a) => a.location === location);
//     const newBidPrice = auction.price + 100; // Increase bid by 100

//     // Broadcast the new bid and username to the WebSocket server
//     sendJsonMessage({
//       action: "placeBid",
//       newPrice: newBidPrice,
//       username: username, // Send the user's name with the bid
//       location: location, // Send the auction location
//     });

//     // Optimistically update the price and bidder locally
//     setAuctions((prevAuctions) =>
//       prevAuctions.map((a) =>
//         a.location === location
//           ? { ...a, price: newBidPrice, seller: username }
//           : a
//       )
//     );
//   };

//   return (
    // <div className="container my-4">
    //   <div className="card border-0">
    //     <img
    //       src={`${import.meta.env.BASE_URL}/images/graders/grader4.jpg`}
    //       className="card-img-top mx-auto mt-3"
    //       alt="Auction Item"
    //     />
    //     <div className="card-body text-center p-0">
    //       <h2 className="my-3">
    //         <span className="me-2">Air Compressor</span>
    //       </h2>

    //       <div className="row gx-3">
    //         {auctions.map((auction, index) => (
    //           <div key={index} className="col-md-3">
    //             <Link to={"/auctioning/auction"}>
    //               <div className="card info-card sales-card">
    //                 <div className="card-body">
    //                   <h5 className="card-title">{auction.location}</h5>
    //                   <div>
    //                     <h6>${auction.price}</h6>
    //                     <span className="text-success small pt-1 fw-bold">
    //                       {auction.discount} off
    //                     </span>
    //                     <p className="text-muted small pt-2 ps-1">
    //                       {auction.seller} {/* Username of last bidder */}
    //                     </p>
    //                   </div>
    //                   <button
    //                     onClick={() => handleBidIncrease(auction.location)}
    //                     className="btn btn-primary"
    //                   >
    //                     Place Bid (+100)
    //                   </button>
    //                 </div>
    //               </div>
    //             </Link>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </div>
//   );
// };

// export default AuctioningPage;










// import React, { useContext, useState,useEffect } from 'react'
// import { Link } from "react-router-dom";
// import useWebSocket from "react-use-websocket";
// import { AppContext } from '../../Contex/AppContext';


// // import { useContext, useEffect, useState } from 'react';

// // import { AppContext } from '../../Contex/AppContext';
// // import useFetch from '../../useFetch';
// const AuctioningPage = () => {
//   const { user, loading } = useContext(AppContext);
//   const [username, setUsername] = useState(user?.name || '');
  
//   // WebSocket URL (should be a string)
//   const WS_URL = "ws://127.0.0.1:3000"; 
  
//   // WebSocket connection using useWebSocket hook
//   const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(WS_URL, {
//     queryParams: { username },
//     onOpen: () => console.log(`${username} connected`),
//     onClose: () => console.log(`${username} disconnected`),
//     onMessage: (message) => console.log('Received:', message),
//   });

//   useEffect(() => {
//     if (lastJsonMessage !== null) {
//       console.log('Received message from server:', lastJsonMessage);
//     }
//   }, [lastJsonMessage]);

//   if (loading) {
//     return (
//       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//         <div className="spinner-border" role="status">
//           <span className="visually-hidden">Loading...</span>
//         </div>
//       </div>
//     );
//   }

//   const handleSendMessage = () => {
//     const message = {
//       username,
//       action: 'bid',
//       data: { amount:"3000",name:username }
//     };
//     sendJsonMessage(message);
//   };

//   return (
//     <div>
//       <h1>Welcome, {username}</h1>
//       <button onClick={handleSendMessage}>Place Bid</button>
//     </div>
//   );
// };

// export default AuctioningPage;
