import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="container-fluid">
      <div className="min-vh-100 d-flex align-items-start justify-content-center">
        <div className="mx-auto login">
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
              <label htmlFor="name">Username</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Enter Username"
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
            <div className="form-group mt-2">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="confirm-password"
                name="confirm-password"
                placeholder="Confirm password"
              />
            </div>
            <Link
              to={"/auctioning/login"}
              className="btn btn-primary w-100 mt-3"
            >
              Sign Up
            </Link>
          </form>

          <div className="d-flex align-items-center justify-content-between mt-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="remember"
                value="true"
                id="rememberMe"
              />
              <label className="form-check-label" for="rememberMe">
                By Signing Up, You agree to
                <Link to="#" className="ms-2">
                  terms and conditions
                </Link>
              </label>
            </div>
          </div>
          <hr />
          <p className="text-start">
            Have an account? <Link to="/auctioning/login">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
