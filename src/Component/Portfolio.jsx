import React, { useEffect, useRef, useState } from "react";
import shape from "../assets/images/portfolio-shape.svg";
import useFetchData from "../hooks/useFetchData";
import { IoMdClose } from "react-icons/io";
const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const { userData } = useFetchData();
  const [filterKey, setFilterKey] = useState("*");
  const modalRef = useRef(null);

  const getTechStacks = [];

  if (userData && userData.projects) {
    userData.projects.forEach((project) => {
      project.techStack.forEach((tech) => {
        const trimmedTech = tech.trim();
        if (!getTechStacks.includes(trimmedTech)) {
          getTechStacks.push(trimmedTech);
        }
      });
    });
  }

  const sortedProjects = (projects) => {
    return projects.sort((a, b) => a.sequence - b.sequence);
  };

  const modalOverlayStyle = {
    position: "fixed",
    zIndex: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    visibility: openModal ? "visible" : "hidden",
    opacity: openModal ? 1 : 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    backdropFilter: "blur(4px)",
    transitionDuration: "100ms",
    overflowY: "scroll",
  };

  const modalContentStyle = {
    maxWidth: "70%",
    maxHeight: "600px",
    borderRadius: "8px",
    backgroundColor: "#fff",
    padding: "1.5rem",
    boxShadow: "0 4px 14px 0 rgba(0, 0, 0, 0.15)",
    color: "#000",
    opacity: openModal ? 1 : 0,
    transitionDuration: openModal ? "300ms" : "150ms",
    overflowY: "scroll",
    position: "relative",
  };

  const HandleModel = (project) => {
    setOpenModal(true);
    setSelectedProject(project);
  };

  const filteredProjects =
    filterKey === "*"
      ? userData?.projects
      : userData?.projects?.filter((project) =>
          project?.techStack?.find((stack) => stack?.trim() == filterKey)
        );

  useEffect(() => {
    const handleCloseModal = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setOpenModal(false);
      }
    };

    document.addEventListener("mousedown", handleCloseModal);

    return () => {
      document.removeEventListener("mousedown", handleCloseModal);
    };
  }, []);
  return (
    <div
      className="section portfolio"
      id="portfolio"
      aria-labelledby="portfolio-label"
    >
      <div className="container">
        <div className="portfolio-list">
          <div className="wrapper project-section">
            <div>
              <h2 className="h2 section-title" id="portfolio-label" data-reveal>
                My Recent Work.
              </h2>
              <div className="portfolio_filter">
                <ul>
                  <li onClick={() => setFilterKey("*")}>
                    <a>All</a>
                  </li>

                  {getTechStacks?.map((techStack) => (
                    <li key={techStack} onClick={() => setFilterKey(techStack)}>
                      <a>{techStack}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {userData &&
              sortedProjects(filteredProjects).map((project, index) => (
                <div
                  className="portfolio-card"
                  data-reveal
                  key={`project-${index}`}
                >
                  <figure className="card-banner img-holder has-before">
                    <img
                      src={project?.image?.url}
                      width="700"
                      height="605"
                      loading="lazy"
                      alt={project?.title}
                      className="img-cover"
                    />
                  </figure>

                  <div className="card-content">
                    <h3 className="h4">
                      <a href="#" className="card-title">
                        {project?.title}
                      </a>
                    </h3>

                    <p className="card-tag">{project?.techStack?.join(", ")}</p>
                  </div>

                  <button
                    onClick={() => HandleModel(project)}
                    className="btn-icon"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="43"
                      height="20"
                      viewBox="0 0 43 20"
                      fill="none"
                    >
                      <path d="M0 10H41" stroke="black" strokeWidth="2" />
                      <path
                        d="M33 1L41.9 10.2727L33 19"
                        stroke="black"
                        strokeWidth="2"
                      />
                    </svg>
                  </button>
                </div>
              ))}
          </div>
        </div>

        <div
          style={{
            ...modalOverlayStyle,
          }}
        >
          <div ref={modalRef} style={modalContentStyle}>
            <figure className="card-banner img-holder has-before">
              <img
                src={selectedProject?.image?.url}
                width="700"
                height="605"
                loading="lazy"
                alt={selectedProject?.title}
                className="img-cover"
              />
            </figure>

            <div className="card-content" style={{ marginTop: "20px" }}>
              <h3 className="h4">
                <a href="#" className="card-title">
                  {selectedProject?.title}
                </a>
              </h3>
            </div>

            <div className="modal-div">
              <p className="mb-5 text-sm opacity-80">
                {selectedProject?.description}
              </p>

              <div>
                <div>
                  <b>Tech Stack</b>
                  <p className="card-tag">
                    {selectedProject?.techStack?.join(", ")}
                  </p>{" "}
                </div>
                <div>
                  <b>Live URL</b>
                  <p className="card-tag">{selectedProject?.liveurl}</p>
                </div>
                <div>
                  <b>Github URL</b>
                  <p className="card-tag">{selectedProject?.githuburl}</p>
                </div>
              </div>
            </div>
            <div
              style={{
                marginTop: "20px",
                position: "absolute",
                top: "0",
                right: "20px",
                zIndex: "100",
              }}
            >
              <button onClick={() => setOpenModal(false)} className="close-btn">
                <IoMdClose />
              </button>
              <IoMdClose />
            </div>
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
