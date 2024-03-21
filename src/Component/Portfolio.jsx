import React from "react";
import shape from "../assets/images/portfolio-shape.svg";
import useFetchData from "../hooks/useFetchData";

const Portfolio = () => {
  const { userData } = useFetchData();

  const sortedProjects = (projects) => {
    return projects.sort((a, b) => a.sequence - b.sequence);
  };

  return (
    <div
      className="section portfolio"
      id="portfolio"
      aria-labelledby="portfolio-label"
    >
      <div className="container">
        <div className="portfolio-list">
          <div className="wrapper project-section">
            <h2 className="h2 section-title" id="portfolio-label" data-reveal>
              My Recent Work.
            </h2>

            {userData &&
              sortedProjects(userData.projects).map((project) => (
                <div className="portfolio-card" data-reveal>
                  <figure className="card-banner img-holder has-before">
                    <img
                      src={project?.image?.url}
                      width="700"
                      height="605"
                      loading="lazy"
                      alt={project?.iitle}
                      className="img-cover"
                    />
                  </figure>

                  <div className="card-content">
                    <h3 className="h4">
                      <a href="#" className="card-title">
                        {project?.title}
                      </a>
                    </h3>

                    <p className="card-tag">
                      {" "}
                      {project?.techStack?.join(", ")}
                    </p>
                  </div>

                  <a href="#" className="btn-icon" aria-label="See more">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="43"
                      height="20"
                      viewBox="0 0 43 20"
                      fill="none"
                    >
                      <path d="M0 10H41" stroke="black" stroke-width="2" />
                      <path
                        d="M33 1L41.9 10.2727L33 19"
                        stroke="black"
                        stroke-width="2"
                      />
                    </svg>
                  </a>
                </div>
              ))}
          </div>
        </div>

        <img
          src={shape}
          width="286"
          height="232"
          loading="lazy"
          alt=""
          className="shape"
        />
      </div>
    </div>
  );
};

export default Portfolio;
