import React, { useCallback, useEffect, useState } from "react";
import "./Navbar.css";
import navbar from "../../js/Navbar/navbar";

const Navbar = () => {
  const [leftItems, setLeftItems] = useState([]);
  const [rightItems, setRightItems] = useState([]);

  const fetchLeftItems = useCallback(async (item) => {
    try {
      const res = await fetch(`${import.meta.env.BASE_URL}/data/${item}.json`);
      const data = await res.json();
      setLeftItems(data.data);
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
      setRightItems(data.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const callItems = (item) => {
    fetchLeftItems(item);
    fetchRightItems(item);
  };
  return (
    <div className="navbar-links shadow default-padding py-4 w-100">
      <div className="topnav flex-r justify-content-between">
        <a href="#home">
          rb
          <span className="ms-2 text-black fw-bold">RITCHIE BROS.</span>
        </a>
        <div className="search-bar w-50">
          <form className="row row-cols-lg-auto g-3 align-items-center w-100">
            <div className="col-12 w-100">
              <div className="input-group w-100">
                <input
                  type="text"
                  className="form-control"
                  id="inlineFormInputGroupUsername"
                />
                <div className="input-group-text">
                  <i className="bi bi-list fs-6"></i>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="buttons">
          <button className="btn btn-sm btn-primary">Sign in</button>
          <button className="btn btn-sm btn-outline-primary ms-2">
            Create an account
          </button>
        </div>
      </div>
      <hr />
      <div className="flex-r">
        {navbar.map((item, idx) => (
          <div
            key={idx}
            className="mx-2 p-1 navbar-item rounded-2 text-center"
            data-bs-toggle={item.call ? "modal" : ""}
            data-bs-target="#navModal"
            onClick={() => (item.call ? callItems(item.call) : "")}
          >
            <span>{item.title}</span>
            <i
              className={item.chevron ? "bi bi-chevron-down mx-2" : "mx-2"}
            ></i>
          </div>
        ))}
      </div>
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
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-3 border-end">
                    <ul>
                      {leftItems.map((lItems, idx) => (
                        <li key={idx} className="m-2 p-2 w-100 lItems">
                          {lItems}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-lg-9">
                    <div className="row">
                      {rightItems.map((rItems, idx) => (
                        <div key={idx} className="col-lg-4 my-2 rItems">
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
    </div>
  );
};

export default Navbar;
