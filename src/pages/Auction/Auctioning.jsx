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
          <h3 className="pb-4 mb-4 fst-italic border-bottom">
            From the Firehose
          </h3>

          <article className="blog-post">
            <h2 className="blog-post-title">Sample blog post</h2>
            <p className="blog-post-meta">
              January 1, 2021 by <a href="#">Mark</a>
            </p>
            <p>
              This blog post shows a few different types of content that are
              supported and styled with Bootstrap. Basic typography, lists,
              tables, images, code, and more are all supported as expected.
            </p>
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
            <div className="p-4 mb-3 bg-light rounded">
              <h4 className="fst-italic">About</h4>
              <p className="mb-0">
                Customize this section to tell your visitors a little bit about
                your publication, writers, content, or something else entirely.
              </p>
            </div>

            <div className="p-4">
              <h4 className="fst-italic">Archives</h4>
              <ol className="list-unstyled mb-0">
                <li>
                  <a href="#">March 2021</a>
                </li>
                <li>
                  <a href="#">February 2021</a>
                </li>
                <li>
                  <a href="#">January 2021</a>
                </li>
                {/* Additional list items */}
              </ol>
            </div>

            <div className="p-4">
              <h4 className="fst-italic">Elsewhere</h4>
              <ol className="list-unstyled">
                <li>
                  <a href="#">GitHub</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">Facebook</a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Auctioning;
