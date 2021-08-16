import React from "react";
import "../stylesheets/Gallery.css";
import egg from "../assets/images/desktop/image-transform.jpg";
import glass from "../assets/images/desktop/image-stand-out.jpg";

function Gallery() {
  return (
    <>
      <div className="gallery">
        <div id="about" className="first passage1">
          <h1 className="passage-heading">Transform your Brand</h1>
          <p className="passage-para">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <span>Learn more</span>
        </div>
        <img src={egg} alt="" className="egg" />
        <img src={glass} alt="" className="glass" />
        <div className="second passage1">
          <h1 className="passage-heading">Stand out to the right audience</h1>
          <p className="passage-para">
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <span>Learn more</span>
        </div>
        <div className="fifth passage2">
          <h1>Graphic Design</h1>
          <p>
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </p>
        </div>
        <div className="sixth passage2">
          <h1>Photography</h1>
          <p>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
        </div>
      </div>
    </>
  );
}

export default Gallery;
