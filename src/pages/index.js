import React, {useState} from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import {
  AuthorCard,
  Draw,
  Catalogue,
  Header,
  Hero,
  Layout,
  Newsletter,
  PostCard,
  Popup,
  Section,
  Seo,
} from "../components/index"
import { ModalProvider } from 'styled-react-modal'

import Backpack from "../../static/backpack.svg"
import Bandana from "../../static/bandana.svg"
import Belt from "../../static/belt.svg"
import Clutch from "../../static/clutch.svg"
import Duffle from "../../static/duffle.svg"
import Hoodie from "../../static/hoodie.svg"
import Shirt from "../../static/shirt.svg"
import Shoe from "../../static/shoe.svg"
import Skateboard from "../../static/skateboard.svg"
import Trunk from "../../static/trunk.svg"
import Wallet from "../../static/wallet.svg"

const author1 = {
  name: "Sarah Andelman",
  image: "../../images/LVS_Experts_Sarah.png",
  pick: "Mickey×Damien Hirst×Swatch",
  description: `"It’s so difficult to just pick one. I think of the recent one like Supreme×Tiffany, I think of old ones like Hello Kitty×Playboy, or KAWS x CDG during Colette. I think of the ones I helped with my new company like APC×Sacai or Undercover x Valentino. I'd also like to mention the Café de Flore x Highsnobiety which I worked on. But in the end, I’ll pick Mickey×Damien Hirst×Swatch. In my eyes, it means "everything is possible. There's no more limit on how any brand or any artist can collaborate together. Now, people get it and want this kind of crossover. But I also appreciate the union of three icons: iconic character, iconic brand, iconic artist. And the result is a perfect balance of all this creativity."`
}

const author2 = {
  name: "Michael Lau",
  pick: "Nike SB×Michael Lau",
  image: "/images/LVS_Experts_Michael.jpg",
  description: `“It was my last collaboration with Sandy, the founder of the Nike Skateboarding division and a close friend of mine, who passed away in 2018. I always had a strong connection to the skateboarding community, so from this collaboration, where proceeds went to support the community in China in memory of Sandy, was especially meaningful. The China-exclusive shoes also commemorated my exhibition at Christie’s Shanghai. Over the past five years, I’ve been going back to my roots of painting and these shoes, to me, are a symbol of how artists like myself, who are born more from a street culture background not from the traditional academic background of the art world, are making waves and challenging convention.”`
}

const author3 = {
  name: "Hanan Besovic",
  pick: "Gucci×Balenciaga FW/2021",
  image: "src/images/LVS_Experts_Hannan.jpg",
  description: `“I cannot refer to it as a collaboration, since it technically is not one: the “Gucciaga” a.k.a. Gucci and Balenciaga hack. For the 100th anniversary of Gucci, the creative director Alessandro Michele decided to present a collection with a different approach to Gucci. Michele, who has been in the house of Gucci since 2016, decided to use the silhouettes and codes from Demna Gvasalia’s work in Balenciaga. The brand is Gucci but the collection has that Balenciaga feel to it. For two houses that historically don’t have a lot in common, aesthetically the collection worked perfectly. On top of it all, what made it so impactful was the show itself. No-one knew what to expect but we were given one of those fashion moments that everyone was talking about for a while and that rarely happens now.”`
}

const author4 = {
  name: "Iolo Edwards",
  image: "images/LVS_Experts_Iolo.jpg",
  pick: "A-Cold-Wall×Dr Martens 2021",
  description: `“A-Cold-Wall previously collaborated with Nike, which is part of the same group as Dr Martens, however it had been a while since they released anything. During that break, A-Cold-Wall evolved and so had their customer. So, a pair of Nike collabs, though they’re always a staple in their wardrobes, wasn’t all that we wanted. Instead, Dr Martens was a natural evolution. It also happened to be Dr Martens’ 50 year anniversary for which they did a number of collaborations throughout the year with high-profile brands and entities; they were all pretty cool, but from just looking at them you can tell that A-Cold-Wall's creative director Samuel Ross stuck to his guns in terms of the development he wanted to give his customers, which is one of the most important elements of collaborating in the fashion world these days.”`
}

const getSVG = () => {
  const SVGS = [Backpack, Bandana, Belt, Duffle, Shirt, Shoe, Skateboard, Trunk, Wallet];
  const Names = ["Christopher Backpack", "Monogram Bandana", "LV Initiales 40 MM Belt 100CM", "Keepall 45", "Jacquard Denim Baseball Jersey", "Run Away Sneaker", "Skateboard", "Trunk", "Porte Carte Simple Red"];
  const rand = Math.floor(Math.random()*SVGS.length);
  const SVG = {svg: SVGS[rand], caption: `The ${Names[rand]} part of the LVxSupreme 2017 collection. Shop All →`};
  return SVG;
}

