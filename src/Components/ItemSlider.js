import Carousel from 'react-elastic-carousel'
import SliderItem from "./SliderItem"
import React from 'react'
import cactus from '../images/cactus.jpg'
import aquariumplants from '../images/aquariumplants.jpg'
import ceramicpots from '../images/ceramicpots.jpg'
import fertilizer from '../images/fertilizer.jpg'
import gardenfurniture from '../images/gardenfurniture.jpg'
import gardeniri from '../images/gardeniri.jpg'
import homedecor from '../images/homedecor.jpg'
import indoorplants from '../images/indoorplants.jpg'
import plantseeds from '../images/plantseeds.jpg'
import plasticpot from '../images/plasticpot.jpg'
import gardeentools from '../images/gardentools.jpg'




export default function ItemSlider() {

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 3, itemsToScroll: 3 },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ]

  return (
    <section className="section" id="shop">
      <div className="container center heading">
        <h1>Available Products!</h1>
      </div>
<div className="row pt-5">
       <Carousel 
       itemsToScroll={1} 
       itemsToShow={4} 
       breakPoints={breakPoints} 
       autoPlaySpeed={2500}
       itemPadding={[10, 20]} 
       enableAutoPlay >
      <SliderItem  img={cactus} text="Cactus" color="black-text" />
      <SliderItem  img={aquariumplants} text="Aquarium Plants" color="black-text" />
      <SliderItem  img={ceramicpots} text="Ceramic Pots" color="white-text" />
      <SliderItem  img={fertilizer} text="Plant Fertilizer" color="white-text" />
      <SliderItem  img={gardenfurniture} text="Garden Furniture" color="white-text" />
      <SliderItem  img={gardeniri} text="Garden Irrigation" color="white-text" />
      <SliderItem  img={homedecor} text="Home Plant Decor" color="white-text" />
      <SliderItem  img={indoorplants} text="Indoor Plants" color="white-text" />
      <SliderItem  img={plantseeds} text="Plant Seeds" color="white-text" />
      <SliderItem  img={plasticpot} text="Plastic Pot" color="white-text" />
      <SliderItem  img={gardeentools} text="Garden Tools" color="white-text" />

      


    </Carousel>
    </div>

    </section>
    
  )
}
