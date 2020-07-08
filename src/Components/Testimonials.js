import React, { useEffect } from 'react'
import M from  'materialize-css/dist/js/materialize.min.js';
import TestimonialCard from './TestimonialCard';






export default function Testimonials() {

        useEffect(()=>{
            var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems,{
        indicators:true
    });
        },[])

    return (
        <div className="container">
            <div className="row center">
                <h1>Client Testimonials</h1>
            </div>
            <div className="carousel carousel-slider"  >
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />

        </div>
        </div>
        
    )
}
