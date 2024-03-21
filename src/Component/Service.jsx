import React from 'react';
import useFetchData from '../hooks/useFetchData';

const Service = () => {

  const {userData} = useFetchData()


    return (
        <section className="section service" id="service" aria-labelledby="service-lable">

        <p className="section-subtitle container" id="service-lable">My Services</p>

        <ul className="service-list">

{
  userData && userData?.services?.map(service=>(
    <li data-reveal>
            <div className="service-card container">

              <img   style={{ width: '340px', height: '380px', zIndex:'999' }} src={service?.image?.url} width="340" height="380" loading="lazy" alt="Wedding Photography"
                className="img"/>

              <div>
                <h3 className="h3 card-title">{service?.name}</h3>

                <p className="card-subtitle">
                {service?.desc}
                </p>
                <p className="card-subtitle">
                {service?.charge}
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

  ))
}

        </ul>

      </section>

    );
};

export default Service;