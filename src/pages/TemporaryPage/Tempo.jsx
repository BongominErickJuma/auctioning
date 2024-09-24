import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import "./Tempo.css";

const Tempo = () => {
  const [leftItems, setLeftItems] = useState([]);
  const [trightItems, settRightItems] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [rightTitle, setRightTitle] = useState("");

  const fetchLeftItems = useCallback(async (item) => {
    try {
      const res = await fetch(`${import.meta.env.BASE_URL}/data/${item}.json`);
      const data = await res.json();
      const leftItems = data.data;
      setRightTitle(leftItems[0].name);
      setLeftItems(leftItems);
    } catch (err) {
      console.log(err);
    }
  }, []);
  const fetchRightItems = useCallback(async (item) => {
    const itemLinks = `${item}Links`;
    try {
      const res = await fetch(
        `${import.meta.env.BASE_URL}/data/${itemLinks}.json`
      );
      const data = await res.json();

      const randomNum = Math.floor(Math.random() * 50) + 1;
      const selectedItems = data.data.slice(0, randomNum);
      settRightItems(selectedItems);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleFetchLink = (item) => {
    fetchRightItems(item);
  };

  const handleActiveLinks = (index) => {
    setActiveIndex(index);
    setRightTitle(leftItems[index].name);
  };

  useEffect(() => {
    fetchLeftItems("categories");
    fetchRightItems("categories");
  }, []);

  return (
    <div className="row">
      <div className="col-lg-3">
        <ul>
          {leftItems.map((lItems, idx) => (
            <li
              key={idx}
              className={`my-2 px-2 lItems ${
                activeIndex === idx ? "active" : ""
              }`} // Conditionally add active class
              onMouseOver={() => {
                if (lItems.call) {
                  handleFetchLink(lItems.call);
                }
                handleActiveLinks(idx); // Pass the index of the item to set it as active
              }}
            >
              <div className="p-2 inner-link d-flex align-items-center justify-content-between rounded">
                {lItems.name ? lItems.name : lItems}
                <i className="bi bi-chevron-right fw-bold"></i>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-lg-9">
        <div className="row right-row">
          <h2>{rightTitle}</h2>
          {trightItems.map((rItems, idx) => (
            <div key={idx} className="col-lg-4 my-2  rItems">
              <Link
                to={"/auctioning/details"}
                className="rItems-inner p-2 rounded text-dark"
              >
                {rItems.name}

                {rItems.number ? (
                  <span className="ms-1">({rItems.number})</span>
                ) : (
                  ""
                )}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tempo;
