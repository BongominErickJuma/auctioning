import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container-fluid">
      <div className="min-vh-100 d-flex align-items-start justify-content-center ">
        <div className="mx-auto login">
          <h4>Please Login to your Account</h4>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter Email"
              />
            </div>
            <div className="form-group mt-2">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Enter password"
              />
            </div>
            <Link to={"/auctionSite"} className="btn btn-primary w-100 mt-3">
              Sign In
            </Link>
          </form>

          <div class="d-flex align-items-center justify-content-between mt-3">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                name="remember"
                value="true"
                id="rememberMe"
              />
              <label class="form-check-label" for="rememberMe">
                Remember me
              </label>
            </div>

            <div class="form-check">
              <a class="forgot-password text-end" href="#">
                forgot password
              </a>
            </div>
          </div>
          <hr />
          <p className="text-start">
            Don't have an account? <Link to="/auctionSite/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
