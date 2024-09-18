import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import usePost from "../../usePost";

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const [login, setLogin] = useState('Sign Up');
  const navigate = useNavigate();


  const BASE_URL = import.meta.env.KCLIENT_BASE_URL;
  const { dataRes, isPostPending, err, postData } = usePost(`${BASE_URL}/users/post-all/user`, true);

  // Clear error on password or confirm password change
  useEffect(() => {
    if (password !== confirmPassword) {
      setError('Passwords do not match!');
    } else {
      setError('');
    }
  }, [password, confirmPassword]);

  

  const handleSubmit = (e) => {
    e.preventDefault();

    // If passwords do not match, show error and stop submission
    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    // Clear error (if any) and submit form
    setError('');

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);

    postData(formData);  // Submit data
  };

  // Navigate after successful submission
  if (dataRes && !isPostPending && !err) {
    navigate("/auctioning/login");
  }

  return (
    <div className="container-fluid">
      <div className="min-vh-100 d-flex align-items-start justify-content-center">
        <div className="mx-auto login">
          <form onSubmit={handleSubmit}>
          {err && (
              <div className="alert alert-danger mt-2" role="alert">
                Email already registered
              </div>
            )}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
                required
              />
            </div>
            <div className="form-group mt-2">
              <label htmlFor="name">Fullname</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Username"
                required
              />
            </div>
            <div className="form-group mt-2">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
              />
            </div>

            <div className="form-group mt-2">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm password"
                required
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="alert alert-danger mt-2" role="alert">
                {error}
              </div>
            )}

            <button className="btn btn-primary w-100 mt-3" type="submit" disabled={isPostPending}>
              {isPostPending ? (
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                login
              )}
            </button>
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
              <label className="form-check-label" htmlFor="rememberMe">
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
