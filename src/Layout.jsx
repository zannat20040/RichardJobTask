import React, { useEffect } from "react";
import Header from "./Component/Header";
import Hero from "./Component/Hero";
import Timeline from "./Component/Timeline";
import Service from "./Component/Service";
import Portfolio from "./Component/Portfolio";
import Footer from "./Component/Footer";
import logo from "./assets/images/loading.svg";
import loading from "./assets/images/loading-circle.svg";
import About from "./Component/About";
import Skills from "./Component/Skills";
import Feedback from "./Component/Feedback";
import Contact from "./Component/Contact";

const Layout = () => {
  useEffect(() => {
    // PRELOADING

    const loadingElement = document.querySelector("[data-loading]");

    window.addEventListener("load", function () {
      loadingElement.classList.add("loaded");
      document.body.classList.remove("active");
    });

    // add Event on multiple elements
    const addEventOnElements = function (elements, eventType, callback) {
      for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener(eventType, callback);
      }
    };

    /**
     * CUSTOM CURSOR
     */

    const cursor = document.querySelector("[data-cursor]");
    const anchorElements = document.querySelectorAll("a");
    const buttons = document.querySelectorAll("button");

    // change cursorElement position based on cursor move
    document.body.addEventListener("mousemove", function (event) {
      setTimeout(function () {
        cursor.style.top = `${event.clientY}px`;
        cursor.style.left = `${event.clientX}px`;
      }, 100);
    });

    // add cursor hovered class
    const hoverActive = function () {
      cursor.classList.add("hovered");
    };

    // remove cursor hovered class
    const hoverDeactive = function () {
      cursor.classList.remove("hovered");
    };

    // add hover effect on cursor, when hover on any button or hyperlink
    addEventOnElements(anchorElements, "mouseover", hoverActive);
    addEventOnElements(anchorElements, "mouseout", hoverDeactive);
    addEventOnElements(buttons, "mouseover", hoverActive);
    addEventOnElements(buttons, "mouseout", hoverDeactive);

    // add disabled class on cursorElement, when mouse out of body
    document.body.addEventListener("mouseout", function () {
      cursor.classList.add("disabled");
    });

    // remove disabled class on cursorElement, when mouse in the body
    document.body.addEventListener("mouseover", function () {
      cursor.classList.remove("disabled");
    });

    /**
     * BACK TO TOP BUTTON
     */

    const backTopBtn = document.querySelector("[data-back-top-btn]");

    window.addEventListener("scroll", function () {
      const bodyHeight = document.body.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollEndPos = bodyHeight - windowHeight;
      const totalScrollPercent = (window.scrollY / scrollEndPos) * 100;

      backTopBtn.textContent = `${totalScrollPercent.toFixed(0)}%`;

      // visible back top btn when scrolled 5% of the page
      if (totalScrollPercent > 5) {
        backTopBtn.classList.add("show");
      } else {
        backTopBtn.classList.remove("show");
      }
    });

    const revealElements = document.querySelectorAll("[data-reveal]");
  
    const scrollReveal = function () {
      for (let i = 0; i < revealElements.length; i++) {
        const elementIsInScreen = revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.15;
    
        if (elementIsInScreen) {
          revealElements[i].classList.add("revealed");
        } else {
          revealElements[i].classList.remove("revealed");
        }
      }
    }
    
    window.addEventListener("scroll", scrollReveal);
    
    scrollReveal();

  }, []);

  return (
    <>
      <div className="loading" data-loading>
        <img src={logo} width="55" height="55" alt="loading" className="img" />
        <img src={loading} width="70" height="70" alt="" className="circle" />
      </div>

      <Header />
      <Hero />
      <Timeline />
      <Skills />
      <About />
      <Feedback />
      <Service />
      <Portfolio />
      <Contact />
      <Footer />

      <a
        href="#top"
        className="back-top-btn"
        aria-label="back to top"
        data-back-top-btn
      >
        0%
      </a>

      {/* custom cursor */}
      <div className="cursor" data-cursor></div>
    </>
  );
};

export default Layout;
