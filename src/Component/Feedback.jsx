import useFetchData from "../hooks/useFetchData";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const Feedback = () => {

    const { userData } = useFetchData();

    return (
        <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {userData &&
            userData?.testimonials?.map((data) => (
              <SwiperSlide>
               <div className="custom-slider">
               <div className="icon" key={data._id}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    id="Layer_1"
                    x="0px"
                    y="0px"
                    width="200px"
                    height="200px"
                    viewBox="796 698 200 200"
                    enableBackground="new 796 698 200 200"
                    xmlSpace="preserve"
                    className="svg replaced-svg"
                  >
                    <g>
                      <path d="M885.208,749.739v-40.948C836.019,708.791,796,748.81,796,798v89.209h89.208V798h-48.26   C836.948,771.39,858.598,749.739,885.208,749.739z" />
                      <path d="M996,749.739v-40.948c-49.19,0-89.209,40.019-89.209,89.209v89.209H996V798h-48.26   C947.74,771.39,969.39,749.739,996,749.739z" />
                    </g>
                  </svg>
                </div>
                <div className="text">
                  <p>{data.review}</p>
                </div>
                <div className="short">
                  <div className="image">
                    <img src={data?.image.url} className="main" />
                  </div>
                  <div className="detail">
                    <h3>{data.name}</h3>
                    <span>{data.position}</span>
                  </div>
                </div>
               </div>
              </SwiperSlide>
            ))}
        </Swiper>
        </div>
    );
};

export default Feedback;