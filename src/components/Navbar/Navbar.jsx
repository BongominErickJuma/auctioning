import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import navbar from "../../js/Navbar/navbar";
import NavbarModal from "./NavbarModal";

const Navbar = () => {
  const [leftItems, setLeftItems] = useState([]);
  const [rightItems, setRightItems] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [rightTitle, setRightTitle] = useState("");

  const fetchLeftItems = useCallback(async (item) => {
    try {
      const res = await fetch(`${import.meta.env.BASE_URL}/data/${item}.json`);
      const data = await res.json();
      const leftItems = data.data;
      setRightTitle(leftItems[0].name);
      setLeftItems(leftItems);
    } catch (err) {
      console.log(err);
    }
  }, []);
  const fetchRightItems = useCallback(async (item) => {
    const itemLinks = `${item}Links`;
    try {
      const res = await fetch(
        `${import.meta.env.BASE_URL}/data/${itemLinks}.json`
      );
      const data = await res.json();

      const randomNum = Math.floor(Math.random() * 50) + 1;
      const selectedItems = data.data.slice(0, randomNum);
      setRightItems(selectedItems);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleFetchLink = (item) => {
    fetchRightItems(item);
  };

  const handleActiveLinks = (index) => {
    setActiveIndex(index);
    setRightTitle(leftItems[index].name);
  };

  const callItems = (item) => {
    fetchLeftItems(item);
    fetchRightItems(item);
  };
  return (
    <div className="navbar-links shadow default-padding py-4 w-100">
      <div className="topnav flex-r justify-content-between">
        <Link
          to="/auctioning"
          className="fw-bold fs-3 font-italic"
          style={{
            width: "150px",
          }}
        >
          <img
            class="d-block w-100"
            src="https://armstrongug.com/wp-content/uploads/2023/10/Limited-4-e1697370039849.png"
            alt="Limited (4)"
          />
        </Link>
        <div className="search-bar w-50">
          <form className="row row-cols-lg-auto g-3 align-items-center w-100">
            <div className="col-12 w-100">
              <div className="input-group w-100">
                <input
                  type="text"
                  placeholder="search for vheicles, Auctions"
                  className="form-control"
                  id="inlineFormInputGroupUsername"
                />
                <div className="input-group-text">
                  <i className="bi bi-filter fs-6"></i>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="buttons">
          <Link to={"/auctioning/login"} className="btn btn-primary">
            Sign in
          </Link>
          <Link
            to={"/auctioning/signup"}
            className="btn btn-outline-primary ms-2"
          >
            Create an account
          </Link>
        </div>
      </div>
      <hr />
      <div className="flex-r bg-dark ">
        {navbar.map((item, idx) => (
          <Link
            key={idx}
            to={`${item.call ? "#" : item.url}`}
            className="mx-2 navbar-item rounded-2 text-center text-white p-2"
            data-bs-toggle={item.call ? "modal" : ""}
            data-bs-target="#navModal"
            onClick={() => (item.call ? callItems(item.call) : "")}
          >
            <i className={item.icon ? `${item.icon} mx-2 fs-6` : "mx-2"}></i>
            <span>{item.title}</span>
            <i
              className={item.chevron ? "bi bi-chevron-down mx-2" : "mx-2"}
            ></i>
          </Link>
        ))}
      </div>
      <NavbarModal
        leftItems={leftItems}
        rightItems={rightItems}
        handleFetchLink={handleFetchLink}
        handleActiveLinks={handleActiveLinks}
        activeIndex={activeIndex}
        ItemTitle={rightTitle}
      />
    </div>
  );
};

export default Navbar;
