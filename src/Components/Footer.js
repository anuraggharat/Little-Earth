import React from 'react'
import {FaInstagram , FaFacebookF, FaGoogle, FaWhatsapp} from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className="grey darken-4  row m-0 pt-4">
                <div className="row m-0">
                    <div className="row ">
                        {/* <h5 className="white-text center">Get in touch with us!</h5> */}
                        <div className="flex d-row white-text">
                                <a>
                                <FaFacebookF className="social-media green-text"/>
                                </a>
                                <a>
                                <FaInstagram  className="social-media green-text"/>
                                </a>
                                <a>
                                <FaWhatsapp  className="social-media green-text"/>
                                </a>
                                <a>
                                <FaGoogle className="social-media green-text"/>
                                </a>
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
