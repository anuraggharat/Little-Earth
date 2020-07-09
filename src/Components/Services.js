import React from 'react'
import grass from '../images/grass.png'
import pottedplant from '../images/pottedplant.png'
import treatment from '../images/treatment.png'
import Pest from '../images/insectiside.png'
import Maintain from '../images/maintain.png'
import Irrigation from '../images/irrigation.png'
import Weeding from '../images/weeding.png'




export default function Services() {
    return (
        <section id="services" className="section scrollspy">
            <div className="container"> 
                <div className="row center heading">
                    <h1>Our Services</h1>
                </div>
                <div className="row">
                    <div className="col l6 s12">
                            <img src={Maintain} alt="landscaping" />
                            <h4>Comprehensive Grounds Maintenance Programs </h4>
                            <p className="grey-text darken-3">
                            From month to month and season to season, your garden is managed by experts capable of identifying and reacting to any need in the most effective manner. 
                            </p>
                    </div>
                    <div className="col l6 s12">
                        <img src={pottedplant} alt="potted plant" />
                            <h4>Accurate Diagnosis, Treatment and Prevention</h4>
                            <p className="grey-text darken-3">
                            There are hundreds of plant diseases and pests which demand accurate
diagnosis and treatment is essential in preventing long-term problems. We
have developed the depth of experience to cater to all such needs and
requirements.
</p>
                    </div>
                    </div>

                    <div className="row">
                    <div className="col l6 s12">
                        <img src={treatment} alt="potted plant" />
                            <h4>Expert Horticulture Care </h4>
                            <p className="grey-text darken-3">
                            Our experts apply both education and experience to the design of fertility and pest management programs that meet your unique requirements.                             </p>
                    
                    </div>
                    <div className="col l6 s12">
                        <img src={Pest} alt="potted plant" />

                            <h4>Pest and Rodent eradication services </h4>
                            <p className="grey-text darken-3">
                            Our fertilisation and pest control programs are performed by expert technicians under the careful supervision of experts.
                            </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col l6 s12">
                    <img src={grass} alt="potted plant" />

                            <h4>Lawn</h4>
                            <p className="grey-text darken-3">
We develop gardens according to the latest trends. Our services include landscape design, landscape development, lawn supply and installation  
</p>
                    </div>
                    <div className="col l6 s12">
                    <img src={Weeding} alt="potted plant" />

                            <h4>Weeding and Pruning </h4>
                            <p className="grey-text darken-3">
                            Our experts are available in any season to help you with maintaining your garden and keep it in a healthy and blooming condition! </p>
                    </div>
                    </div>
                    <div className="row">
                    
                    <div className="col l6 s12">
                        <img src={Irrigation} alt="potted plant" />

                            <h4>Irrigation Design & Installation </h4>
                            <p className="grey-text darken-3">
                            The landscape environment depends on water and the correct amounts properly delivered at the right times. We provide prompt service to assure that your irrigation system is consistent 
                            </p>
                    </div>
                    </div>
                    <div className="row">
                        <h5>OTHER SERVICES</h5>
                    <p>
                    <span className="chip teal white-text">Garden Design & Accessory </span>
                    <span className="chip teal white-text">Garden Decor </span>
                    <span className="chip teal white-text">Garden Designing </span>
                    <span className="chip teal white-text">Garden Themes </span>
                    <span className="chip teal white-text">Garden Tools & Supplies </span>
                    <span className="chip teal white-text">Pots/Planters/Containers Gardening Methods   </span>
                    <span className="chip teal white-text">Container Gardening </span>
                    <span className="chip teal white-text">Hydroponics </span>
                    <span className="chip teal white-text">Indoor Gardening </span>
                    <span className="chip teal white-text">Kitchen Gardening </span>
                    <span className="chip teal white-text">Ornamental Gardening  </span>
                    <span className="chip teal white-text">Terrace Gardening </span>   
                    <span className="chip teal white-text">Vertical Gardening  </span>

                  
                </p>
                    </div>
            </div>
        </section>
        
    )
}
