import React from "react";
import useFetchData from "../hooks/useFetchData";

const Skills = () => {
  const { userData } = useFetchData();

  const sortCategories = (categories) => {
    return categories.sort((a, b) => a.sequence - b.sequence);
  };

  return (
    <section className="section category" aria-label="photography category">
      <div className="container">
        <ul className="category-list">
          {userData &&
            sortCategories(userData.skills).map((skill) => (
              <li className="category-item" data-reveal>
                <a href="#" className="category-card">
                  <h3 className="h4 card-title">{skill?.name}, </h3>

                  <figure className="card-banner img-holder">
                    <img
                      src={skill?.image?.url}
                      width="600"
                      height="690"
                      loading="lazy"
                      alt="Landscape"
                      className="img-cover"
                    />
                  </figure>
                </a>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
