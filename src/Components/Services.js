import React from 'react'
import landscaping from '../images/soil.png'
import pottedplant from '../images/pottedplant.png'
import treatment from '../images/treatment.png'
import Pest from '../images/insectiside.png'
import Maintain from '../images/maintain.png'
import Irrigation from '../images/irrigation.png'



export default function Services() {
    return (
        <section id="services" className="section scrollspy">
            <div className="container"> 
                <div className="row center heading">
                    <h1>Our Services</h1>
                </div>
                <div className="row">
                    <div className="col l6 s12">
                            <img src={landscaping} alt="landscaping" />
                            <h4>Integrated Landscaping Maintenance</h4>
                            <p className="grey-text darken-3">Truly effective Horticulture management requires the ability to deliver a complete range of services. Our services combine intelligent cost control and multi-layer problem solving into a complete landscape management solution.</p>
                    </div>
                    <div className="col l6 s12">
                        <img src={pottedplant} alt="potted plant" />
                            <h4>Accurate Diagnosis & Treatment</h4>
                            <p className="grey-text darken-3">There are hundreds of plant diseases and pests in India. Accurate diagnosis and treatment is essential in preventing long-term costly problems. We have developed the depth of experience and organization necessary for accurate, cost-effective diagnosis and treatment.</p>
                    </div>
                    </div>

                    <div className="row">
                    <div className="col l6 s12">
                        <img src={treatment} alt="potted plant" />
                            <h4>Expert Horticulture Services & Care</h4>
                            <p className="grey-text darken-3">Our staffs of experts with advanced horticulture degrees applies both education and experience to the design of fertility and pest management programs that meet the state's unique requirements.</p>
                    </div>
                    <div className="col l6 s12">
                        <img src={Pest} alt="potted plant" />

                            <h4>Pest Control Service and Operators</h4>
                            <p className="grey-text darken-3">Our fertilisation and pest control programs are performed by expert technicians under the careful supervision of highly educated horticultural experts.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col l6 s12">
                    <img src={Maintain} alt="potted plant" />

                            <h4>Comprehensive Grounds Maintenance</h4>
                            <p className="grey-text darken-3">From month to month and season to season, your investment is managed by experts capable of identifying and reacting to any need immediately.</p>
                    </div>
                    <div className="col l6 s12">
                        <img src={Irrigation} alt="potted plant" />

                            <h4>Irrigation Design & Installation</h4>
                            <p className="grey-text darken-3">The landscape environment depends on water â€” the correct amounts properly delivered at the right times. We provide both scheduled and emergency service to assure that your irrigation system consistently.</p>
                    </div>
                    </div>
            </div>
        </section>
        
    )
}
