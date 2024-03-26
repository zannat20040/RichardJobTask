import React, { useEffect } from "react";
import banner from "../assets/images/hero-banner.png";
import shape from "../assets/images/hero-shape.svg";
import useFetchData from "../hooks/useFetchData";

const Hero = () => {
  const { userData } = useFetchData();

  useEffect(() => {
    const letterBoxes = document.querySelectorAll("[data-letter-effect]");

    let activeLetterBoxIndex = 0;
    let lastActiveLetterBoxIndex = 0;
    let totalLetterBoxDelay = 0;

    const setLetterEffect = function () {
      for (let i = 0; i < letterBoxes.length; i++) {
        let letterAnimationDelay = 0;
        const letters = letterBoxes[i].textContent.trim();
        letterBoxes[i].textContent = "";

        for (let j = 0; j < letters.length; j++) {
          const span = document.createElement("span");
          span.style.animationDelay = `${letterAnimationDelay}s`;

          if (i === activeLetterBoxIndex) {
            span.classList.add("in");
          } else {
            span.classList.add("out");
          }

          span.textContent = letters[j];

          if (letters[j] === " ") span.classList.add("space");

          letterBoxes[i].appendChild(span);

          if (j >= letters.length - 1) break;
          letterAnimationDelay += 0.03; // Adjust the delay for smoother effect
        }

        if (i === activeLetterBoxIndex) {
          totalLetterBoxDelay = Number(letterAnimationDelay.toFixed(2));
        }

        if (i === lastActiveLetterBoxIndex) {
          letterBoxes[i].classList.add("active");
        } else {
          letterBoxes[i].classList.remove("active");
        }
      }

      setTimeout(function () {
        lastActiveLetterBoxIndex = activeLetterBoxIndex;

        activeLetterBoxIndex >= letterBoxes.length - 1
          ? (activeLetterBoxIndex = 0)
          : activeLetterBoxIndex++;

        setLetterEffect();
      }, totalLetterBoxDelay * 1000 + 2000); // Adjust the timeout for smoother transition
    };

    window.addEventListener("load", setLetterEffect);
  }, []);

  return (
    <section className="section hero " id="home" aria-label="home">
      <div className="container">
        <img
          style={{
            width: "280px",
            height: "280px",
            borderRadius: "50%",
            objectFit: "cover",
            objectPosition: "center center",
            display: "block",
          }}
          src={userData?.about?.avatar?.url}
          alt=""
          className="hero-banner"
        />

        <div className="hero-content">
          <h1 className="h1 hero-title">{userData?.about?.name}</h1>

          <div className="wrapper h2" >
            <strong className="strong" data-letter-effect>
              I develop 3D Visuals
            </strong>
            <strong className="strong" data-letter-effect>
              User Interfaces
            </strong>
            <strong className="strong" data-letter-effect>
              Web Applications
            </strong>
          </div>

          <p className="hero-text">
            {userData?.about?.exp_year}+ Years Of Experience
          </p>
        </div>
      </div>

      <img src={shape} width="211" height="189" alt="" className="shape" />
    </section>
  );
};

export default Hero;
