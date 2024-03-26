import React from "react";

const Contact = () => {
  return (
    <section
      className="section service"
      id="service"
      aria-labelledby="service-lable"
    >
     

      <div
        className="contact_inner"
      
      >
        <div className="dizme_tm_map wow fadeInUp" data-wow-duration="1s">
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
               height={450}
                style={{ width: "100%" }}
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
              />
              <a href="https://www.embedgooglemap.net/blog/divi-discount-code-elegant-themes-coupon" />
              <br />
            </div>
          </div>
          {/* Get your API here https://www.embedgooglemap.net */}
        </div>
        <div className="right wow fadeInRight" data-wow-duration="1s">
          <div className="fields">
            <form
              action="/"
              method="post"
              className="contact_form"
              id="contact_form"
              autoComplete="off"
            >
              <div
                className="returnmessage"
                data-success="Your message has been received, We will contact you soon."
              />
              <div className="empty_notice">
                <span>Please Fill Required Fields</span>
              </div>
              <div className="input_list">
                <ul>
                  <li>
                    <input id="name" type="text" placeholder="Your Name" />
                  </li>
                  <li>
                    <input id="email" type="text" placeholder="Your Email" />
                  </li>
                  <li>
                    <input id="phone" type="number" placeholder="Your Phone" />
                  </li>
                  <li>
                    <input id="subject" type="text" placeholder="Subject" />
                  </li>
                </ul>
              </div>
              <div className="message_area">
                <textarea
                  id="message"
                  placeholder="Write your message here"
                  defaultValue={""}
                />
              </div>
              <button className="contact-btn">
                <span> Submit Now</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
