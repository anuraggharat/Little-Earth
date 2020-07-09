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
                        <div className="col l5 s12 pt-5">
                            <img src={logo} className="responsive-img mt-4 logobottom" alt="logo" width="100%" height="100%" />
                        </div>
                        <div className="col l7 s12">
                            <h5 className="name green-text">Little Earth Farms & Nursery</h5>
                            <p>
                            Little Earth Farms and Nursery is a leading commercial landscaping / Horticulture and maintenance company. For Five years the company has maintained its commitment to quality, integrity and service. We believe that your garden can give you more happiness than any other possessions would ever do. It gives immense pride in helping Mother nature in ways of our business, we are driven by that very passion and love.Truly effective Horticulture management requires the ability to deliver a complete range of services. Our services combine intelligent cost control and multi-layer problem solving into a complete landscape management solution.                             </p>
                        </div>
                    </div>
                </div>
                <div className="container">
                <h3>Areas we work in:</h3>
                <p>Garden Care, Composting, Organic Filter, Prunning , Sowing Seeds, Watering, Gardening Methods, Kitchen Gardening, Container Gardening, Indoor Gardening, Indoor Gardening, Indoor Gardening, Vertical Gardening, Permaculture Gardening.</p>
                </div> 
        </section>
    )
}
