import React from "react"
import {Link} from "gatsby"
import {ProductCard} from "./"

// 1. Get slides
// 2. Show schematics in main slideshow
// 3. Show product images in card
// 4. Once schematic finishes playing go to next slide

const Catalogue = ({ slides }) => {
  return (
    <div>
        {/* Main Slick */}
        <div>{slides.map((slide)=><div>slide</div>)}</div>
        {/* Thumbnails */}
        <div>{slides.map((slide)=><div>slide</div>)}</div>
    </div>
  )
}

export default Catalogue;
