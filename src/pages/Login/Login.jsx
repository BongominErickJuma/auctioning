import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { AppContext } from "../../Contex/AppContext";
import { Link } from "react-router-dom";
import usePost from "../../usePost";

const Login = () => {
  const { token, setToken } = useContext(AppContext);

  const BASE_URL = import.meta.env.KCLIENT_BASE_URL;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(null);
  const [login, setLogin] = useState("login");
  const navigate = useNavigate();

  // Using the custom hook for POST request

  const { dataRes, isPostPending, err, postData } = usePost(
    `${BASE_URL}/loginUser `,
    true
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a FormData object
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    postData(formData);
  };

  // Navigate after successful submission
  if (dataRes && !isPostPending && !err) {
    // alert(dataRes)
    localStorage.setItem("access_token", dataRes.access_token);
    localStorage.setItem("loggedIn", true);

    // alert(JSON.stringify(dataRes.access_token))
    setToken(dataRes.access_token);

    navigate(-1);
  }

  return (
    <div className="container-fluid">
      <div className="min-vh-100 d-flex align-items-start justify-content-center ">
        <div className="mx-auto login">
          <h4>Please Login to your Account</h4>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              {err && (
                <div className="alert alert-danger mt-2" role="alert">
                  Incorect username or password
                </div>
              )}
            </div>{" "}
            <br />
            <button className="btn btn-primary w-100" type="submit">
              {isPostPending
                ? isPostPending && (
                    <div className="spinner-border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  )
                : login}
            </button>
          </form>

          <div className="d-flex align-items-center justify-content-between mt-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="remember"
                id="rememberMe"
              />
              <label className="form-check-label" for="rememberMe">
                Remember me
              </label>
            </div>

            <div className="form-check">
              <a className="forgot-password text-end" href="#">
                forgot password
              </a>
            </div>
          </div>
          <hr />
          <p className="text-start">
            Don't have an account? <Link to="/auctioning/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
