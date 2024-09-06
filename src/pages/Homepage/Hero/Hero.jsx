import React from "react";
import linkItems from "../../../js/Homepage/hero";
import heroimg from "/images/graders/grader4.jpg";
import smallImage from "/images/graders/grader1.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero mt-5">
      <div className="row gx-2">
        <div className="col-lg-3">
          <div className="shadow-sm">
            <ul className="p-2">
              {linkItems.map((lnk, idx) => (
                <li key={idx}>{lnk}</li>
              ))}
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
