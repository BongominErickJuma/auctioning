import React from "react";
import "./Navbar.css";
import navbar from "../../js/Navbar/navbar";

const Navbar = () => {
  return (
    <div className="navbar-links shadow default-padding py-4 w-100">
      <div className="topnav flex-r justify-content-between">
        <a href="#home">
          rb
          <span className="ms-2 text-black fw-bold">RITCHIE BROS.</span>
        </a>
        <div className="search-bar w-50">
          <form class="row row-cols-lg-auto g-3 align-items-center w-100">
            <div class="col-12 w-100">
              <div class="input-group w-100">
                <input
                  type="text"
                  class="form-control"
                  id="inlineFormInputGroupUsername"
                />
                <div class="input-group-text">
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
          <div key={idx} className="mx-2 p-1 navbar-item rounded-2 text-center">
            <span>{item.title}</span>
            <i
              className={item.chevron ? "bi bi-chevron-down mx-2" : "mx-2"}
            ></i>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
