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
  faWeibo,
} from "@fortawesome/free-brands-svg-icons"
import {Logo} from "../components/index"
import { JingDaily } from "../svgs"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => (
  <>
  <Link to="/"><a className="pt-16 block"><Logo /></a>
  </Link>
  <footer className="max-w-6xl mx-auto flex flex-col pt-24 md:pt-48 mb-8 md:mb-0 py-6">
    
    <div className="hidden md:block w-12 mb-4 hover:w-48">
      <img src="/jingdaily-qr-code.jpg" alt="Jing Daily WeChat" />
    </div>
    <nav className=" w-full flex flex-col-reverse md:flex-row flex-1 mx-auto justify-center md:justify-between items-center">
      <span className="block text-center w-full md:hidden">
        {/* <JingDaily /> */}
        &copy; 2021
      </span>
      <ul className="hidden list-nav md:flex flex-col md:flex-row items-center">
        <li>
          <span className="mr-3  flex">
            {/* <JingDaily /> */}
            &copy; 2021
          </span>
        </li>
        <li className="mr-3 hidden lg:block">|</li>
        <li className="mr-3 hidden lg:block">
          <OutboundLink
            href="https://jingculturecommerce.com/"
            title="Jing Culture and Commerice"
            className="whitespace-nowrap"
            target="_blank"
          >
            Culture &amp; Commerce
          </OutboundLink>
        </li>
        <li className="mr-3 hidden lg:block">|</li>
        <li className="mr-3 hidden lg:block">
          <OutboundLink
            href="https://jingdaily.com"
            title="Jing Daily"
            target="_blank"
          >
            Jing Daily
          </OutboundLink>
        </li>
        <li className="mr-3 hidden lg:block">|</li>
        <li className="mr-3">
          <OutboundLink href="https://jingdaily.com/advertise/" target="_blank">
            Advertise
          </OutboundLink>
        </li>
        <li className="mr-3 hidden md:block">|</li>
        <li className="mr-3">
          <Link to="/about#Contact">Contact</Link>
        </li>
      </ul>
      <nav className="hidden md:grid grid-cols-6 gap-3 items-center text-xs">
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
        <OutboundLink
          href="https://weibo.com/jingdaily"
          title="Jing Daily Weibo"
        >
          <FontAwesomeIcon icon={faWeibo} />
        </OutboundLink>
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
    <small className="uppercase mt-2 text-center md:text-left">
      Jing Daily Modern Collectibles is a Trademark of Jing Daily.
      <br />
      Jing Daily offers resale of collectibles through consignment but is not
      otherwise affiliated with any featured brands
    </small>
    <div className="md:hidden w-48 md:w-24 mx-auto mt-8">
      <img src="/jingdaily-qr-code.jpg" alt="Jing Daily WeChat" />
    </div>
    {/* <nav className="text-xs grid grid-cols-5 gap-2 items-end mb-px">
            <a href="https://www.facebook.com/jingdaily/" title="Jing Daily Facebook"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="weixin://dl/chat?Jing_Daily_China" title="Jing Daily WeChat"><FontAwesomeIcon icon={faWeixin} /></a>
            <a href="https://twitter.com/JingDaily" title="Jing Daily Twitter"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://www.linkedin.com/company/jing-daily" title="Jing Daily LinkedIm"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <a href="https://www.instagram.com/jingdaily/" title="Jing Daily Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
        </nav> */}
    {/* <small>(c)2021</small> */}
  </footer>
  </>
)

export default Footer
