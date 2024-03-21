import React from "react";
import arrowfrw from "../assets/images/arrow-forward.svg";
import footer1 from "../assets/images/footer-1.jpg";
import footer2 from "../assets/images/footer-2.jpg";
import footer3 from "../assets/images/footer-3.jpg";
import footer4 from "../assets/images/footer-4.jpg";
import shape from "../assets/images/footer-shape.svg";
import logo from "../assets/images/logo.svg";
import bg from "../assets/images/footer-bg.jpg";
import useFetchData from "../hooks/useFetchData";

const Footer = () => {
  const { userData } = useFetchData();

  return (
    <footer className="footer">
      <div className="footer-top section" id="contact">
        <div className="container">
          <p className="section-subtitle" data-reveal>
            Contact Us
          </p>

          <h2 className="h2 section-title" data-reveal>
            Work inquiry, Job oportunities? Send Message.
          </h2>

          <a href="#" className="btn-icon" data-reveal>
            <img
              src={arrowfrw}
              width="43"
              height="20"
              loading="lazy"
              alt="arrow-forward icon"
            />
          </a>

          <img
            src={footer1}
            width="159"
            height="176"
            loading="lazy"
            alt="photography"
            className="abs-img abs-img-1"
            data-reveal
          />

          <img
            src={footer2}
            width="265"
            height="275"
            loading="lazy"
            alt="photography"
            className="abs-img abs-img-2"
            data-reveal
          />

          <img
            src={footer3}
            width="303"
            height="272"
            loading="lazy"
            alt="photography"
            className="abs-img abs-img-3"
            data-reveal
          />

          <img
            src={footer4}
            width="175"
            height="175"
            loading="lazy"
            alt="photography"
            className="abs-img abs-img-4"
            data-reveal
          />

          <img
            src={shape}
            width="185"
            height="134"
            loading="lazy"
            alt=""
            className="shape"
          />
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <a href="#" className="logo">
            <img
              src={logo}
              width="40"
              height="40"
              loading="lazy"
              alt="Richard home"
            />
          </a>

          <ul className="social-list">
            {userData &&
              userData?.social_handles?.map((data) => (
                <li>
                  <a href={data?.url} className="social-link">
                    {data?.platform}
                  </a>
                </li>
              ))}
          </ul>

          <p className="copyright">Made with love</p>
        </div>
      </div>

      <div className="footer-bg has-before">
        <img
          src={bg}
          width="1920"
          height="1135"
          loading="lazy"
          alt="photography"
          className="img-cover"
        />
      </div>
    </footer>
  );
};

export default Footer;
