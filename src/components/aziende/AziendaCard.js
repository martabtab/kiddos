import React from "react";

const BlogCard = ({ title, photo, specs }) => (
  <div>
    <div className="blog-card-container">
      <div className="blog-card" style={{ backgroundImage: `url('${photo}')` }}>
        {/* <div className="blog-image" > */}
        <div className="blog-overlay"></div>
        {/* <img
            className="card-photo"
            src={photo}
            alt="item photo"
            style={{ width: "100%" }}
          /> */}
        {/* </div> */}
        <div className="blog-text">
          <p className="blog-title">
            {title} <small style={{ fontSize: "0.7rem" }}>{specs}</small>
          </p>
          <img
            className="astronaut-image"
            src="/images/astronaut-image.png"
          ></img>
          {/* <small>{specs}</small> */}
          <button className="read-blog">Scopri di più</button>
        </div>
      </div>
    </div>
  </div>
);

export default BlogCard;
