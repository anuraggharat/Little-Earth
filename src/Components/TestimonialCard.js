import React from 'react'

export default function TestimonialCard() {
    return (
        <div className="carousel-item p-5">
                <div className="card-panel">
                    <div className="row valign-wrapper">
                        <div className="col l5 s5">
                            <img src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="testimonial" className=" circle" height="200px" width="200px" />
                        </div>
                        <div className="col l7 s7">
                            <h5>Anurag Gharat</h5>
                            <p className="grey-text">"Their team understands the technology, design and mindsets of the people. Making strategies and planning for our business in Lucknow from a far place doesn't seem difficult. They understand the customer and what works for them."</p>
                        </div>
                    </div>
                </div>
        </div>
    )
}