import React, { useEffect } from 'react';
import banner from "../assets/images/hero-banner.png"
import shape from "../assets/images/hero-shape.svg"
import useFetchData from '../hooks/useFetchData';


const Hero = () => {

  const {userData} = useFetchData()

/**
 * TEXT ANIMATION EFFECT FOR HERO SECTION
 */
useEffect(()=>{
  const letterBoxes = document.querySelectorAll("[data-letter-effect]");

let activeLetterBoxIndex = 0;
let lastActiveLetterBoxIndex = 0;
let totalLetterBoxDelay = 0;

const setLetterEffect = function () {

  // loop through all letter boxes
  for (let i = 0; i < letterBoxes.length; i++) {
    // set initial animation delay
    let letterAnimationDelay = 0;

    // get all character from the current letter box
    const letters = letterBoxes[i].textContent.trim();
    // remove all character from the current letter box
    letterBoxes[i].textContent = "";

    // loop through all letters
    for (let j = 0; j < letters.length; j++) {

      // create a span
      const span = document.createElement("span");

      // set animation delay on span
      span.style.animationDelay = `${letterAnimationDelay}s`;

      // set the "in" class on the span, if current letter box is active
      // otherwise class is "out"
      if (i === activeLetterBoxIndex) {
        span.classList.add("in");
      } else {
        span.classList.add("out");
      }

      // pass current letter into span
      span.textContent = letters[j];

      // add space class on span, when current letter contain space
      if (letters[j] === " ") span.classList.add("space");

      // pass the span on current letter box
      letterBoxes[i].appendChild(span);

      // skip letterAnimationDelay when loop is in the last index
      if (j >= letters.length - 1) break;
      // otherwise update
      letterAnimationDelay += 0.05;

    }

    // get total delay of active letter box
    if (i === activeLetterBoxIndex) {
      totalLetterBoxDelay = Number(letterAnimationDelay.toFixed(2));
    }

    // add active class on last active letter box
    if (i === lastActiveLetterBoxIndex) {
      letterBoxes[i].classList.add("active");
    } else {
      letterBoxes[i].classList.remove("active");
    }

  }

  setTimeout(function () {
    lastActiveLetterBoxIndex = activeLetterBoxIndex;

    // update activeLetterBoxIndex based on total letter boxes
    activeLetterBoxIndex >= letterBoxes.length - 1 ? activeLetterBoxIndex = 0 : activeLetterBoxIndex++;

    setLetterEffect();
  }, (totalLetterBoxDelay * 1000) + 3000);

}

// call the letter effect function after window loaded
window.addEventListener("load", setLetterEffect);


},[])


    return (
        <section className="section hero " id="home" aria-label="home">
        <div className="container">

          <img src={banner} width="322" height="322" alt="" className="hero-banner" />

          <div className="hero-content">

            <h1 className="h1 hero-title">{userData?.about?.name}</h1>

            <div className="wrapper h2">
              <strong className="strong" data-letter-effect>Software Developer</strong>
              <strong className="strong" data-letter-effect>Web Applications</strong>
              <strong className="strong" data-letter-effect>3D Visuals</strong>
              <strong className="strong" data-letter-effect>User Interfaces</strong>
            </div>

            <p className="hero-text">{userData?.about?.exp_year}+ Years Of Experience</p>

          </div>

        </div>

        <img src={shape} width="211" height="189" alt="" className="shape" />

      </section>
    );
};

export default Hero;