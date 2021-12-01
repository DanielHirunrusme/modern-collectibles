import React, {useState} from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { JingDaily } from "../svgs"

const Header = () => { 
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }
  return (
  <header className="fixed bg-white left-0 top-0 w-full z-50">
    <div className="max-w-6xl mx-8 xl:mx-auto mt-4 mb-5">
      <div className="flex justify-between">
    <h1 className="flex">
      <Link className="flex text-base md:text-xl items-center uppercase" to="/">
          <span className=" mr-2 md:mr-3"><JingDaily /></span>
          <span>Modern</span>&ensp;<span>Collectibles</span>
      </Link>
    </h1>
    <div className="hidden lg:block">LV×Supreme, 2017</div>
    <nav className="grid-flow-col gap-4 hidden md:grid"> 
      <Link to="/shop">Shop</Link>
      <Link to="/read">Read</Link>
      <Link to="/about">About</Link>
    </nav>
    <a className="hidden md:block" href="#" title="Read WeChat Articles" target="_blank">
        微信
      </a>
      <button className="block md:hidden" onClick={toggleMenu}>{!menuOpen ? "⋯" : "Close"}</button>
    </div>
    </div>
    
  </header>
)}

export default Header
