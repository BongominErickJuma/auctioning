import React, { useCallback, useEffect, useState } from "react";

const BidDetails = () => {
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
  );
};

export default BidDetails;
