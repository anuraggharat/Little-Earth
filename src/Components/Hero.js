import React, { useEffect } from 'react'
import M from  'materialize-css/dist/js/materialize.min.js';


export default function Hero() {

    useEffect(()=>{
        var elems = document.querySelectorAll('.slider');
        var instances = M.Slider.init(elems, {
            indicators:false,
            height:500
        });
    },[])

    return (
        
  <div class="slider">
      
  <ul class="slides">
  
    <li>
      <img src="https://lorempixel.com/580/250/nature/1" /> 
      <div class="caption center-align">
        <h3>This is our big Tagline!</h3>
        <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
        <button className="btn btn-large">Know  more</button>
      </div>
    </li>
    <li>
      <img src="https://lorempixel.com/580/250/nature/2" /> 
      <div class="caption left-align">
        <h3>Left Aligned Caption</h3>
        <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
      </div>
    </li>
    <li>
      <img src="https://lorempixel.com/580/250/nature/3"/> 
      <div class="caption right-align">
        <h3>Right Aligned Caption</h3>
        <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
      </div>
    </li>
    <li>
      <img src="https://lorempixel.com/580/250/nature/4" /> 
      <div class="caption center-align">
        <h3>This is our big Tagline!</h3>
        <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
      </div>
    </li>
  </ul>
</div>
    )
}
