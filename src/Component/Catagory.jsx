import React from 'react';
import catagory1 from "../assets/images/category-1.jpg"
import catagory2 from "../assets/images/category-2.jpg"
import catagory3 from "../assets/images/category-3.jpg"
import catagory4 from "../assets/images/category-4.jpg"
import catagory5 from "../assets/images/category-5.jpg"
import catagory6 from "../assets/images/category-6.jpg"
import catagory7 from "../assets/images/category-7.jpg"
import catagory8 from "../assets/images/category-8.jpg"
import catagory9 from "../assets/images/category-9.jpg"
import catagory10 from "../assets/images/category-10.jpg"
import catagory11 from "../assets/images/category-11.jpg"

const Catagory = () => {
    return (
        <section className="section category" aria-label="photography category">
        <div className="container">

          <ul className="category-list">

            <li className="category-item" data-reveal>
              <a href="#" className="category-card">

                <h3 className="h4 card-title">Landscape,</h3>

                <figure className="card-banner img-holder" >
                  <img src={catagory1} width="600" height="690" loading="lazy" alt="Landscape"
                    className="img-cover" />
                </figure>

              </a>
            </li>

            <li className="category-item" data-reveal>
              <a href="#" className="category-card">

                <h3 className="h4 card-title">Model,</h3>

                <figure className="card-banner img-holder" >
                  <img src={catagory2} width="600" height="690" loading="lazy" alt="Model"
                    className="img-cover" />
                </figure>

              </a>
            </li>

            <li className="category-item" data-reveal>
              <a href="#" className="category-card">

                <h3 className="h4 card-title">Street,</h3>

                <figure className="card-banner img-holder" >
                  <img src={catagory3} width="600" height="690" loading="lazy" alt="Street"
                    className="img-cover"/>
                </figure>

              </a>
            </li>

            <li className="category-item" data-reveal>
              <a href="#" className="category-card">

                <h3 className="h4 card-title">Product,</h3>

                <figure className="card-banner img-holder" >
                  <img src={catagory4} width="600" height="690" loading="lazy" alt="Product"
                    className="img-cover" />
                </figure>

              </a>
            </li>

            <li className="category-item" data-reveal>
              <a href="#" className="category-card">

                <h3 className="h4 card-title">Fashion,</h3>

                <figure className="card-banner img-holder" >
                  <img src={catagory2} width="600" height="690" loading="lazy" alt="Fashion"
                    className="img-cover" />
                </figure>

              </a>
            </li>

            <li className="category-item" data-reveal>
              <a href="#" className="category-card">

                <h3 className="h4 card-title">Film,</h3>

                <figure className="card-banner img-holder" >
                  <img src={catagory5} width="600" height="690" loading="lazy" alt="Film"
                    className="img-cover"/>
                </figure>

              </a>
            </li>

            <li className="category-item" data-reveal>
              <a href="#" className="category-card">

                <h3 className="h4 card-title">Architecture,</h3>

                <figure className="card-banner img-holder" >
                  <img src={catagory6} width="600" height="690" loading="lazy" alt="Architecture"
                    className="img-cover"/>
                </figure>

              </a>
            </li>

            <li className="category-item" data-reveal>
              <a href="#" className="category-card">

                <h3 className="h4 card-title">Event,</h3>

                <figure className="card-banner img-holder" >
                  <img src={catagory7} width="600" height="690" loading="lazy" alt="Event"
                    className="img-cover"/>
                </figure>

              </a>
            </li>

            <li className="category-item" data-reveal>
              <a href="#" className="category-card">

                <h3 className="h4 card-title">Wedding,</h3>

                <figure className="card-banner img-holder" >
                  <img src={catagory8} width="600" height="690" loading="lazy" alt="Wedding"
                    className="img-cover"/>
                </figure>

              </a>
            </li>

            <li className="category-item" data-reveal>
              <a href="#" className="category-card">

                <h3 className="h4 card-title">People,</h3>

                <figure className="card-banner img-holder" >
                  <img src={catagory9} width="600" height="690" loading="lazy" alt="People"
                    className="img-cover"/>
                </figure>

              </a>
            </li>

            <li className="category-item" data-reveal>
              <a href="#" className="category-card">

                <h3 className="h4 card-title">Event,</h3>

                <figure className="card-banner img-holder" >
                  <img src={catagory7} width="600" height="690" loading="lazy" alt="Event"
                    className="img-cover"/>
                </figure>

              </a>
            </li>

            <li className="category-item" data-reveal>
              <a href="#" className="category-card">

                <h3 className="h4 card-title">Food,</h3>

                <figure className="card-banner img-holder" >
                  <img src={catagory10} width="600" height="690" loading="lazy" alt="Food"
                    className="img-cover"/>
                </figure>

              </a>
            </li>

            <li className="category-item" data-reveal>
              <a href="#" className="category-card">

                <h3 className="h4 card-title">Health & Wellnes.</h3>

                <figure className="card-banner img-holder" >
                  <img src={catagory11} width="600" height="690" loading="lazy"
                    alt="Health & Wellnes" className="img-cover"/>
                </figure>

              </a>
            </li>

          </ul>

        </div>
      </section>
    );
};

export default Catagory;