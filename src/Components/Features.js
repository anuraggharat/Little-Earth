import React from 'react'
import Rentplant from '../images/rentaplant2.jpg'
export default function Features() {
    return (
       <section className="section scrollspy" id="features">
            <div className="container">
            <div className="row center heading">
                <h1>Features</h1>
            </div>
            <div className="row pt-5">
            <div className="col l6 s12">
                <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRl3nn8ubbb717YuBG5TVk7uPEp-fepeHPeYg&usqp=CAU"} alt="rent plant" className="responsive-img" width="100%" height="100%" />

                    
                </div>
                <div className="col l6 s12">
                <blockquote>
                    <h3>Tree Transplanting</h3>
                    </blockquote>
                    <p>This is a much more environmentally friendly way to deal with problem trees. This is a specialised service and we can proudly say that we have successfully undertaking many a transplanting jobs with very encouraging results.</p>
                   </div>
                   
            </div>

            <div className="row pt-5">
            <div className="col l6 s12">
                    <blockquote>
                    <h3>Rent A Plant!</h3>
                    </blockquote>
                    <p>Rent-a-Plant (tm) on a daily, monthly or yearly contract</p>
                    <p>This includes the services of our gardener who visits customer premises thrice a week for regular watering, fertilizing, pruning and general maintenance of the plants hired.</p>
                </div>
                <div className="col l6 s12">
                    <img src={Rentplant} alt="rent plant" className="responsive-img" width="100%" height="100%" />
                </div>
            </div>
        </div>
       </section>
    )
}
