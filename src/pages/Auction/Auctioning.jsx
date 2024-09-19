import React from "react";
import { Link } from "react-router-dom";
import "./Auction.css";

const Auctioning = () => {
  return (
    <main className="mb-3">
      {/* <ImageCarousel /> */}
      <div className="p-4 p-md-5 rounded">
        <Link to={"/auctioning/productDetail"}>
          <div className="row gx-1">
            <div className="col-lg-6">
              <img
                src={`${import.meta.env.BASE_URL}/images/graders/grader1.jpg`}
                alt="selectedImage"
                className="d-block w-100 selectedImage"
              />
            </div>
            <div className="col-lg-6">
              <div className="row g-1">
                <div className="col-lg-6">
                  <img
                    src={`${
                      import.meta.env.BASE_URL
                    }/images/graders/grader1.jpg`}
                    alt=""
                    className="d-block w-100 selectedImage"
                  />
                </div>
                <div className="col-lg-6">
                  <img
                    src={`${
                      import.meta.env.BASE_URL
                    }/images/graders/grader1.jpg`}
                    alt=""
                    className="d-block w-100 selectedImage"
                  />
                </div>
                <div className="col-lg-6">
                  <img
                    src={`${
                      import.meta.env.BASE_URL
                    }/images/graders/grader1.jpg`}
                    alt=""
                    className="d-block w-100 selectedImage"
                  />
                </div>
                <div className="col-lg-6">
                  <img
                    src={`${
                      import.meta.env.BASE_URL
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

      <div className="row g-5">
        <div className="col-md-8">
          <article className="blog-post">
            <h2 className="blog-post-title">
              2011 Sullair 900HAFDTQ-CA3 900 cfm Mobile Air Compressor
            </h2>

            <div className="flex-r">
              <div className="border-end me-2 p-2">
                <i className="bi bi-geo-alt"></i>
                <p className="text-muted">Located</p>
                <h5>Mont-Saint-Hilaire, QC, CAN</h5>
              </div>
              <div className="border-end me-2 p-2">
                <i className="bi bi-alarm"></i>
                <p className="text-muted">Meter</p>
                <h5>11,074 hrs</h5>
              </div>
              <div className="border-end me-2 p-2">
                <i className="bi bi-square"></i>
                <p className="text-muted">Serial number</p>
                <h5>201101080022</h5>
              </div>
            </div>
            <hr />
            <p>
              This is some additional paragraph placeholder content. It has been
              written to fill the available space and show how a longer snippet
              of text affects the surrounding content.
            </p>
            <h2>Blockquotes</h2>
            <p>This is an example blockquote in action:</p>
            <blockquote className="blockquote">
              <p>Quoted text goes here.</p>
            </blockquote>
            <p>
              This is some additional paragraph placeholder content. It has been
              written to fill the available space and show how a longer snippet
              of text affects the surrounding content.
            </p>
            <h3>Example lists</h3>
            <ul>
              <li>First list item</li>
              <li>Second list item with a longer description</li>
              <li>Third list item to close it out</li>
            </ul>
            <ol>
              <li>First list item</li>
              <li>Second list item with a longer description</li>
              <li>Third list item to close it out</li>
            </ol>
            <dl>
              <dt>HyperText Markup Language (HTML)</dt>
              <dd>
                The language used to describe and define the content of a Web
                page
              </dd>
              <dt>Cascading Style Sheets (CSS)</dt>
              <dd>Used to describe the appearance of Web content</dd>
              <dt>JavaScript (JS)</dt>
              <dd>
                The programming language used to build advanced Web sites and
                applications
              </dd>
            </dl>
            <h2>Inline HTML elements</h2>
            <p>
              HTML defines a long list of available inline tags, a complete list
              of which can be found on the{" "}
              <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element">
                Mozilla Developer Network
              </a>
              .
            </p>
          </article>

          <nav className="blog-pagination" aria-label="Pagination">
            <a className="btn btn-outline-primary" href="#">
              Older
            </a>
            <a
              className="btn btn-outline-secondary disabled"
              href="#"
              tabIndex="-1"
              aria-disabled="true"
            >
              Newer
            </a>
          </nav>
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
                    <h1>
                      $7,750 <sub>CAD</sub>
                    </h1>
                    <button className="btn btn-primary w-100">Place bid</button>
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
    </main>
  );
};

export default Auctioning;
