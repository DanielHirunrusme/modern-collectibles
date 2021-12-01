import React from 'react'
import Slider from "react-slick";

const Catalog = ({products}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    console.log({products})
    return (
    <div>
        {/* Main Slider */}
{/* <Slider {...settings}></Slider> */}
{/* Horizontal Carousel */}
<div></div>
    </div>
    )
}

export default Catalog;