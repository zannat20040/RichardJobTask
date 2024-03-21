import React from "react";
import arrowFRW from "../assets/images/arrow-forward.svg";
import scroll from "../assets/images/scroll-down.svg";
import shape from "../assets/images/gallery-shape.svg";
import useFetchData from "../hooks/useFetchData";

const Gallery = () => {
  const { userData } = useFetchData();

  const sortedProjects= (projects) => {
    return projects.sort((a, b) => a.sequence - b.sequence);
  }

 

  return (
    <section className="section gallery" id="gallery">
      <div className="container ">
        <ul className="gallery-list ">
          {userData &&
             sortedProjects(userData.projects).map((project) => (
              <li className="gallery-item" data-reveal>
                <div className="gallery-card">
                  <figure
                    className="card-banner img-holder has-before"
                    // style={inlineStyles}
                  >
                    <img
                      src={project?.image?.url}
                      width="450"
                      height="625"
                      loading="lazy"
                      alt={project?.ititle}
                      className="img-cover"
                    />
                  </figure>

                  <div className="card-content">
                    <h3 className="h6">
                      <a href="#" className="card-title">
                        {project?.title}
                      </a>
                    </h3>

                    <span className="card-tag">
                      {project?.techStack?.join(", ")}
                    </span>
                  </div>

                  <a href={project.liveurl} className="btn-icon">
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
                      src={project?.image?.url}
                      width="450"
                      height="625"
                      loading="lazy"
                      alt={project?.title}
                      className="img-cover"
                    />
                  </figure>

                  <div className="card-content">
                    <h3 className="h6">
                      <a href="#" className="card-title">
                        {project?.title}
                      </a>
                    </h3>

                    <span className="card-tag">
                      {project?.techStack?.join(", ")}
                    </span>
                  </div>

                  <a href={project?.githuburl} className="btn-icon">
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

export default Gallery;
