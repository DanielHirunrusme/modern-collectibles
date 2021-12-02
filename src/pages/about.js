import React from "react"
import { Link } from "gatsby"
import { Layout, Seo, Table, Section } from "../components/index"
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
const AboutPage = () => {
  return (
    <Layout>
      <Seo title="Shop" />
      <div className="">
        <Section title="About Modern Collectibles">
          {/* <h1>About Jing Daily Modern Collectibles</h1> */}
          <div className="rte ">
            <p>
              Jing Daily Modern Collectibles is a new mindset that
              contextualizes and defines highly sought-after products, ranging
              from sneakers and handbags to toys and jewelry. This new world
              merges editorial with commerce to take a deeper look at the
              products that define modern luxury, serving as a handbook for both
              consumers and brands. At the core of Jing Daily’s exploration is
              the friction within the words “modern” and “collectibles''. In the
              age of digital media and immediacy, a product’s collectible value
              is not defined by time, but by demand and ingenuity. Here, our
              focus is on the brands and creators that break and subvert the
              traditional mold of what reaches collectible status. Jing Daily
              Modern Collectibles creates a both physical and digital
              experience, giving consumers the ability to buy products and
              interact with content online. Our first activation comes in
              partnership with Sotheby’s, where together we will be selling 117
              pieces from the Louis Vuitton x Supreme collection. For more on
              modern collectibles,{" "}
              <Link to={"/read/what-becomes-a-luxury-legend-most"}>
                read our full criteria and parameters
              </Link>
              .
            </p>
          </div>
          <Section title="About Jing Daily">
            <div className="rte">
              <p>
                Launched in 2009, Jing Daily is the leading digital publication
                on luxury consumer trends in China. It is our mission to
                understand the forces shaping the future of the luxury industry
                by bringing our readers the latest news, analysis, features, and
                reports exploring developments in that landscape. We seek to
                understand how the definition of luxury, and by turn its
                consumption, are changing, how the digital landscape in China is
                developing, and how brands are adapting and taking advantage of
                those changes. Our readers are industry leaders seeking to
                understand China’s complex and rapidly evolving luxury industry.
                Jing Daily is the flagship publication of the Jing Group, which
                also includes China Film Insider, MOVE THE MIND, Jing Travel,
                and Jing Culture &amp; Commerce. Together, the Jing Group is one
                of the most trusted English-language sources of news and
                information about global trends in culture, technology, and the
                business of luxury and fashion, including Chinese culture and
                commerce, for institutions, companies, and professionals
                worldwide. Jing Daily offers resale of collectibles through
                consignment but is not otherwise affiliated with any featured
                brands.
              </p>
            </div>
          </Section>
        </Section>
        <Section title="Inquiries">
          <div
            id="Contact"
            className="grid grid-cols-2 gap-8 text-center max-w-xl mx-auto"
          >
            <div className="aspect-w-4 aspect-h-4 border flex items-center justify-center border-black">
              <a
                href="mailto:editorial@jingdaily.com"
                className="default-button flex items-center justify-center"
              >
                EDITORIAL
              </a>
            </div>
            <div className="aspect-w-4 aspect-h-4 border  flex items-center justify-center border-black">
              <a
                href="mailto:daphne@jingdaily.com"
                className="default-button flex items-center justify-center"
              >
                PARTNERSHIP
              </a>
            </div>
          </div>
        </Section>
        <Section title="Social">
          <nav className="max-w-6xl mx-auto grid grid-cols-5 gap-3 items-center text-base">
            <a
              href="https://www.facebook.com/jingdaily/"
              title="Jing Daily Facebook"
              className="aspect-w-1 aspect-h-1 default-button border border-black"
              target="_blank"
            >
              <div className=" items-center justify-center text-center flex">
                <FontAwesomeIcon icon={faFacebookF} />
              </div>
            </a>
            <a
              href="weixin://dl/chat?Jing_Daily_China"
              title="Jing Daily WeChat"
              className="aspect-w-1 aspect-h-1 default-button border border-black"
              target="_blank"
            >
              <div className=" items-center justify-center text-center flex">
                <FontAwesomeIcon icon={faWeixin} />
              </div>
            </a>
            <a
              href="https://twitter.com/JingDaily"
              title="Jing Daily Twitter"
              className="aspect-w-1 aspect-h-1 default-button border border-black"
            >
              <div className=" items-center justify-center text-center flex">
              <FontAwesomeIcon icon={faTwitter} />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/company/jing-daily"
              title="Jing Daily LinkedIn"
              className="aspect-w-1 aspect-h-1 default-button border border-black"
              target="_blank"
            >
              <div className=" items-center justify-center text-center flex">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </div>
            </a>
            <a
              href="https://www.instagram.com/jingdaily/"
              title="Jing Daily Instagram"
              className="aspect-w-1 aspect-h-1 default-button border border-black"
              target="_blank"
            >
              <div className=" items-center justify-center text-center flex">
                <FontAwesomeIcon icon={faInstagram} />
              </div>
            </a>
          </nav>
        </Section>
        <Section title="Team">
          <div class="rte">
            <ul>
              <li>PUBLISHER: Larry Warsh</li>
              <li>EDITOR: Enrique Menendez</li>
              <li>DESIGN: Daniel Hirunrusme, Bryan Chang</li>
              <li className="max-w-sm">
                <br />
                CONTRIBUTORS:
                <br />
                Hassan Ali Khan, Marc Einsele, Julienna Law, Emily Jensen, Jason
                Dike, Haitong Zheng, Daphne Hsia
              </li>
            </ul>
          </div>
        </Section>
      </div>
    </Layout>
  )
}

export default AboutPage
