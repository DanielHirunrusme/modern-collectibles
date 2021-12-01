import React from "react"
import { Link } from "gatsby"
import { ProductCard } from "./"
import Slider from "react-slick"

// 1. Get products
// 2. Show schematics in main productshow
// 3. Show product images in card
// 4. Once schematic finishes playing go to next slide

const Catalogue = ({ products }) => {
  console.log({ products })
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div>
      {/* Main Slick */}
      <div>
        {products.map(product => (
          <div>schematic</div>
        ))}
      </div>
      {/* Thumbnails */}
      <div className="flex overflow-x-scroll pb-10 hide-scroll-bar -mx-8">
        <div className="flex flex-nowrap ml-8 ">
        {products.map(product => (
          <div className="inline-block px-2 md:px-4">
             
            <div className="w-48 h-72 md:w-64 md:h-96 max-w-xs overflow-hidden border border-black bg-white ">
            <div className="m-1">
            {product.Images && product.Images[0] && <img src={product.Images[0].thumbnails.large.url} />}
            </div>
              <div className="mx-4">{product.Title}<br/>${product.Price}</div>
              </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Catalogue
