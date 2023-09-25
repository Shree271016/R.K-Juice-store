import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
const Carousel_Component
 = () => {
  return (
    <>
    <Carousel autoPlay transitionTime={1000} infiniteLoop >
      
    <div className='custom-carousel'><img style={{height:"100%",width:"100%"}} src="./Carousel_images/bg11.JPG" alt="" /> </div>
     <div className='custom-carousel'><img src="./Carousel_images/bg12.jpg" alt="" /> </div>
    <div className='custom-carousel'><img src="./Carousel_images/bg13.JPG" alt="" /> </div>
    <div className='custom-carousel'><img style={{height:"100%",width:"100%"}} src="./Carousel_images/bg14.JPG" alt="" /> </div>
    
        
    </Carousel>
    </>
  )
}

export default Carousel_Component
