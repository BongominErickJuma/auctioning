import React from "react";
import { Link } from "react-router-dom";
import detail from "../../../js/Details/details.js";

import useFetch from "../../../useFetch";
import { useParams } from "react-router-dom";

const ListTypes = () => {

  const BASE_URL = import.meta.env.KCLIENT_BASE_URL;
  const IMAGE_URL = import.meta.env.KCLIENT_IMAGE_URL;

  const { id } = useParams();

  const url = `${BASE_URL}/users/get/SubCategory/${id}`;
  const query = {
    perPage: '50',
    orderBy: 'asc',
    relationship: 'products'
  };

  // Fetch data from the API
  const { data, isPending, error } = useFetch(url, query);

  // alert(JSON.stringify(data))
  return (
    <>
      <div className="mb-3">
        <div className="row gy-3">

          {error ? (
            <div className="alert alert-danger bg-danger text-light border-0 alert-dismissible fade show" role="alert">
              Check your internet {error}
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
          ) : isPending ? (
            <div className='justify-content-center align-items-center'>
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : data && data.data && data.data.results && data.data.results.data.length > 0 ? (
            data.data.results.data.map((det, idx) => (

              <div className="col-lg-4 " key={idx}>
                <Link to={`/auctioning/auction/${det.id}`}>
                  <div className="card">
                    <img src={`${IMAGE_URL}/${det.image}`} alt="image" />
                    <div className="card-body text-start">
                      <button className="btn btn-sm bg-dark text-white rounded-5 mb-3 py-0">
                        lot {det.lot_number}
                      </button>
                      <h5 className="card-title">{det.name}</h5>
                      <p className="card-text mb-0">
                        {" "}
                        <i className="bi bi-geo-alt me-2">{det.city}, {det.country}</i>

                      </p>
                      <p className="card-text mt-0 mb-3">

                        <i className="bi bi-alarm me-2"></i>Usage: {det.meter}
                      </p>
                      <hr />
                   

                      <p className="mb-0">
                        {det.features}
                      </p>

                      <div className="text-end mt-5">
                        <h4 className="text-muted">Timed Auction</h4>
                        <p>{det.date} (day 2 of 3)</p>
                      </div>
                      <a
                        href="#!"
                        data-mdb-ripple-init
                        className="btn btn-primary mt-3 w-100"
                      >
                        <i className="bi bi-heart me-2"></i>Add to Watchlist
                      </a>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <div className="justify-content-center align-items-center">
              <p>No Product available.</p>
            </div>
          )}




        </div>
      </div>
    </>
  );
};

export default ListTypes;
