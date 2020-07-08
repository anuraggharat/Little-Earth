import React from 'react'
import logo from '../images/final.png'

export default function About() {
    return (
        <section className="section scrollspy" id="about">
               <div className="container">
                   <div className="row center heading">
                       <h1>About Us</h1>
                   </div>
                    <div className="row">
                        <div className="col l6 s12">
                            <img src={logo} className="responsive-img mt-4" alt="logo" width="100%" height="100%" />
                        </div>
                        <div className="col l6 s12">
                            <h5 className="name green-text">Little Earth Farms & Nursery</h5>
                            <p>Classic Maintenance Services Pvt. Ltd. is India's leading commercial landscaping / Horticulture and maintenance company. For Five years the company has maintained its commitment to quality, integrity and service.</p>
                            <a className="btn mt btn-large" href="#services">Services</a>
                        </div>
                    </div>
                </div> 
        </section>
    )
}
