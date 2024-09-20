import { React, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Homepage/Home/Home";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Details from "./pages/Details/Details";

import Login from "./pages/Login/Login";
import SignUp from "./pages/Signup/Signup";
import Profile from "./pages/Profile/Profile";
import Checkout from "./pages/Checkout/Checkout";
import Auctioning from "./pages/Auction/Auctioning";
import Bid from "./pages/Bid/Bid";
import Tempo from "./pages/TemporaryPage/Tempo";
import SubCategory from "./pages/Category/SubCategory";
import ProtectedRoute from "./Contex/ProtectedRoute";
import AuctioningPage from "./pages/Auction/AuctioningPage";
import Product from "./pages/ProductDetails/Products";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="App default-padding mt-5">
        <Routes>
          <Route exact path="/auctioning" element={<Home />} />
          <Route path="/auctioning/details/:id" element={<Details />} />
          <Route path="/auctioning/productDetail" element={<Product />} />

          <Route path="/auctioning/auction/:id" element={<Auctioning />} />
          <Route path="/auctioning/bids/:id" element={<Bid />} />
          <Route path="/auctioning/tempo" element={<Tempo />} />
          <Route
            path="/auctioning/auctioning_page"
            element={<AuctioningPage />}
          />
          <Route path="/auctioning/login" element={<Login />} />
          <Route path="/auctioning/signup" element={<SignUp />} />
          <Route path="/auctioning/subcategory/:id" element={<SubCategory />} />

          {/* protected routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/auctioning/checkout" element={<Checkout />} />

            <Route path="/auctioning/profile" element={<Profile />} />
          </Route>

          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
