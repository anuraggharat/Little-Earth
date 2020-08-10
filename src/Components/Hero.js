import React, { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import pic1 from "../images/image1.jpeg";
import pic2 from "../images/image2-min.jpg";
import pic3 from "../images/helle.jpg";
import pic5 from "../images/image5-min.jpg";

export default function Hero() {
  useEffect(() => {
    var elems = document.querySelectorAll(".slider");
    var instances = M.Slider.init(elems, {
      indicators: true,
      height: 700,
    });
  }, []);

  return (
    <section className=" scrollspy" id="home">
      <div class="slider">
        <ul class="slides">
          <li>
            <img src={pic1} alt="pic1" />
            <div className="caption right-align pt-5 light-bg">
              <h1 className="white-text bold-text ">Little Earth</h1>
              <h3 className="light white-text text-lighten-3">
                Knot with Nature.
              </h3>
              <a className="btn btn-large" href="#about">
                Know more
              </a>
            </div>
          </li>
          <li>
            <img src={pic2} alt="pic2" />
            <div className="caption right-align">
              <h1>Bringing Nature to your Doorstep!</h1>
              <h5 className="light white-text text-lighten-3">
                Contact us for new range of house plants.
              </h5>
              <a className="btn btn-large" href="#contact">
                Contact now
              </a>
            </div>
          </li>
          <li>
            <img src={pic5} alt="pic3" />
            <div className="caption center-align">
              <h1>Easy Lawn Maintainence and Care.</h1>
              <h5 className="light grey-text text-lighten-3">
                Now avialable in Alibag.
              </h5>
              <a className="btn btn-large" href="#services">
                Learn More!
              </a>
            </div>
          </li>
          <li>
            <img src={pic3} alt="pic4" />
            <div className="caption center-align pt-5">
              <h1>Flower Plants of all Sizes.</h1>
              <h5 className="light grey-text text-lighten-3">
                All Varieties of Flowers at LittleEarth .
              </h5>
              <a className="btn btn-large" href="#contact">
                Get in touch!
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
