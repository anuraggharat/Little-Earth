import Carousel from 'react-elastic-carousel'
import SliderItem from "./SliderItem"
import React from 'react'

export default function ItemSlider() {
  return (
    <div>
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
  )
}