const IndexPage = () => { 
  
  const data = useStaticQuery(graphql`query FeaturedPosts {
    featured: allApiPost(filter: {id: {in: ["127307"]}}) {
      edges {
        node {
          title
          id
          excerpt
          featured_media
          slug
          author
        }
      }
    }
    posts: allApiPost(filter: {id: {in: ["127308", "127309", "127310"]}}) {
      edges {
        node {
          title
          id
          excerpt
          featured_media
          slug
          author
        }
      }
    }
    all: allApiPost(filter: {id: {nin: ["127307", "127308", "127309", "127310"]}}) {
      edges {
        node {
          title
          id
          excerpt
          featured_media
          slug
          author
        }
      }
    }
    products: allAirtable(filter: {data: {Feature: {eq: true}}}) {
      edges {
        node {
          data {
            Year
            Title
            Status
            Price
            ID
            Feature
            Collection
            SVG {
              url
            }
            Images {
              thumbnails {
                small {
                  url
                }
                large {
                  url
                }
                full {
                  url
                }
              }
            }
          }
        }
      }
    }
  }`)

  const products = data.products?.edges?.map(({node})=> node.data);
  const featured = data.featured?.edges?.map(({node})=>node)
  const posts = data.posts?.edges?.map(({node})=> node);
  const all = data.all?.edges?.map(({node})=> node);
  
  return (
    <ModalProvider>
  <Layout>
    <Seo title="Home" />
    <div></div>

    <Hero
      title="Louis Vuitton×Supreme"
      subTitle="Jing Daily in Partnership with Sotheby’s"
    >
      <div className="my-24 lg:mt-24 lg:mb-0 max-h-screen"><Draw svg={getSVG()} start="autostart" /></div>
    </Hero>
    <Section title="Introduction">
    <div className="max-w-4xl mx-auto">
    {featured.map((post)=><React.Fragment key={`featured-${post.id}`}><PostCard size="large" post={post} /></React.Fragment>)}
    </div>
    </Section>
    
    <Section title="Reading">
      <div className="reading-grid gap-8 items-center">
      {posts.map((post)=><React.Fragment key={`reading-${post.id}`}><PostCard post={post} /></React.Fragment>)}
      </div>
    </Section>
    <Section title="Catalogue">
      <Catalogue products={products} />
      <div className="flex items-center justify-center my-24"><a href="https://www.sothebys.com/en/buy/fashion/streetwear" className="primary-button" target="_blank">Shop Full Collection at Sotheby’s &rarr;</a></div>
    </Section>
    <Section title="Through Experts Eyes">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 max-w-6xl mx-auto">
        <div className="">
          <h4>WHO ARE THE EXPERTS?</h4>
          <p> 
          Modern collectibles have the ability to be both completely personal while also reaching a wide audience. In Through Expert Eyes, we ask top creatives across the fields of art, design, and fashion to share their pick for their favorite modern collectible.
          </p>
          <br />
          <p>
          For more information about future modern collectibles, join our mailing list.
          </p>
          <br />
          <a href="#Newsletter">SUBSCRIBE TO NEWSLETTER</a>
        </div>
        <div className="grid grid-cols-2 gap-8 uppercase text-center md:-mt-3">
          <Popup headline={author1.pick} content={author1.description}><AuthorCard author={author1} num={1} /></Popup>
          <Popup headline={author2.pick} content={author2.description}><AuthorCard author={author2} num={2} /></Popup>
          <Popup headline={author3.pick} content={author3.description}><AuthorCard author={author3} num={3} /></Popup>
          <Popup headline={author4.pick} content={author4.description}><AuthorCard author={author4} num={4} /></Popup>
        </div>
      </div>
    </Section>
    <Section title="Newsletter">
      <Newsletter />
    </Section>
    <Section title="Further Readings">
      <div className="grid grid-flow-row gap-8 max-w-6xl mx-auto">
        {all.map((post)=><React.Fragment key={`further-reading-${post.id}`}><PostCard size="slim" post={post} /></React.Fragment>)}
      </div>
      <div className="flex items-center justify-center my-24"><Link className="primary-button" to="/read">View All Articles &rarr;</Link></div>

    </Section>
  </Layout>
  </ModalProvider>
)
}

export default IndexPage
