import React from "react";
import { Link } from "react-router-dom";

const AuctioningPage = () => {
  const auctionItem = {
    name: "Air Compressor",
    price: 2500,
    image: `${import.meta.env.BASE_URL}/images/graders/grader4.jpg`,
    auctions: [
      {
        location: "New York",
        price: "$4000",
        seller: "ArtCollector_NY",
        discount: "12%",
      },
      {
        location: "Los Angeles",
        price: "$300.99",
        seller: "ArtCollector_LA",
        discount: "10%",
      },
      {
        location: "Chicago",
        price: "$2000",
        seller: "ArtCollector_CHI",
        discount: "8%",
      },
      {
        location: "Kampala",
        price: "$19900",
        seller: "ArtCollector_KLA",
        discount: "30%",
      },

      {
        location: "Kampala",
        price: "$19900",
        seller: "ArtCollector_KLA",
        discount: "30%",
      },
      {
        location: "Kampala",
        price: "$19900",
        seller: "ArtCollector_KLA",
        discount: "30%",
      },
    ], // Multiple auction locations with their price and seller
  };

  return (
    <div className="container my-4">
      <div className="card border-0">
        <img
          src={auctionItem.image}
          className="card-img-top mx-auto mt-3"
          alt="Auction Item"
        />
        <div className="card-body text-center p-0">
          <h2 className="my-3">
            <span className="me-2">{auctionItem.name}</span>
            <span>${auctionItem.price}</span>
          </h2>
          <div className="row gx-3">
            {auctionItem.auctions.map((auction, index) => (
              <div key={index} className="col-md-3">
                <Link to={"/auctioning/auction"}>
                  <div className="card info-card sales-card">
                    <div className="card-body">
                      <h5 className="card-title">{auction.location}</h5>

                      <div>
                        <h6>{auction.price}</h6>
                        <span className="text-success small pt-1 fw-bold">
                          {auction.discount} off
                        </span>
                        <p className="text-muted small pt-2 ps-1">
                          {auction.seller}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuctioningPage;
