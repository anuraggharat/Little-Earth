import React from 'react'
import logo from '../images/logoname.png'

export default function About() {
    return (
        <section>
               <div className="container">
                   <div className="row center">
                       <h1>About Us</h1>
                   </div>
                    <div className="row">
                        <div className="col l6 s12">
                            <img src={logo} className="responsive-img mt-4" alt="logo" width="50%" height="100%" />
                        </div>
                        <div className="col l6 s12">
                            <h5>Little Earth Farms & Nursery</h5>
                            <p>Classic Maintenance Services Pvt. Ltd. is India's leading commercial landscaping / Horticulture and maintenance company. For Five years the company has maintained its commitment to quality, integrity and service.</p>
                            <a className="btn" href="#services">Services</a>
                        </div>
                    </div>
                </div> 
        </section>
    )
}
