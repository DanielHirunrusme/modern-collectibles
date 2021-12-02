import React, {useState, useRef} from "react"
import { Link } from "gatsby"
import { ProductCard, Popup } from "./"
import Slider from "react-slick"
import { OutboundLink } from "gatsby-plugin-google-gtag"

// 1. Get products
// 2. Show schematics in main productshow
// 3. Show product images in card
// 4. Once schematic finishes playing go to next slide

const Catalogue = ({ products }) => {

  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);
  const ref = useRef();

  console.log({ products })
  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000
  }


  const goToSlide = (index) =>{
    if(ref && ref.current) {
      // console.log(ref);
      ref.current.slickGoTo(index);
    }
  }

  const slickPrev = () => {
    if(ref && ref.current) {
      // console.log(ref);
      ref.current.slickPrev();
    }
  }

  const slickNext = () => {
    if(ref && ref.current) {
      // console.log(ref);
      ref.current.slickNext();
    }
  }

  return (
    <div className="">
      {/* Arrows */}
      <div className="grid grid-cols-12 h-full">
      <div className="col-span-1 -ml-8 md:ml-0">
        <button onClick={slickPrev} className="sticky top-1/2 col-span-1">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="arrow"
          >
            <g clip-path="url(#clip0_711_1829)">
              <path
                d="M34.3851 43.7765L8.36703 24L34.3851 4.22349L34.3851 43.7765Z"
                stroke="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_711_1829">
                <rect width="48" height="48" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>

      <div className="col-span-1 order-last text-right items-end">
        <button onClick={slickNext} className="ml-3 md:ml-0  sticky top-1/2 col-span-1">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="arrow"
          >
            <g clip-path="url(#clip0_711_1829)">
              <path
                d="M17.1557 4.22349L43.1737 24L17.1557 43.7765L17.1557 4.22349Z"
                stroke="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_711_1829">
                <rect width="48" height="48" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
      {/* Main Slick */}
      <Slider ref={ref} className="col-span-10" {...settings}>
        {products.map(product => (
          <div
            className="relative h-screen w-full"
            key={`schematic-${product.ID}`}
          >
            {product.SVG && product.SVG[0].url ? (
              <img
                className="h-full w-full absolute top-0 left-0 object-contain object-center"
                src={product.SVG[0].url}
                alt={product.Title}
              />
            ) : (
              <></>
            )}
          </div>
        ))}
      </Slider>
      </div>
      {/* Thumbnails */}
      <div className="flex -mx-8 overflow-x-scroll pb-10 hide-scroll-bar sticky bottom-0">
        <div className="flex flex-nowrap ml-8 ">
          {products.map((product, index) => (
            <div
              key={`product-card-${product.ID}`}
              className="inline-block pr-4 md:pr-8"
              onClick={()=> goToSlide(index)}
            >
              <div className="w-36 h-52 flex justify-between flex-col  max-w-xs overflow-hidden border border-black bg-white ">
                <div className="m-1 product-card-image">
                
                    {product.Images && product.Images[0] && (
                      <img src={product.Images[0].thumbnails.large.url} />
                    )}
               
                </div>
                <div className="flex border-t border-black w-full flex-1">
                  
                    <div className="h-full w-1/2 text-center flex items-center justify-center hover:bg-black hover:text-white border-r border-black">
                    <Popup product={product}>View</Popup>
                    </div>
                  
                  <OutboundLink href={product.URL} target="_blank" className="text-center w-1/2 justify-center flex items-center hover:bg-black hover:text-white">
                    Buy
                  </OutboundLink>
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
