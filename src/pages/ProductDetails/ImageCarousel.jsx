import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ImageCarousel.css";
import { Link } from "react-router-dom";

const ImageCarousel = () => {
  useEffect(() => {
    const swiper = new Swiper(".init-swiper", {
      loop: true,
      speed: 600,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false, // Keep autoplay after interaction
      },
      slidesPerView: "auto",
      centeredSlides: true,
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, []);

  return (
    <section id="slider" className="slider section dark-background">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <Link to={"/auctioning/bids"}>
          <div className="swiper init-swiper">
            <div className="swiper-wrapper">
              <div
                className="swiper-slide"
                style={{
                  backgroundImage: `url(${
                    import.meta.env.BASE_URL
                  }/images/graders/grader1.jpg)`,
                }}
              >
                <div className="content d-none">
                  <h2>
                    <a href="single-post.html">
                      The Best Homemade Masks for Face (keep the Pimples Away)
                    </a>
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quidem neque est mollitia! Beatae minima assumenda repellat
                    harum vero, officiis ipsam magnam obcaecati cumque maxime
                    inventore repudiandae quidem necessitatibus rem atque.
                  </p>
                </div>
              </div>

              <div
                className="swiper-slide"
                style={{
                  backgroundImage: `url(${
                    import.meta.env.BASE_URL
                  }/images/graders/grader2.jpg)`,
                }}
              >
                <div className="content d-none">
                  <h2>
                    <a href="single-post.html">
                      17 Pictures of Medium Length Hair in Layers That Will
                      Inspire Your New Haircut
                    </a>
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quidem neque est mollitia! Beatae minima assumenda repellat
                    harum vero, officiis ipsam magnam obcaecati cumque maxime
                    inventore repudiandae quidem necessitatibus rem atque.
                  </p>
                </div>
              </div>

              <div
                className="swiper-slide"
                style={{
                  backgroundImage: `url(${
                    import.meta.env.BASE_URL
                  }/images/graders/grader3.jpg)`,
                }}
              >
                <div className="content d-none">
                  <h2>
                    <a href="single-post.html">
                      13 Amazing Poems from Shel Silverstein with Valuable Life
                      Lessons
                    </a>
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quidem neque est mollitia! Beatae minima assumenda repellat
                    harum vero, officiis ipsam magnam obcaecati cumque maxime
                    inventore repudiandae quidem necessitatibus rem atque.
                  </p>
                </div>
              </div>

              <div
                className="swiper-slide"
                style={{
                  backgroundImage: `url(${
                    import.meta.env.BASE_URL
                  }/images/graders/grader4.jpg)`,
                }}
              >
                <div className="content d-none">
                  <h2>
                    <a href="single-post.html">
                      9 Half-up/half-down Hairstyles for Long and Medium Hair
                    </a>
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quidem neque est mollitia! Beatae minima assumenda repellat
                    harum vero, officiis ipsam magnam obcaecati cumque maxime
                    inventore repudiandae quidem necessitatibus rem atque.
                  </p>
                </div>
              </div>
            </div>

            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>

            <div className="swiper-pagination"></div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default ImageCarousel;
