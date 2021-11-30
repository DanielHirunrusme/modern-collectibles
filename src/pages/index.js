import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import {
  AuthorCard,
  Button,
  Draw,
  Catalogue,
  Header,
  Hero,
  Layout,
  Newsletter,
  PostCard,
  Section,
  Seo,
} from "../components/index"

import Backpack from "../static/backpack.svg"
import Bandana from "../static/bandana.svg"
import Belt from "../static/belt.svg"
import Clutch from "../static/clutch.svg"
import Duffle from "../static/duffle.svg"
import Hoodie from "../static/hoodie.svg"
import Shirt from "../static/shirt.svg"
import Shoe from "../static/shoe.svg"
import Skateboard from "../static/skateboard.svg"
import Trunk from "../static/trunk.svg"
import Wallet from "../static/wallet.svg"

const author1 = {
  name: "Michael Lau"
}

const author2 = {
  name: "Sarah Andelman"
}

const author3 = {
  name: "Hanan Besovic"
}

const author4 = {
  name: "Iolo Edwards"
}

const posts = [
  {
    title: "LV×Supreme Retrospective",
    excerpt:
      "Louis Vuitton created the ultimate collection when it joined forces with streetwear giant Supreme.",
    author: "Emily Jensen",
  },
  {
    title: "LV×Supreme Retrospective",
    excerpt:
      "Louis Vuitton created the ultimate collection when it joined forces with streetwear giant Supreme.",
    author: "Emily Jensen",
  },
  {
    title: "LV×Supreme Retrospective",
    excerpt:
      "Louis Vuitton created the ultimate collection when it joined forces with streetwear giant Supreme.",
    author: "Emily Jensen",
  },
  {
    title: "LV×Supreme Retrospective",
    excerpt:
      "Louis Vuitton created the ultimate collection when it joined forces with streetwear giant Supreme.",
    author: "Emily Jensen",
  },
]

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div></div>

    <Hero
      title="LV×Supreme"
      subTitle="In Partnership with Sotheby’s"
    >
      <div className="absolute top-1/2 left-0">
      </div>
      {/* <div className="absolute bottom-0 right-0 transform translate-x-1/2"><Draw svg={Trunk} /></div> */}
    </Hero>
    <div className="lg:mt-24"><Draw svg={Belt} start="autostart" /></div>
    {/* <PostCard post={firstPost} /> */}
    <Section title="Newsletter">
      <Newsletter />
    </Section>
    <Section title="Reading">
      {/* {posts.map((post)=><PostCard post={post} />)} */}
    </Section>
    <Section title="Catalogue">
      {/* <Catalogue slides={slides} /> */}
      {/* <Button text="Shop Full Catalogue" url="/shop" /> */}
    </Section>
    <Section title="Through Experts Eyes">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 max-w-6xl mx-auto">
        <div className="">
          <h4>WHO ARE THE EXPERTS?</h4>
          <p>
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
            kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
            amet. Lorem ipsum dolor sit amet, consetetur elitr, sed diam clita
            no sea.
          </p>
          <br />
          <p>
            For more information about future modern collectibles, join our
            mailing list.
          </p>
          <br />
          <Link to="/subscribe">SUBSCRIBE TO NEWSLETTER</Link>
        </div>
        <div className="grid grid-cols-2 gap-4 uppercase text-center md:-mt-3">
          <AuthorCard author={author1} />
          <AuthorCard author={author2} />
          <AuthorCard author={author3} />
          <AuthorCard author={author4} />
        </div>
      </div>
    </Section>
    <Section title="Further Readings">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {posts.map((post)=><PostCard size="small" post={post} />)}
      </div>
      <div className="flex items-center justify-center mt-24"><Link className="primary-button" to="/read">View All Articles</Link></div>

    </Section>
  </Layout>
)

export default IndexPage
