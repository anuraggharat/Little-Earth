import Carousel from 'react-elastic-carousel'
import SliderItem from "./SliderItem"
import React from 'react'

export default function ItemSlider() {
  return (
    <section className="section" id="shop">
      <div className="container center heading">
        <h1>Available Products!</h1>
      </div>
<div className="container pt-5">
       <Carousel itemsToScroll={3} itemsToShow={3}>
      <SliderItem/>
      <SliderItem/>
      <SliderItem/>
      <SliderItem/>
      <SliderItem/>
      <SliderItem/>
      <SliderItem/>


    </Carousel>
    </div>

    </section>
    
  )
}
