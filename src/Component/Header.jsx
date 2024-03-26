import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.svg";
import menu from "../assets/images/menu.svg";
import navlogo from "../assets/images/nav-logo.svg";
import user from "../assets/images/user.svg";
import useFetchData from "../hooks/useFetchData";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { userData } = useFetchData();

  useEffect(() => {
    const header = document.querySelector("[data-header]");

    const activeElementOnScroll = function () {
      if (window.scrollY > 50) {
        header.classList.add("active");
      } else {
        header.classList.remove("active");
      }
    };

    window.addEventListener("scroll", activeElementOnScroll);
  }, []);

  const toggleNav = () => {
    setIsActive(!isActive);
  };

  const closeNav = () => {
    setIsActive(false);
  };

  return (
    <header className={`header ${isActive ? "active" : ""}`} data-header>
      <div className="container ">
        <span className="logo-name">{userData?.about?.name}</span>

        <button
          className="nav-open-btn"
          aria-label="open menu"
          onClick={toggleNav}
        >
          <img src={menu} width="17" height="17" alt="menu icon" />
        </button>

        <nav className={`navbar ${isActive ? "active" : ""}`} data-navbar>
          <div className="navbar-top">
            <span className="logo-name">{userData?.about?.name}</span>

            <button
              onClick={closeNav}
              className="nav-close-btn"
              aria-label="close menu"
              data-nav-toggler
            >
              <span className="span one"></span>
              <span className="span two"></span>
            </button>
          </div>

          <ul className="navbar-list">
            <li className="navbar-item">
              <a href="#home" className="navbar-link" data-nav-link>
                Home
              </a>
            </li>

            <li className="navbar-item">
              <a href="#gallery" className="navbar-link" data-nav-link>
                Gallery
              </a>
            </li>

            <li className="navbar-item">
              <a href="#about" className="navbar-link" data-nav-link>
                About
              </a>
            </li>

            <li className="navbar-item">
              <a href="#service" className="navbar-link" data-nav-link>
                Services
              </a>
            </li>

            <li className="navbar-item">
              <a href="#portfolio" className="navbar-link" data-nav-link>
                Portfolio
              </a>
            </li>

            <li className="navbar-item">
              <a href="#contact" className="navbar-link" data-nav-link>
                Contact us
              </a>
            </li>
          </ul>

          <button className="login-btn">
            <img src={user} width="21" height="21" alt="user icon" />

            <span className="span">Login</span>
          </button>

          <p className="navbar-title">My Address</p>

          <address className="navbar-text">{userData?.about?.address}</address>

          <p className="navbar-text">
            Urgent issue? call us at
            <a href="tel:8085613846" className="contact-link">
              {userData?.about?.phoneNumber}
            </a>
          </p>
        </nav>

        {isActive && <div className="overlay" onClick={toggleNav}></div>}
      </div>
    </header>
  );
};

export default Header;
