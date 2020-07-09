import React from 'react'
import {FaInstagram , FaFacebookF, FaGoogle, FaWhatsapp} from 'react-icons/fa'
import logo from '../images/final.png'

export default function Footer() {
    return (
        <footer className="grey lighten-5 row m-0 pt-4">
                <div className="row m-0">
                    <div className="row ">
                        <div className="row m-0 valign-wrapper">
                            <div className="col l6 s12">
                                <img src={logo} alt="footer logo" width="100" />
                                <h5 className="m-0 name green-text">Little Earth Farms & Nursery</h5>
                                <p className="m-0">Knot With Nature</p>
                                <p className="grey-text darken-4">Little Earth Farms and Nursery, Ahead Of Harmony Resort , Opp Prakash Patil Home , Parur , Karle Khind Alibag</p>
                            </div>
                            <div className="col l6 s12  ">
                                <a className="right" href="" target="_blank">
                                <FaInstagram  className="social-media"/>
                                </a>
                                <a className="right" href="https://api.whatsapp.com/send?phone=8380032300" target="_blank">
                                <FaWhatsapp  className="social-media"/>
                                </a>
                                <a className="right" href="mailto:littleearthfarmsandnursery@gmail.com" target="_blank">
                                <FaGoogle className="social-media"/>
                                </a>
                                <a className="right" href="https://www.facebook.com/Little-Earth-Farms-and-Nursery-421292694868761/?hc_ref=PAGES_TIMELINE" target="_blank">
                                <FaFacebookF className="social-media"/>
                                </a>
                                </div>
                        </div>
                    </div>
                    <div className="row m-0 black py-3">
                    <div className="left black white-text">
                        <p>2020.All Rights Reserved.</p>
                    </div>
                    <div className="right black white-text">
                        <p>Designed and Developed by <a target="_blank" href="http://anuraggharat.me/" className="deep-orange-text">Anurag Gharat</a></p>
                    </div>
                    </div>
                </div>
        </footer>
    )
}
