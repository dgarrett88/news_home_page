import React from "react";
import "../css/main.css";
import MainImage from "../assets/images/image-web-3-desktop.jpg";

const Main = () => {
  return (
    <div className="main-container">
      <div className="main-left">
        <div className="main-image">
          <img src={MainImage} alt="Main Image" />
        </div>
        <div className="main-articles">
          <div className="main-article-left">
            <p>The Bright Future of Web 3.0?</p>
          </div>
          <div className="main-article-right">
            <p className="main-article-text">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button className="btn">
              <p>READ MORE</p>
            </button>
          </div>
        </div>
      </div>
      <div className="main-right">
        <p className="new-title">New</p>
        <div className="article-preview">
          <h3 className="preview-title">Hydrogen VS Electric Cars</h3>
          <p className="preview-text">
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>
        </div>
        <hr className="spacing-row" />
        <div className="article-preview">
          <h3 className="preview-title">The Downsides of AI Artistry</h3>
          <p className="preview-text">
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
        </div>
        <hr className="spacing-row" />
        <div className="article-preview">
          <h3 className="preview-title">Is VC Funding Drying Up?</h3>
          <p className="preview-text">
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
