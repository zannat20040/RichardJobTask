import React, { useEffect } from "react";
import useFetchData from "../hooks/useFetchData";
import { FaCircle } from "react-icons/fa";

const Education = () => {
  const { userData } = useFetchData();
  // Filter and sort timeline data
  const educationData =
    userData && userData?.timeline
      ? userData?.timeline
          .filter((item) => item.forEducation)
          .sort((a, b) => a.sequence - b.sequence)
      : [];


      useEffect(() => {
        const timelineItems = document.querySelectorAll(".timeline-item");
    
        const handleScroll = () => {
          timelineItems.forEach((item) => {
            const timelineItemTop = item.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
    
            if (timelineItemTop < windowHeight * 0.8) {
              item.classList.add("show"); // Add 'show' class when timeline item is in view
            }
          });
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []); // Run only once on component mount

      

  return (
    <section
      className="section service timeline"
      id="service"
      aria-labelledby="service-lable"
    >
      <p
        className="section-subtitle container"
        id="service-lable"
        style={{ textAlign: "end" }}
      >
        My Education
      </p>

      <ul className="timeline-list">
        {educationData &&
          educationData?.map((item) => (
            <li key={item._id} className="timeline-item">
              <div className="education-timeline-contant timeline-content">
                <div className="edu-timeline-left timeline-right card-content">
                  <h3 class="h6">
                    <a
                      href="#"
                      class="card-title"
                      style={{ display: "block", textAlign: "right" }}
                    >
                      {item?.company_name}
                    </a>
                  </h3>
                  <span
                    class="card-tag"
                    style={{
                      color: "white",
                      fontSize: "14px",
                      fontFamily: "var(--ff-recoleta)",
                      display: "block",
                      textAlign: "right",
                    }}
                  >
                    {item?.jobLocation}
                  </span>
                  <p
                    className="timeline-summary"
                    style={{ display: "block", textAlign: "right" }}
                  >
                    {item.summary}
                  </p>
                </div>

                <div className="line">
                  <button className="timeline-circle">
                    <FaCircle />
                  </button>
                </div>
                <div className="edu-right timeline-left">
                  <span
                    style={{
                      color: "white",
                      fontSize: "14px",
                      fontFamily: "var(--ff-recoleta)",
                    }}
                  >
                    {item?.startDate?.split("T")[0]} to{" "}
                    {item?.endDate?.split("T")[0]}
                  </span>
                  <span
                    style={{
                      color: "white",
                      fontSize: "14px",
                      fontFamily: "var(--ff-recoleta)",
                    }}
                  >
                    {item.jobTitle}
                  </span>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default Education;
