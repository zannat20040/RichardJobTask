import React from "react";
import useFetchData from "../hooks/useFetchData";
import { FaCircle } from "react-icons/fa";

const Experience = () => {
  const { userData } = useFetchData();

  // Filter and sort timeline data
  const experienceData =
    userData && userData?.timeline
      ? userData?.timeline
          .filter((item) => !item.forEducation)
          .sort((a, b) => a.sequence - b.sequence)
      : [];

  return (
    <section
      className="section service timeline"
      id="service"
      aria-labelledby="service-lable"
    >
      <p className="section-subtitle container" id="service-lable">
        My Experience
      </p>


      <ul className="timeline-list">
        {experienceData &&
          experienceData?.map((item) => (
            <li key={item._id} className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-left">
                  <span
                    style={{
                      color: "white",
                      fontSize: "14px",
                      fontFamily: "var(--ff-recoleta)",
                      display:"block",
                      textAlign:'right'
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
                      display:"block",
                      textAlign:'right'
                    }}
                  >
                  {item.jobTitle}
                  </span>
                </div>
                <div className="line">
                  <button className="timeline-circle">
                    <FaCircle />
                  </button>
                </div>
                <div className="timeline-right card-content">
                  <h3 class="h6">
                    <a href="#" class="card-title">
                      {item?.company_name}
                    </a>
                  </h3>
                  <span
                      class="card-tag"
                      style={{
                        color: "white",
                        fontSize: "14px",
                        fontFamily: "var(--ff-recoleta)",
                      }}
                    >
                      {item?.jobLocation}
                    </span>
                 <p className="timeline-summary">{item.summary}</p>
                </div>

              
              </div>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default Experience;
