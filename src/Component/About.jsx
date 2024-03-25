import React from "react";
import banner from "../assets/images/about-banner.jpg";
import shape from "../assets/images/about-shape-1.png";
import shape2 from "../assets/images/about-shape-2.svg";
import shape3 from "../assets/images/about-shape-3.svg";
import signature from "../assets/images/signature.png";
import useFetchData from "../hooks/useFetchData";

const About = () => {
  const { userData } = useFetchData();

  return (
    <section className="section about" id="about" aria-label="about me">
      <div className="container">
        {userData && (
          <>
            <div className="about-content">
              <h2 className="h2 section-title" data-reveal="right">
                Hi. I’m <br />
                {userData?.about?.name}
              </h2>

              <div className="wrapper has-before" data-reveal="right">
                <p className="section-text">
                  A passionate
                  <em className="em"> {userData?.about?.title}</em>
                  who are working in this field for
                  <em className="em">last {userData?.about?.exp_year} years.</em>
                  I’m ready to give you my best.
                </p>

              </div>
            </div>

            <figure className="about-banner" data-reveal="left">
              <div className="img-holder has-before">
                <img
                  src={userData?.about?.avatar?.url}
                  width="512"
                  height="684"
                  loading="lazy"
                  alt="Riachard Ryan"
                  className="img-cover"
                />
              </div>

              <img
                src={userData?.about?.avatar?.url} style={{ width:"178px",
                height:"178px", borderRadius:'50%'}}
                width="178"
                height="178"
                loading="lazy"
                alt=""
                className="shape shape-1"
              />

              <img
                src={shape2}
                width="659"
                height="653"
                loading="lazy"
                alt=""
                className="shape shape-2"
              />
            </figure>
          </>
        )}

        <img
          src={shape3}
          width="239"
          height="232"
          loading="lazy"
          alt=""
          className="shape shape-3"
        />
      </div>
    </section>
  );
};

export default About;
