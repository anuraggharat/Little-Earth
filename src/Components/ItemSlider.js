import Carousel from 'react-elastic-carousel'
import SliderItem from "./SliderItem"
import React from 'react'

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
       itemsToScroll={3} 
       itemsToShow={3} 
       breakPoints={breakPoints} 
       autoPlaySpeed={1500}
       itemPadding={[10, 20]} 
       enableAutoPlay >
      <SliderItem  img="https://www.shaileshnursery.com/wp-content/uploads/2019/05/gardening-tools-600x450.jpg" text="House" />
      <SliderItem  img="https://cdnk.nurserylive.com/images/nlive150k/home/nurserylive-corporate-gifting-home-page-4.jpg" text="House" />
      <SliderItem  img="https://www.shaileshnursery.com/wp-content/uploads/2019/05/gardening-tools-600x450.jpg" text="House" />
      <SliderItem  img="https://www.shaileshnursery.com/wp-content/uploads/2019/05/gardening-tools-600x450.jpg" text="House" />
      <SliderItem  img="https://www.shaileshnursery.com/wp-content/uploads/2019/05/gardening-tools-600x450.jpg" text="House" />
      <SliderItem  img="https://www.shaileshnursery.com/wp-content/uploads/2019/05/gardening-tools-600x450.jpg" text="House" />
      <SliderItem  img="https://www.shaileshnursery.com/wp-content/uploads/2019/05/gardening-tools-600x450.jpg" text="House" />
      <SliderItem  img="https://www.shaileshnursery.com/wp-content/uploads/2019/05/gardening-tools-600x450.jpg" text="House" />
      


    </Carousel>
    </div>

    </section>
    
  )
}
