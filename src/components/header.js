import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { JingDaily } from "../svgs"
import { Newsletter } from "./"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faFacebookF,
  faWeixin,
  faLinkedinIn,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"
import { OutboundLink } from "gatsby-plugin-google-gtag"


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <>
      {!menuOpen ? (
        <header className="fixed bg-white left-0 top-0 w-full z-20">
          <div className="max-w-6xl mx-8 xl:mx-auto mt-5 mb-5">
            <div className="flex justify-between">
              <h1 className="flex">
                <Link
                  className="flex text-base md:text-xl items-center uppercase"
                  to="/"
                >
                  <span className=" mr-2 md:mr-3">
                    <JingDaily />
                  </span>
                  <span>Modern</span>&ensp;<span>Collectibles &trade;</span>
                </Link>
              </h1>
              <div className="hidden lg:block">
                <Link to="/shop">LV×Supreme, 2017</Link>
              </div>
              <nav className="list-nav grid-flow-col gap-4 hidden md:grid">
                <Link to="/shop">Shop</Link>
                <Link to="/read">Read</Link>
                <Link to="/about">About</Link>
              </nav>

              <OutboundLink 
                className="hidden md:flex items-center justify-center text-sm"
                href="https://weibo.com/jingdaily"
                title="Read WeChat Articles"
                target="_blank"
              >
                微信
              </OutboundLink>
              <button className="block md:hidden" onClick={toggleMenu}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_694_18832)">
                    <rect width="24" height="24" fill="white" />
                    <line
                      x1="-2.18557e-08"
                      y1="3.92653"
                      x2="24"
                      y2="3.92653"
                      stroke="black"
                      strokeWidth="0.5"
                    />
                    <line
                      x1="-2.18557e-08"
                      y1="11.75"
                      x2="24"
                      y2="11.75"
                      stroke="black"
                      strokeWidth="0.5"
                    />
                    <line
                      x1="-2.18557e-08"
                      y1="19.573"
                      x2="24"
                      y2="19.573"
                      stroke="black"
                      strokeWidth="0.5"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_694_18832">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
          </div>
        </header>
      ) : (
        <header className="bg-white z-50 fixed top-0 left-0 h-full w-full overflow-y-scroll flex justify-between flex-col">
          <div className="mx-8 mt-5 relative">
            <button
              className="absolute right-0 top-0 md:hidden"
              onClick={toggleMenu}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="24" height="24" fill="white" />
                <line
                  x1="3.33793"
                  y1="20.3085"
                  x2="20.3085"
                  y2="3.33794"
                  stroke="black"
                  strokeWidth="0.5"
                />
                <line
                  x1="3.69149"
                  y1="3.33794"
                  x2="20.662"
                  y2="20.3085"
                  stroke="black"
                  strokeWidth="0.5"
                />
              </svg>
            </button>
            <nav className="text-3xl grid grid-cols-2">
              <Link to="/shop">Shop</Link>
              <Link to="/read">Read</Link>
              <Link to="/about">About</Link>
              <Link to="/about#Contact">Contact</Link>
            </nav>
            <div className="my-8 pt-4 pb-2 ">
              <small className="block pb-4">
                Jing Daily Modern Collectibles newsletter
              </small>
              <Newsletter />
            </div>
            <nav className="grid grid-cols-8 gap-3 items-center text-base">
              <OutboundLink 
                href="https://www.facebook.com/jingdaily/"
                title="Jing Daily Facebook"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </OutboundLink>
              <OutboundLink 
                href="weixin://dl/chat?Jing_Daily_China"
                title="Jing Daily WeChat"
              >
                <FontAwesomeIcon icon={faWeixin} />
              </OutboundLink>
              <OutboundLink 
                href="https://twitter.com/JingDaily"
                title="Jing Daily Twitter"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </OutboundLink>
              <OutboundLink 
                href="https://www.linkedin.com/company/jing-daily"
                title="Jing Daily LinkedIm"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </OutboundLink>
              <OutboundLink 
                href="https://www.instagram.com/jingdaily/"
                title="Jing Daily Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </OutboundLink>
            </nav>
          </div>
          <div className="mx-8 mb-5 flex uppercase items-center">
            <span className=" mr-2 md:mr-3">
              <JingDaily />
            </span>
            <span>Modern</span>&ensp;<span>Collectibles &trade;</span>
          </div>
        </header>
      )}
    </>
  )
}

export default Header
