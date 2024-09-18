import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

const TempoModal = (props) => {
  const [isScrolledToTop, setIsScrolledToTop] = useState(true);
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);
  const leftRowRef = useRef(null); // Reference to the scrollable div

  const handleScroll = () => {
    const el = leftRowRef.current;

    if (el) {
      setIsScrolledToTop(el.scrollTop === 0);
      setIsScrolledToBottom(el.scrollTop + el.clientHeight >= el.scrollHeight);
    }
  };

  useEffect(() => {
    const el = leftRowRef.current;
    if (el) {
      el.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (el) {
        el.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);
  return (
    <div
      className="modal fade custom-width-modal"
      id="navModal"
      // data-bs-backdrop="false"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content border-0">
          <div className="modal-body">
            <div className="container-fluid ">
              <div className="row">
                <div className="col-lg-2 border-end p-0">
                  <div className="text-center chevron">
                    <i
                      className={`bi bi-chevron-up ${
                        isScrolledToTop ? "invisible" : ""
                      }`}
                    />
                  </div>
                  <div className="left-row" ref={leftRowRef}>
                    <ul>
                      {props.leftItems.map((lItems, idx) => (
                        <li
                          key={idx}
                          className={`my-2 px-2 lItems ${
                            props.activeIndex === idx ? "active" : ""
                          }`} // Conditionally add active class
                          onMouseOver={() => {
                            if (lItems.call) {
                              props.handleFetchLink(lItems.call);
                            }
                            props.handleActiveLinks(idx); // Pass the index of the item to set it as active
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
                  <div className="text-center chevron">
                    <i
                      className={`bi bi-chevron-down ${
                        isScrolledToBottom ? "invisible" : ""
                      }`}
                    />
                  </div>
                  <div className="mt-3">
                    <a href="#" className="text-black text-center">
                      All categories
                    </a>
                  </div>
                </div>
                <div className="col-lg-10">
                  <div className="row right-row">
                    <h2>{props.ItemTitle}</h2>
                    {props.rightItems.map((rItems, idx) => (
                      <div
                        key={idx}
                        className="col-lg-4 my-2  rItems"
                        data-bs-dismiss="modal"
                      >
                        <NavLink
                          to={"/auctioning/details"}
                          className="rItems-inner p-2 rounded text-dark"
                        >
                          {rItems.name}

                          {rItems.number ? (
                            <span className="ms-1">({rItems.number})</span>
                          ) : (
                            ""
                          )}
                          {rItems.event ? (
                            <p className="fw-light">
                              {rItems.event[0].starts} - {rItems.event[0].ends},{" "}
                              {rItems.event[0].year}
                            </p>
                          ) : (
                            ""
                          )}
                        </NavLink>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TempoModal;
