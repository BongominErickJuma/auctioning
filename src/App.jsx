import React from "react";
import Home from "./pages/Homepage/Home/Home";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
const App = () => {
  return (
    <div>
      <Navbar />
      <div className="App default-padding mt-5">
        <Home />
      </div>
      <Footer />
    </div>
  );
};

export default App;
