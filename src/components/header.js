import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { JingDaily } from "../svgs"

const Header = () => (
  <header className="absolute left-0 top-0 w-full z-50">
    <div className="max-w-6xl mx-4 xl:mx-auto my-2">
      <div className="flex justify-between">
    <h1 className="flex">
      <Link className="flex text-base md:text-xl items-center uppercase" to="/">
          <span className=" mt-px mr-2 md:mr-3"><JingDaily /></span>
          <span>Modern</span>&ensp;<span>Collectibles</span>
      </Link>
    </h1>
    <div className="hidden md:block">LV×Supreme, 2017</div>
    <nav className="grid grid-flow-col gap-4"> 
      <Link to="/shop">Shop</Link>
      <Link to="/read">Read</Link>
      <Link to="/read">About</Link>
    </nav>
    
    <a className="hidden md:block" href="#" title="Read WeChat Articles" target="_blank">
        微信
      </a>
    </div>
    </div>
  </header>
)

export default Header
