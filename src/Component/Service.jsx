import React from 'react';
import service1 from "../assets/images/service-1.jpg"
import service2 from "../assets/images/service-2.jpg"
import service3 from "../assets/images/service-3.jpg"
import service4 from "../assets/images/service-4.jpg"

const Service = () => {
    return (
        <section className="section service" id="service" aria-labelledby="service-lable">

        <p className="section-subtitle container" id="service-lable">My Services</p>

        <ul className="service-list">

          <li data-reveal>
            <div className="service-card container">

              <img src={service1} width="340" height="380" loading="lazy" alt="Wedding Photography"
                className="img"/>

              <div>
                <h3 className="h3 card-title">Wedding Photography</h3>

                <p className="card-subtitle">
                  Aut temporibus qui vero.
                </p>
              </div>

              <a href="#" className="btn-icon" aria-label="See more">
                <svg xmlns="http://www.w3.org/2000/svg" width="43" height="20" viewBox="0 0 43 20" fill="none">
                  <path d="M0 10H41" stroke="white" stroke-width="2" />
                  <path d="M33 1L41.9 10.2727L33 19" stroke="white" stroke-width="2" />
                </svg>
              </a>

            </div>
          </li>

          <li data-reveal>
            <div className="service-card container">

              <img src={service2} width="340" height="380" loading="lazy" alt="Event Organiser"
                className="img"/>

              <div>
                <h3 className="h3 card-title">Event Organiser</h3>

                <p className="card-subtitle">
                  Nobis, magni modi ipsa culpa.
                </p>
              </div>

              <a href="#" className="btn-icon" aria-label="See more">
                <svg xmlns="http://www.w3.org/2000/svg" width="43" height="20" viewBox="0 0 43 20" fill="none">
                  <path d="M0 10H41" stroke="white" stroke-width="2" />
                  <path d="M33 1L41.9 10.2727L33 19" stroke="white" stroke-width="2" />
                </svg>
              </a>

            </div>
          </li>

          <li data-reveal>
            <div className="service-card container">

              <img src={service3} width="340" height="380" loading="lazy" alt="Product Marketing"
                className="img"/>

              <div>
                <h3 className="h3 card-title">Product Marketing</h3>

                <p className="card-subtitle">
                  Tenetur porro repellendus!
                </p>
              </div>

              <a href="#" className="btn-icon" aria-label="See more">
                <svg xmlns="http://www.w3.org/2000/svg" width="43" height="20" viewBox="0 0 43 20" fill="none">
                  <path d="M0 10H41" stroke="white" stroke-width="2" />
                  <path d="M33 1L41.9 10.2727L33 19" stroke="white" stroke-width="2" />
                </svg>
              </a>

            </div>
          </li>

          <li data-reveal>
            <div className="service-card container">

              <img src={service4} width="340" height="380" loading="lazy" alt="Videography"
                className="img"/>

              <div>
                <h3 className="h3 card-title">Videography</h3>

                <p className="card-subtitle">
                  Amet consectetur adipisicing elit
                </p>
              </div>

              <a href="#" className="btn-icon" aria-label="See more">
                <svg xmlns="http://www.w3.org/2000/svg" width="43" height="20" viewBox="0 0 43 20" fill="none">
                  <path d="M0 10H41" stroke="white" stroke-width="2" />
                  <path d="M33 1L41.9 10.2727L33 19" stroke="white" stroke-width="2" />
                </svg>
              </a>

            </div>
          </li>

        </ul>

      </section>

    );
};

export default Service;