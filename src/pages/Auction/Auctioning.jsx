import React from "react";
import { Link } from "react-router-dom";
import "./Auction.css";
import ImageComponent from "./ImageComponent";
import useFetch from "../../useFetch";

import React, { useState } from "react";


const Auctioning = () => {
  const { id } = useParams();

  const BASE_URL = import.meta.env.KCLIENT_BASE_URL;
  const IMAGE_URL = import.meta.env.KCLIENT_IMAGE_URL;


  const url = `${BASE_URL}/users/products/${id}`;

  const query = {
    perPage: '50',
    orderBy: 'desc',
    relationship: 'product_gallaries'
  };

  const { data, isPending, error } = useFetch(url, query);

  alert(JSON.stringify(data))


  return (
    <main className="mb-3">
      {/* <ImageCarousel /> */}

      {error ? (
        <div className="alert alert-danger bg-danger text-light border-0 alert-dismissible fade show" role="alert">
          Check your internet
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      ) : isPending ? (
        <div className="d-flex justify-content-center align-items-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
      ): data && data.data && data.data.product ? (
        <>
         <div className="p-4 p-md-5 rounded">
        <Link to={"/auctioning/productDetail"}>
          <div className="row gx-1">
            <div className="col-lg-6">
              <img
                src={`${IMAGE_URL}/${data.data.product.image}`}
                // src={`${import.meta.env.BASE_URL
                // }/images/graders/grader1.jpg`}

                alt={data.data.product.name}
                className="d-block w-100 selectedImage"
              />
            </div>
            <div className="col-lg-6">
              <div className="row g-1">
                <div className="col-lg-6">
                  <img
                    src={`${import.meta.env.BASE_URL
                      }/images/graders/grader1.jpg`}
                    alt=""
                    className="d-block w-100 selectedImage"
                  />
                </div>
                <div className="col-lg-6">
                  <img
                    src={`${import.meta.env.BASE_URL
                      }/images/graders/grader1.jpg`}
                    alt=""
                    className="d-block w-100 selectedImage"
                  />
                </div>
                <div className="col-lg-6">
                  <img
                    src={`${import.meta.env.BASE_URL
                      }/images/graders/grader1.jpg`}
                    alt=""
                    className="d-block w-100 selectedImage"
                  />
                </div>
                <div className="col-lg-6">
                  <img
                    src={`${import.meta.env.BASE_URL
                      }/images/graders/grader1.jpg`}
                    alt=""
                    className="d-block w-100 selectedImage"
                  />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>

        </>
      ):(
        <p>No data available.</p>

      )}
     


          <div className="row g-5">
            <div className="col-md-7">
              <article className="blog-post">
                <h2 className="blog-post-title">
                  {data.product.name}
                </h2>

                <div className="flex-r">
                  <div className="border-end me-2 p-2">
                    <i className="bi bi-geo-alt"></i>
                    <p className="text-muted">Located</p>
                    <h5>{data.product.city}</h5>
                  </div>
                  <div className="border-end me-2 p-2">
                    <i className="bi bi-alarm"></i>
                    <p className="text-muted">Meter</p>
                    <h5>{data.product.meter} hrs</h5>
                  </div>
                  <div className="border-end me-2 p-2">
                    <i className="bi bi-square"></i>
                    <p className="text-muted">Serial number</p>
                    <h5>{data.product.serial_number}</h5>
                  </div>
                </div>
                <div>
                  <hr />
                  <div className="flex-r">
                    <h4 className="me-5">Features</h4>
                    <div className="ms-5">
                      {data.product.features}
                    </div>
                  </div>
                  <hr />
                  <div className="flex-r">
                    <h4 className="me-5">Notes</h4>
                    <div className="ms-5">
                      <h3 className="fw-light">{data.product.note}</h3>
                    </div>
                  </div>
                  <hr />
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "2rem",
                      marginBottom: "1rem",
                      marginTop: "1rem",
                    }}
                  >
                    {data.product.name}
                  </p>
                </div>
                {/* table component */}
                <div>
                  <table className="table">
                    <tbody>
                      {/* <tr>
                        <td>
                          <strong>In Yard</strong>
                        </td>
                        <td>yes</td>
                      </tr> */}
                      <tr>
                        <td>
                          <strong>Year</strong>
                        </td>
                        <td>{data.product.year}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Manufacturer</strong>
                        </td>
                        <td>{data.product.manufacturer}</td>
                      </tr>
                      {/* <tr>
                        <td>
                          <strong>Modal</strong>
                        </td>
                        <td>Lorem, ipsum dolor.</td>
                      </tr> */}
                      <tr>
                        <td>
                          <strong>Asset Type</strong>
                        </td>
                        <td>{data.product.asset_type}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>VIN</strong>
                        </td>
                        <td>{data.product.serial_number}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* image Component */}
                {/* <ImageComponent  data={data}
                  title="General appearance"
                  images={"5"}
                  description="The Detailed Equipment Information is limited in scope, and
                Ritchie Bros. Auctdolorioneers has not inspected any aspects or
                components of the equipment other than those expressly set forth"
                /> */}

                {/* table component */}
                {/* <TableComponent /> */}
                {data && data.product && data.product.parts.length>0?(
                  data.product.parts.map((part)=>(
                    <>
                     {/* <ImageComponent
                  title={part.name}
                  images={"5"}
                  description={part.description}
                /> */}

{/* <ImageComponent
  title={part.name}
  images={"5"}
  description={part.description}
  data={part.gallery}
/> */}

<ImageComponent
          key={part.id} // Provide a unique key for each component
          title={part.name}
          images={part.gallery.length.toString()} // Pass the number of images as a string
          description={part.description}
          data={part.gallery} // Pass the gallery images for the current part
        />

                    </>
                  ))
                ):(
                  <p>No components available</p>
                )}
                {/* <ImageComponent
                  title="Control station"
                  images={"5"}
                  description="The Detailed Equipment Information is limited in scope, and
                Ritchie Bros. Auctioneers has not inspected any aspects or
                components of the equipment other than those expressly set forth"
                />
                <ImageComponent
                  title="Engine"
                  images={"5"}
                  description="The Detailed Equipment Information is limited in scope, and
                Ritchie Bros. Auctioneers has not inspected any aspects or
                components of the equipment other than those expressly set forth"
                />
                <ImageComponent
                  title="Trailer chassis"
                  images={"6"}
                  description="The Detailed Equipment Information is limited in scope, and
                Ritchie Bros. Auctioneers has not inspected any aspects or
                components of the equipment other than those expressly set forth"
                /> */}

                <div>
                  <h4 className="text-muted">General</h4>
                  <p>
                     {data.product.general}
                  </p>
                  <h4 className="text-muted">Function</h4>
                  <p>
                  {data.product.function}

                  </p>
                  <h4 className="text-muted">Dimensions</h4>
                  <p>
                  {data.product.dimension}

                  </p>
                </div>
              </article>
            </div>

            <div className="col-md-4">
              <div className="position-sticky shadow" style={{ top: "2rem" }}>
                <div className="card">
                  <div className="card-body">
                    <ul
                      className="nav nav-tabs nav-tabs-bordered d-flex"
                      id="borderedTabJustified"
                      role="tablist"
                    >
                      <li className="nav-item flex-fill" role="presentation">
                        <button
                          className="nav-link w-100 active"
                          id="home-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#bordered-justified-home"
                          type="button"
                          role="tab"
                          aria-controls="home"
                          aria-selected="true"
                        >
                          Info Items
                        </button>
                      </li>
                      <li className="nav-item flex-fill" role="presentation">
                        <button
                          className="nav-link w-100 "
                          id="profile-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#bordered-justified-profile"
                          type="button"
                          role="tab"
                          aria-controls="profile"
                          aria-selected="false"
                        >
                          Bids (32 bids)
                        </button>
                      </li>
                    </ul>
                    <div
                      className="tab-content pt-2"
                      id="borderedTabJustifiedContent"
                    >
                      <div
                        className="tab-pane fade show active"
                        id="bordered-justified-home"
                        role="tabpanel"
                        aria-labelledby="home-tab"
                      >
                        <div className="d-flex align-items-center justify-content-between">
                          <small>High Bids</small>
                          <button className="btn rounded-5 border shadow-sm">
                            <i className="bi bi-heart me-2"></i> Watchlist
                          </button>
                        </div>

                        <div >
                        <h1>
                          {data.product.bid_price} <sub>Sh</sub>
  
                        </h1>
                        </div>
                      
                        <Link to={`/auctioning/auctioning_page/${data.product.id}`} className="btn btn-primary w-100">Place bid</Link>
                        <div className="text-center mt-2">
                          <a href="#">Enter auction</a>
                        </div>
                        <p>
                          <i className="bi bi-alarm me-2"></i>Closes: Today
                          <strong> 15:32:00 pm</strong>
                        </p>
                        <p>
                          <i className="bi bi-calendar-day me-2"></i>Timed Auction:
                          Mont, QC, CAN
                        </p>
                        Nesciunt totam et. Consequuntur magnam aliquid eos nulla
                        dolor iure eos quia. Accusantium distinctio omnis et atque
                        fugiat. Itaque doloremque aliquid sint quasi quia distinctio
                        similique. Voluptate nihil recusandae mollitia dolores. Ut
                        laboriosam voluptatum dicta.
                      </div>
                      <div
                        className="tab-pane fade"
                        id="bordered-justified-profile"
                        role="tabpanel"
                        aria-labelledby="profile-tab"
                      >
                        <div className="bids">
                          <p>***89</p>
                          <button className="btn btn-secondary rounded-5">
                            $4,543
                          </button>
                          <p>***89</p>
                          <button className="btn btn-secondary rounded-5">
                            $4,543
                          </button>
                          <p>***89</p>
                          <button className="btn btn-secondary rounded-5">
                            $4,543
                          </button>
                          <p>***89</p>
                          <button className="btn btn-secondary rounded-5">
                            $4,543
                          </button>
                          <p>***89</p>
                          <button className="btn btn-secondary rounded-5">
                            $4,543
                          </button>
                          <p>***89</p>
                          <button className="btn btn-secondary rounded-5">
                            $4,543
                          </button>
                          <p>***89</p>
                          <button className="btn btn-secondary rounded-5">
                            $4,543
                          </button>
                          <p>***89</p>
                          <button className="btn btn-secondary rounded-5">
                            $4,543
                          </button>
                        </div>
                        <div
                          className="d-flex align-items-center justify-content-between pt-5"
                          style={{
                            borderTop: "2px solid black",
                          }}
                        >
                          <p>
                            Bid Up to:
                            <i className="bi bi-info bg-secondary p-1 text-white rounded-circle"></i>
                          </p>
                          <p>
                            <i className="bi bi-alarm me-2"></i>Closes: Today
                            <strong> 15:32:00 pm</strong>
                          </p>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <button className="btn btn-secondary">-</button>
                          <input type="text" />
                          <button className="btn btn-secondary">+</button>
                        </div>
                        <button className="btn btn-primary w-100 mt-3">
                          Place bids
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="row g-5 mt-5 p-3"
            style={{
              background: "#eeedeb",
            }}
          >
            <div className="col-lg-7">
              <h3>Payment & fees</h3>
              <div>
                <ul
                  style={{
                    listStyle: "disc",
                  }}
                >
                  <li className="m-2">
                    This item is subject to <strong>local sales tax</strong>.
                  </li>
                  <li className="m-2">
                    Buyers cannot remove their purchases from the auction site until
                    their invoice is paid in full.
                  </li>
                  <li className="m-2">
                    If Ritchie Bros. can't deliver clear title on a purchase, the
                    buyer is entitled to a full refund of the purchase price.
                  </li>
                  <li className="m-2">
                    Buyers are required to pay certain transaction and documentation
                    fees. Please read this information before you bid.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 ">
              <div className="card h-100">
                <div className="card-body row">
                  <div className="col-lg-7">
                    <h4>Buying a Machine and needs financing?</h4>
                    <button className="btn btn-sm btn-primary">Apply Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="row g-5 mt-5 p-3"
            style={{
              background: "#eeedeb",
            }}
          >
            <div className="col-lg-7">
              <h3>Get shipping estimates</h3>
              <div>
                We've partnered with trusted shipping vendors to make it easy for
                you to find the best transporters at the lowest prices. Request free
                quotes or get instant shipping estimates from our vendor’s websites.
              </div>

              <h3>Coming to pick it up?</h3>
              <div>
                Drivers must bring a copy of the Ritchie Bros. Auctioneers release
                ticket to pick up the item.
              </div>

              <button className="btn btn-primary mt-5">Learn More</button>
            </div>

            <div className="col-md-4">
              <div>
                <div className="card">
                  <div className="card-body">
                    <ul
                      className="nav nav-tabs nav-tabs-bordered d-flex"
                      id="TabJustified"
                      role="tablist"
                    >
                      <li className="nav-item flex-fill" role="presentation">
                        <button
                          className="nav-link w-100 active"
                          id="hometab"
                          data-bs-toggle="tab"
                          data-bs-target="#justified-home"
                          type="button"
                          role="tab"
                          aria-controls="home"
                          aria-selected="true"
                        >
                          Veritread
                        </button>
                      </li>
                      <li className="nav-item flex-fill" role="presentation">
                        <button
                          className="nav-link w-100 "
                          id="profiletab"
                          data-bs-toggle="tab"
                          data-bs-target="#justified-profile"
                          type="button"
                          role="tab"
                          aria-controls="profile"
                          aria-selected="false"
                        >
                          uSip
                        </button>
                      </li>
                    </ul>
                    <div className="tab-content pt-2" id="TabJustifiedContent">
                      <div
                        className="tab-pane fade show active"
                        id="justified-home"
                        role="tabpanel"
                        aria-labelledby="home-tab"
                      >
                        <p>Shipping estimator</p>
                        <small>learn more</small>
                        <hr />
                        <p>
                          Submit your item to VeriTread and receive free,
                          no-obligation freight quotes.
                        </p>
                        <button className="btn btn-sm btn-primary">
                          Get shipping bids
                        </button>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="justified-profile"
                        role="tabpanel"
                        aria-labelledby="profile-tab"
                      >
                        <p>Shipping estimator</p>
                        <small>learn more</small>
                        <hr />
                        <p>
                          Get free, no-obligation freight quotes on shipping. This
                          item is eligible to be shipped via uShip, which is
                          recommended for less-than-truckload (LTL) lots
                        </p>
                        <button className="btn btn-sm btn-primary">
                          Get shipping bids
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </>
      ) : (

        <p>No data available.</p>

      )}
    </main>
  );
};

export default Auctioning;
