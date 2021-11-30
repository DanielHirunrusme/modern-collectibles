import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
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
import { JingDaily } from "../svgs"

const Footer = () => (
  <footer className="max-w-6xl mx-auto flex flex-col pt-48">
    <nav className=" w-full flex flex-col-reverse md:flex-row flex-1 mx-auto justify-center md:justify-between items-center">
      <a className="mr-3 flex">
        <JingDaily />
        &copy;2021
      </a>
      <ul className="flex flex-col md:flex-row items-center my-6">
        <li className="mr-3">
          <a
            href="#"
            title="Jing Culture and Commerice"
            className="whitespace-nowrap"
          >
            Culture &amp; Commerce
          </a>
        </li>
        <li className="mr-3 hidden md:block">|</li>
        <li className="mr-3">
          <a href="#" title="China Film Insider">
            China Film Insider
          </a>
        </li>
        <li className="mr-3 hidden md:block">|</li>
        <li className="mr-3">
          <Link to="/advertise">Advertise</Link>
        </li>
      </ul>
      <nav className="grid grid-cols-5 gap-3 text-sm items-center">
        <a
          href="https://www.facebook.com/jingdaily/"
          title="Jing Daily Facebook"
        >
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="weixin://dl/chat?Jing_Daily_China" title="Jing Daily WeChat">
          <FontAwesomeIcon icon={faWeixin} />
        </a>
        <a href="https://twitter.com/JingDaily" title="Jing Daily Twitter">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          href="https://www.linkedin.com/company/jing-daily"
          title="Jing Daily LinkedIm"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a
          href="https://www.instagram.com/jingdaily/"
          title="Jing Daily Instagram"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </nav>

      {/* <ul className="flex">
                <li className="mr-3"><Link to="/about">About</Link></li>
                <li className="mr-3"><Link to="/about#contact">Contact</Link></li>
                <li className="mr-3"><Link to="/advertise">Advertise</Link></li>
            </ul> */}
      {/* <ul className="flex">
                <li><a href="#" title="WeChat">WeChat</a></li>
                <li><a href="#" title="Facebook">Facebook</a></li>
                <li><a href="#" title="LinkedIn">LinkedIn</a></li>
                <li><a href="#" title="Twitter">Twitter</a></li>
                <li><a href="#" title="Instagram">Instagram</a></li>
            </ul> */}
    </nav>
    {/* <nav className="text-xs grid grid-cols-5 gap-2 items-end mb-px">
            <a href="https://www.facebook.com/jingdaily/" title="Jing Daily Facebook"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="weixin://dl/chat?Jing_Daily_China" title="Jing Daily WeChat"><FontAwesomeIcon icon={faWeixin} /></a>
            <a href="https://twitter.com/JingDaily" title="Jing Daily Twitter"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://www.linkedin.com/company/jing-daily" title="Jing Daily LinkedIm"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <a href="https://www.instagram.com/jingdaily/" title="Jing Daily Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
        </nav> */}
    {/* <small>(c)2021</small> */}
  </footer>
)

export default Footer
