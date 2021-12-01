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
    <div className="-mx-8">
      {/* Main Slick */}
      <Slider options={settings}>
      
        {products.map(product => (
          <div className="relative h-screen w-full" key={`schematic-${product.ID}`}>{product.SVG && product.SVG[0].url ? <img className="h-full w-full absolute top-0 left-0 object-contain object-center" src={product.SVG[0].url} alt={product.Title} /> : <></>}</div>
        ))}
      </Slider>
      {/* Thumbnails */}
      <div className="flex overflow-x-scroll pb-10 hide-scroll-bar sticky bottom-0">
        <div className="flex flex-nowrap ml-8 ">
        {products.map(product => (
          <div key={`product-card-${product.ID}`} className="inline-block pr-4 md:pr-8">
             
            <div className="w-36 h-52 flex justify-between flex-col  max-w-xs overflow-hidden border border-black bg-white ">
            <div className="m-1">
            {product.Images && product.Images[0] && <img src={product.Images[0].thumbnails.large.url} />}
            </div>
            <div className="flex border-t border-black">
              <a className="flex-1 w-1/2 text-center border-r border-black p-4 block">View</a>
              <a className="flex-1 w-1/2 text-center p-4 block">Buy</a>
            </div>
              </div>
              {/* <div className="mt-2">{product.Title}<br/>${product.Price}</div> */}

          </div>
        ))}
        </div>
      </div>
      {/* <div className="flex overflow-x-scroll pb-10 hide-scroll-bar -mx-8">
        <div className="flex flex-nowrap ml-8 ">
        {products.map(product => (
          <div key={`product-card-${product.ID}`} className="inline-block pr-4 md:pr-8">
             
            <div className="w-48 h-64 md:w-48 md:h-64 flex justify-between flex-col  max-w-xs overflow-hidden border border-black bg-white ">
            <div className="m-1">
            {product.Images && product.Images[0] && <img src={product.Images[0].thumbnails.large.url} />}
            </div>
            <div className="flex border-t border-black">
              <a className="flex-1 w-1/2 text-center border-r border-black p-4 block">View</a>
              <a className="flex-1 w-1/2 text-center p-4 block">Buy Now</a>
            </div>
              </div>

          </div>
        ))}
        </div>
      </div> */}
    </div>
  )
}

export default Catalogue
