import React from "react";
import ItemsList from "../../../js/Homepage/list";
import "./Items.css";
import useFetch from '../../../useFetch';

const Items = () => {

  const BASE_URL = import.meta.env.KCLIENT_BASE_URL;

  const IMAGE_URL = import.meta.env.KCLIENT_IMAGE_URL;

// alert(IMAGE_URL)
  const url = `${BASE_URL}/users/get-all/Auction`;
  const query = {
    perPage: '50',
    orderBy: 'desc',
  };

  const { data, isPending, error } = useFetch(url, query);

  // alert(JSON.stringify(IMAGE_URL))
  return (
    <div className="items my-3">
      <div className="flex-r justify-content-between mb-3">
        <h3>Featured Items in upcoming auctions</h3>
        <button className="btn btn-sm btn-outline-primary">
          View All Auctions
        </button>
      </div>
      {error ? (
        <tr>
          <div class="alert alert-danger bg-danger text-light border-0 alert-dismissible fade show" role="alert">
            Check your internet
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>

        </tr>
      ) : data ?


        data.results.data.map((item, idx) => (
          <div className="card shadow-sm border-0 mt-3" key={idx}>
            <div className="row">
              <div className="col-lg-5">
                <div className="p-3">
                  <p className="mb-0">
                    <i className={10}></i>
                    <b className="mx-2">{item.open_time}</b>
                    {item.bid ? (
                      <b className="text-primary">Accepting BId</b>
                    ) : (
                      <span></span>
                    )}
                  </p>
                  <h3 className="my-0">{item.name}</h3>
                  <p className="mb-0">
                    Item's located in {item.location}
                  </p>
                  <p className="fw-light mb-0">
                    Participate:
                    {/* {item.found.map((fd, idx) => ( */}
                    <span className="me-1">
                      <i
                        className={
                          item.site === "online"
                            ? "bi bi-phone"
                            : "bi bi-person-walking"
                        }
                      ></i>
                      {item.site}
                    </span>
                    {/* ))} */}
                  </p>
                  <p className="fw-light mt-0">
                    Format:
                    <i
                      className={
                        item.format === "timed auction"
                          ? "bi bi-clock mx-1"
                          : "bi bi-mic mx-1"
                      }
                    ></i>
                    {item.format}
                  </p>
                  <button className="btn btn-sm btn-primary">
                    Register to bid online
                  </button>
                  {item.bid ? (
                    <button className="btn btn-sm btn-outline-primary mx-2">
                      Enter auction
                    </button>
                  ) : (
                    <span className="mx-2"></span>
                  )}

                  <a href="#">see all 345 items</a>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="row gx-2 h-100">
                  {/* {item.images.map((img, imgIdx) => (
                  <div key={imgIdx} className="col-lg-4 img-container">
                    <img src={img} alt="tractor Image" />
                    <button className="img-btn rounded-5">112 tractors</button>
                  </div>
                ))} */}

                  <div className="col-lg-4 img-container">
                    <img src={`${IMAGE_URL}/${item.image1}`} alt={item.name} />
                    <button className="img-btn rounded-5">112 tractors</button>
                  </div>


                  <div className="col-lg-4 img-container">
                    <img src={`${IMAGE_URL}/${item.image2}`} alt={item.name} />
                    <button className="img-btn rounded-5">112 tractors</button>
                  </div>


                  <div className="col-lg-4 img-container">
                    <img src={`${IMAGE_URL}/${item.image3}`} alt={item.name} />
                    <button className="img-btn rounded-5">112 tractors</button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        ))


        : (

          <div className=' justify-content-center align-items-center'>
            <div class="spinner-border  " role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>


        )}
    </div>
  );
};

export default Items;
