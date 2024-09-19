import { React, useEffect, useState } from "react";
// import linkItems from "../../../js/Homepage/hero";
import heroimg from "/images/graders/grader4.jpg";
import smallImage from "/images/graders/grader1.jpg";
// import axios from 'axios';
import useFetch from "../../../useFetch";

import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  const BASE_URL = import.meta.env.KCLIENT_BASE_URL;

  const url = `${BASE_URL}/users/get-all/category`;
  const query = {
    perPage: "50",
    orderBy: "desc",
  };

  const { data, isPending, error } = useFetch(url, query);

  return (
    <div className="hero mt-5">
      <div className="row gx-2">
        <div className="col-lg-3">
          <div className="shadow-sm">
            <ul className="p-2">
              {error ? (
                <tr>
                  <div
                    className="alert alert-danger bg-danger text-light border-0 alert-dismissible fade show"
                    role="alert"
                  >
                    Check your internet
                    <button
                      type="button"
                      className="btn-close btn-close-white"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    ></button>
                  </div>
                </tr>
              ) : data ? (
                data.results.data.map((category, index) => (
                  <tr key={category.id}>
                    <Link to={`/auctioning/subcategory/${category.id}`}>
                      <td>{category.name}</td>
                    </Link>
                  </tr>
                ))
              ) : (
                <div className=" justify-content-center align-items-center">
                  <div className="spinner-border  " role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              )}
            </ul>
          </div>
        </div>
        <div className="col-lg-9">
          <div className="row">
            <div className="col-lg-9">
              <div className="image-container">
                <img src={heroimg} alt="grader" className="d-block w-100" />
                <div className="word-container">
                  <h1>Where the world buys & sells heavy equipments</h1>
                </div>
              </div>
            </div>
            <div className="col-lg-3 p-0 ">
              <div className="flex-c h-100">
                <div className="image-container small-image">
                  <img
                    src={smallImage}
                    alt="small grader"
                    className="d-block w-100 h-100"
                  />
                  <div className="advert-container flex-c">
                    <div>
                      <h1 className="mb-1">SUPER</h1>
                      <p className="spacing">SEPTEMBER</p>
                    </div>
                    <div className="flex-r justify-content-between w-100 px-1">
                      <blockquote className="block1 mt-2">
                        <span className="span-rb">rb</span>RITCHIE BROS.
                      </blockquote>
                      <button className="link-btn">rbauction.com/sell</button>
                    </div>
                  </div>
                </div>
                <div className="image-container small-image">
                  <img
                    src={smallImage}
                    alt="small grader"
                    className="d-block w-100 h-100"
                  />
                  <div className="advert-container flex-c">
                    <div>
                      <h1>LIEBHERR</h1>
                      <p>Liebherr machines directly from the manufacturer</p>
                    </div>
                    <div className="flex-r w-100 justify-content-between px-1">
                      <blockquote className="mt-2">Marketplace</blockquote>
                      <button className="link-btn">view equipments</button>
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

export default Hero;
