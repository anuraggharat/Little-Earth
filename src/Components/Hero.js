import React, { useEffect } from 'react'
import M from  'materialize-css/dist/js/materialize.min.js';
import pic1 from '../images/image1.jpeg'
import pic2 from '../images/image2.jpg'
import pic3 from '../images/image3.jpg'
import pic4 from '../images/image4.jpg'




export default function Hero() {

    useEffect(()=>{
        var elems = document.querySelectorAll('.slider');
        var instances = M.Slider.init(elems, {
            indicators:true,
            height:700
        });
    },[])

    return (
        <section className=" scrollspy" id="home">
          <div class="slider">
      
      <ul class="slides">
      
        <li>
          <img src={pic1} alt="pic1"/> 
          <div className="caption right-align pt-5 ">
            <h1 className="white-text bold-text ">Little Earth</h1>
            <h3 className="light white-text text-lighten-3">Subtle knot with Nature.</h3>
            <button className="btn btn-large">Know  more</button>
          </div>
        </li>
        <li>
          <img src={pic2} alt="pic2"  /> 
          <div className="caption left-align">
            <h1>Bringing Nature to your Doorstep!</h1>
            <h5 className="light grey-text text-lighten-3">Contact us for new range of house plants.</h5>
            <a className="btn btn-large">Contact now</a>
          </div>
        </li>
        <li>
          <img src={pic3}  alt="pic3"/> 
          <div className="caption center-align">
            <h1>Services regarding Planting and Care.</h1>
            <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
            <a className="btn btn-large">Contact now</a>
          </div>
        </li>
        <li>
          <img src={pic4} alt="pic4"/> 
          <div className="caption center-align">
            <h1>This is our big Tagline</h1>
            <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
            <a className="btn btn-large">Contact now</a>
    
          </div>
        </li>
      </ul>
    </div>
        </section>  
      
    )
}
