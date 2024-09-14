import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Homepage/Home/Home";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Details from "./pages/Details/Details";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Signup/Signup";
import Profile from "./pages/Profile/Profile";
import Checkout from "./pages/Checkout/Checkout";
const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="App default-padding mt-5">
        <Routes>
          <Route exact path="/auctionSite" element={<Home />} />
          <Route path="/auctionSite/details" element={<Details />} />
          <Route
            path="/auctionSite/productDetail"
            element={<ProductDetails />}
          />
          <Route path="/auctionSite/profile" element={<Profile />} />
          <Route path="/auctionSite/checkout" element={<Checkout />} />
          <Route path="/auctionSite/login" element={<Login />} />
          <Route path="/auctionSite/signup" element={<SignUp />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
