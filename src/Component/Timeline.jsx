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
  const { userData } = useFetchData();

 
  const sortedTimeline = (timeline) => {
    return timeline.sort((a, b) => a.sequence - b.sequence);
  };

  return (
    <section className="section gallery" id="gallery">
      <div className="container ">
        <ul class="gallery-list">
          {userData &&
            sortedTimeline(userData.timeline)?.map((exp) => (
              <li class="gallery-item" data-reveal>
                <div
                  class="gallery-card"
                  style={{
                    backgroundColor: "gray",
                    padding: "20px",
                    height: "100%",
                  }}
                >
                  <div class="card-content">
                    <h3 class="h6">
                      <a href="#" class="card-title">
                        {exp?.company_name}
                      </a>
                    </h3>
                    <span
                      class="card-tag"
                      style={{
                        color: "white",
                        fontSize: "18px",
                        fontFamily: "var(--ff-recoleta)",
                      }}
                    >
                      {exp?.jobTitle}
                    </span>
                    <span
                      class="card-tag"
                      style={{
                        color: "white",
                        fontSize: "14px",
                        fontFamily: "var(--ff-recoleta)",
                      }}
                    >
                      {exp?.jobLocation}
                    </span>
                    <span class="card-tag">{exp?.summary}</span>
                    <span
                      class="card-tag"
                      style={{
                        color: "white",
                        fontFamily: "var(--ff-recoleta)",
                      }}
                    >
                      Staring Date: {exp?.startDate?.split("T")[0]}
                    </span>
                    <span
                      class="card-tag"
                      style={{
                        color: "white",
                        fontFamily: "var(--ff-recoleta)",
                      }}
                    >
                      End Date: {exp?.endDate?.split("T")[0]}
                    </span>
                  </div>
                </div>
                <div
                  class="gallery-card"
                  style={{
                    backgroundColor: "gray",
                    padding: "20px",
                    height: "100%",
                  }}
                >
                  <div class="card-content">
                    <h3 class="h6">
                      <a href="#" class="card-title">
                        {exp?.company_name}
                      </a>
                    </h3>
                    <span
                      class="card-tag"
                      style={{
                        color: "white",
                        fontSize: "18px",
                        fontFamily: "var(--ff-recoleta)",
                      }}
                    >
                      {exp?.jobTitle}
                    </span>
                    <span
                      class="card-tag"
                      style={{
                        color: "white",
                        fontSize: "14px",
                        fontFamily: "var(--ff-recoleta)",
                      }}
                    >
                      {exp?.jobLocation}
                    </span>
                    <span class="card-tag">{exp?.summary}</span>
                    <span
                      class="card-tag"
                      style={{
                        color: "white",
                        fontFamily: "var(--ff-recoleta)",
                      }}
                    >
                      Staring Date: {exp?.startDate?.split("T")[0]}
                    </span>
                    <span
                      class="card-tag"
                      style={{
                        color: "white",
                        fontFamily: "var(--ff-recoleta)",
                      }}
                    >
                      End Date: {exp?.endDate?.split("T")[0]}
                    </span>
                  </div>
                </div>
              </li>
            ))}
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

export default Timeline;
