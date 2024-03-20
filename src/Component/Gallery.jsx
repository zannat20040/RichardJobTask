import React, { useEffect } from "react";
import gallery1 from "../assets/images/gallery-1.jpg"
import gallery2 from "../assets/images/gallery-2.jpg"
import gallery3 from "../assets/images/gallery-3.jpg"
import gallery4 from "../assets/images/gallery-4.jpg"
import gallery5 from "../assets/images/gallery-5.jpg"
import gallery6 from "../assets/images/gallery-6.jpg"
import gallery7 from "../assets/images/gallery-7.jpg"
import gallery8 from "../assets/images/gallery-8.jpg"
import arrowFRW from "../assets/images/arrow-forward.svg"
import scroll from "../assets/images/scroll-down.svg"
import shape from "../assets/images/gallery-shape.svg"

const Gallery = () => {



  return (
    <section className="section gallery" id="gallery">
      <div className="container ">
        <ul className="gallery-list ">
          <li className="gallery-item" data-reveal>
            <div className="gallery-card">
              <figure
                className="card-banner img-holder has-before"
                // style={inlineStyles}
              >
                <img
                  src={gallery1}
                  width="450"
                  height="625"
                  loading="lazy"
                  alt="The Drunken"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <h3 className="h6">
                  <a href="#" className="card-title">
                    The Drunken
                  </a>
                </h3>

                <span className="card-tag">Food, Event</span>
              </div>

              <a href="#" className="btn-icon">
                <img
                  src={arrowFRW}
                  width="43"
                  height="20"
                  loading="lazy"
                  alt="arrow-forward icon"
                />
              </a>
            </div>

            <div className="gallery-card">
              <figure
                className="card-banner img-holder has-before"
                // style={inlineStyles}
              >
                <img
                  src={gallery2}
                  width="450"
                  height="625"
                  loading="lazy"
                  alt="Lettuce Entertain"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <h3 className="h6">
                  <a href="#" className="card-title">
                    Lettuce Entertain
                  </a>
                </h3>

                <span className="card-tag">Landscape</span>
              </div>

              <a href="#" className="btn-icon">
                <img
                  src={arrowFRW}
                  width="43"
                  height="20"
                  loading="lazy"
                  alt="arrow-forward icon"
                />
              </a>
            </div>
          </li>

          <li className="gallery-item" data-reveal>
            <div className="gallery-card">
              <figure
                className="card-banner img-holder has-before"
                // style={inlineStyles}
              >
                <img
                  src={gallery3}
                  width="450"
                  height="625"
                  loading="lazy"
                  alt="Leaping Lizard"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <h3 className="h6">
                  <a href="#" className="card-title">
                    Leaping Lizard
                  </a>
                </h3>

                <span className="card-tag">Model, Fashion</span>
              </div>

              <a href="#" className="btn-icon">
                <img
                  src={arrowFRW}
                  width="43"
                  height="20"
                  loading="lazy"
                  alt="arrow-forward icon"
                />
              </a>
            </div>

            <div className="gallery-card">
              <figure
                className="card-banner img-holder has-before"
                // style={inlineStyles}
              >
                <img
                  src={gallery4}
                  width="450"
                  height="625"
                  loading="lazy"
                  alt="Juan More Taco"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <h3 className="h6">
                  <a href="#" className="card-title">
                    Juan More Taco
                  </a>
                </h3>

                <span className="card-tag">Architecture, Event</span>
              </div>

              <a href="#" className="btn-icon">
                <img
                  src={arrowFRW}
                  width="43"
                  height="20"
                  loading="lazy"
                  alt="arrow-forward icon"
                />
              </a>
            </div>
          </li>

          <li className="gallery-item" data-reveal>
            <div className="gallery-card">
              <figure
                className="card-banner img-holder has-before"
                // style={inlineStyles}
              >
                <img
                  src={gallery5}
                  width="450"
                  height="625"
                  loading="lazy"
                  alt="Goldilox Bagels"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <h3 className="h6">
                  <a href="#" className="card-title">
                    Goldilox Bagels
                  </a>
                </h3>

                <span className="card-tag">People, Film</span>
              </div>

              <a href="#" className="btn-icon">
                <img
                  src={arrowFRW}
                  width="43"
                  height="20"
                  loading="lazy"
                  alt="arrow-forward icon"
                />
              </a>
            </div>

            <div className="gallery-card">
              <figure
                className="card-banner img-holder has-before"
                // style={inlineStyles}
              >
                <img
                  src={gallery6}
                  width="450"
                  height="625"
                  loading="lazy"
                  alt="Cookie Monstah"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <h3 className="h6">
                  <a href="#" className="card-title">
                    Cookie Monstah
                  </a>
                </h3>

                <span className="card-tag">Wedding, Event</span>
              </div>

              <a href="#" className="btn-icon">
                <img
                  src={arrowFRW}
                  width="43"
                  height="20"
                  loading="lazy"
                  alt="arrow-forward icon"
                />
              </a>
            </div>
          </li>

          <li className="gallery-item" data-reveal>
            <div className="gallery-card">
              <figure
                className="card-banner img-holder has-before"
                // style={inlineStyles}
              >
                <img
                  src={gallery7}
                  width="450"
                  height="625"
                  loading="lazy"
                  alt="Divine Pastabilities"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <h3 className="h6">
                  <a href="#" className="card-title">
                    Divine Pastabilities
                  </a>
                </h3>

                <span className="card-tag">Wedding, Model</span>
              </div>

              <a href="#" className="btn-icon">
                <img
                  src={arrowFRW}
                  width="43"
                  height="20"
                  loading="lazy"
                  alt="arrow-forward icon"
                />
              </a>
            </div>

            <div className="gallery-card">
              <figure
                className="card-banner img-holder has-before"
                // style={inlineStyles}
              >
                <img
                  src={gallery8}
                  width="450"
                  height="625"
                  loading="lazy"
                  alt="The Lockhart Bar"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <h3 className="h6">
                  <a href="#" className="card-title">
                    The Lockhart Bar
                  </a>
                </h3>

                <span className="card-tag">Health & Wellnes</span>
              </div>

              <a href="#" className="btn-icon">
                <img
                  src={arrowFRW}
                  width="43"
                  height="20"
                  loading="lazy"
                  alt="arrow-forward icon"
                />
              </a>
            </div>
          </li>
        </ul>

        <a href="#service" className="scroll-down">
          <img
            src={scroll}
            width="40"
            height="66"
            loading="lazy"
            alt="mouse scroll"
          />
        </a>

        <img
          src={shape}
          width="220"
          height="78"
          loading="lazy"
          alt=""
          className="shape"
        />
      </div>
    </section>
  );
};

export default Gallery;
