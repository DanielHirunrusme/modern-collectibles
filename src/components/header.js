import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { JingDaily } from "../svgs"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <>
      {!menuOpen ? (
        <header className="fixed bg-white left-0 top-0 w-full z-50">
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
                  <span>Modern</span>&ensp;<span>Collectibles</span>
                </Link>
              </h1>
              <div className="hidden lg:block">LV×Supreme, 2017</div>
              <nav className="main-nav grid-flow-col gap-4 hidden md:grid">
                <Link to="/shop">Shop</Link>
                <Link to="/read">Read</Link>
                <Link to="/about">About</Link>
              </nav>
              <a
                className="hidden md:block"
                href="https://weibo.com/jingdaily"
                title="Read WeChat Articles"
                target="_blank"
              >
                微信
              </a>
              <button className="block md:hidden" onClick={toggleMenu}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="24" height="24" fill="white"/>
<line x1="8" y1="4.5" x2="24" y2="4.5" stroke="black"/>
<line x1="8" y1="10.5" x2="24" y2="10.5" stroke="black"/>
<line x1="8" y1="16.5" x2="24" y2="16.5" stroke="black"/>
</svg>

              </button>
            </div>
          </div>
        </header>
      ) : (
        <header className="bg-white z-50 fixed top-0 left-0 h-full w-full overflow-y-scroll flex justify-between flex-col">
          <div className="mx-8 mt-5 relative">
          <button className="absolute right-0 top-0 md:hidden" onClick={toggleMenu}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="24" height="24" fill="white"/>
<line x1="10.6967" y1="4.98959" x2="22.0104" y2="16.3033" stroke="black"/>
<line x1="9.98959" y1="16.3033" x2="21.3033" y2="4.9896" stroke="black"/>
</svg>

              </button>
          <nav className="text-3xl flex flex-col">
                <Link to="/shop">Shop</Link>
                <Link to="/read">Read</Link>
                <Link to="/about">About</Link>
                <Link to="/about">Contact</Link>
              </nav>
          </div>
          <div className="mx-8 mb-5 flex uppercase items-center"><span className=" mr-2 md:mr-3">
                    <JingDaily />
                  </span>
                  <span>Modern</span>&ensp;<span>Collectibles</span></div>
        </header>
      )}
    </>
  )
}

export default Header
