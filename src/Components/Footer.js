import React from "react";
import { FaInstagram, FaFacebookF, FaGoogle, FaWhatsapp } from "react-icons/fa";
import logo from "../images/removedbg.png";

export default function Footer() {
  return (
    <footer className="grey lighten-5 row m-0 pt-4">
      <div className="row m-0">
        <div className="row ">
          <div className="row  valign-wrapper">
            <div className="col l6 s12">
              <img src={logo} alt="footer logo" width="100" />
              <h5 className="m-0 name green-text">
                Little Earth Farms & Nursery
              </h5>
              <p className="m-0">Knot With Nature</p>
              <p className="grey-text darken-4">
                Little Earth Farms and Nursery, Ahead Of Harmony Resort , Opp
                Prakash Patil Home , Parur , Karle Khind Alibag
              </p>
              <p>+91-8380032300 | littleearthfarmsandnursery@gmail.com</p>
            </div>
            <div className="col l6 s12  ">
              <a className="right" href="" target="_blank">
                <FaInstagram className="social-media" />
              </a>
              <a
                className="right"
                href="https://api.whatsapp.com/send?phone=+918380032300"
                target="_blank"
              >
                <FaWhatsapp className="social-media" />
              </a>
              <a
                className="right"
                href="mailto:littleearthfarmsandnursery@gmail.com"
                target="_blank"
              >
                <FaGoogle className="social-media" />
              </a>
              <a
                className="right"
                href="https://www.facebook.com/Little-Earth-Farms-and-Nursery-421292694868761/?hc_ref=PAGES_TIMELINE"
                target="_blank"
              >
                <FaFacebookF className="social-media" />
              </a>
            </div>
          </div>
        </div>
        <div className="row m-0 black py-3">
          <div className="left black white-text">
            <p>2020.All Rights Reserved.</p>
          </div>
          <div className="right black white-text">
            <p>
              Designed and Developed by{" "}
              <a
                target="_blank"
                href="http://anuraggharat.me/"
                className="deep-orange-text"
              >
                Anurag Gharat
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
    // <footer>
    //     <div className="row w-100 m-0 footer-part-1 white-text center">
    //             <h1>The Little Earth </h1>
    //             <h2>Farms and Nursery</h2>
    //     </div>
    //     <div className="row dark black-text">
    //         <div className="container green center" >
    //             <p className=" center"><FaFacebookF />   https://littleearthfarmsandnursery.com/</p>
    //             <p className="valign-wrapper"><i class="material-icons">language</i>   https://littleearthfarmsandnursery.com/</p>
    //             <p className="valign-wrapper"><i class="material-icons">language</i>   https://littleearthfarmsandnursery.com/</p>
    //             <p className="valign-wrapper"><i class="material-icons">language</i>   https://littleearthfarmsandnursery.com/</p>
    //         </div>
    //     </div>
    // </footer>
  );
}
