import arrowFRW from "../assets/images/arrow-forward.svg";
import scroll from "../assets/images/scroll-down.svg";
import shape from "../assets/images/gallery-shape.svg";
import useFetchData from "../hooks/useFetchData";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const Timeline = () => {

 
 

  return (
    <section className="section gallery" id="gallery">
      <div className="container ">
     

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

export default Timeline;
