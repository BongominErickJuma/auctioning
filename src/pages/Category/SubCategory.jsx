import React from "react";
import useFetch from "../../useFetch";
import { Link, useParams } from "react-router-dom";

const SubCategory = () => {
  const BASE_URL = import.meta.env.KCLIENT_BASE_URL;
  const IMAGE_URL = import.meta.env.KCLIENT_IMAGE_URL;

  const { id } = useParams();
  
  const url = `${BASE_URL}/users/get/category/${id}`;
  const query = {
    perPage: '50',
    orderBy: 'desc',
    relationship: 'sub_categories'
  };

  // Fetch data from the API
  const { data, isPending, error } = useFetch(url, query);

  // Check data structure with alert (for debugging)
  // console.log(data);

  return (
    <section className="mb-3">
      <section className="">
        <center><b><h1>Subcategories</h1></b></center>
        <div className="row">

        {error ? (
          <div className="alert alert-danger bg-danger text-light border-0 alert-dismissible fade show" role="alert">
            Check your internet
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        ) : isPending ? (
          <div className='justify-content-center align-items-center'>
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : data && data.data && data.data.results && data.data.results.data.length > 0 ? (
          data.data.results.data.map((category) => (
            
            
            <div className="col-lg-3 rounded mb-4 mb-lg-0" key={category.id}>
              <div className="bg-image hover-overlay ripple shadow-1-strong rounded" data-ripple-color="light">
              <Link to={`/auctioning/auction/${category.id }`}>

                <img
                  src={`${IMAGE_URL}/${category.image}`}  // Use category.image here instead of item.image
                  className="w-100 rounded-3"
                  alt={category.name}
                />
                <a href="#!" data-mdb-modal-init data-mdb-target="#exampleModal1">
                  <div
                    className="mask"
                    style={{
                      backgroundColor: "rgba(251, 251, 251, 0.2)",
                    }}
                  ></div>
                </a>

                </Link>

              </div>
              <b>{category.name}</b>
            </div>
          ))
        ) : (
          <div className="justify-content-center align-items-center">
            <p>No subcategories available.</p>
          </div>
        )}
        
        </div>
      </section>
    </section>
  );
};

export default SubCategory;
