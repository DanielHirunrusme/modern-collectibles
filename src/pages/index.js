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
  Section,
  Seo,
} from "../components/index"

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

const getSVG = () => {
  const SVGS = [Backpack, Bandana, Belt, Duffle, Shirt, Shoe, Skateboard, Trunk, Wallet];
  const Names = ["Backpack", "Bandana", "Belt", "Duffle", "Shirt", "Shoe", "Skateboard", "Trunk", "Wallet"];
  const rand = Math.floor(Math.random()*SVGS.length);
  const SVG = {svg: SVGS[rand], caption: `The ${Names[rand]} part of the LVxSupreme 2017 collection. Shop All`};
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
        }
      }
    }
    products: allAirtable {
      edges {
        node {
          data {
            Year
            Title
            Status
            Price
            ID
            Collection
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
  
  return (
  <Layout>
    <Seo title="Home" />
    <div></div>

    <Hero
      title="LV×Supreme"
      subTitle="In Partnership with Sotheby’s"
    >
      <div className="mt-12 lg:mt-24"><Draw svg={getSVG()} start="autostart" /></div>
    </Hero>
    <Section title="Introduction">
    <div className="max-w-4xl mx-auto">
    {featured.map((post)=><React.Fragment key={`featured-${post.id}`}><PostCard size="large" post={post} /></React.Fragment>)}
    </div>
    </Section>
    <Section title="Newsletter">
      <Newsletter />
    </Section>
    <Section title="Reading">
      <div className="reading-grid gap-8 items-center">
      {posts.map((post)=><React.Fragment key={`reading-${post.id}`}><PostCard post={post} /></React.Fragment>)}
      </div>
    </Section>
    <Section title="Catalogue">
      <Catalogue products={products} />
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
        <div className="grid grid-cols-2 gap-8 uppercase text-center md:-mt-3">
          <AuthorCard author={author1} />
          <AuthorCard author={author2} />
          <AuthorCard author={author3} />
          <AuthorCard author={author4} />
        </div>
      </div>
    </Section>
    <Section title="Further Readings">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {posts.map((post)=><React.Fragment key={`further-reading-${post.id}`}><PostCard size="small" post={post} /></React.Fragment>)}
      </div>
      <div className="flex items-center justify-center mt-24"><Link className="primary-button" to="/read">View All Articles</Link></div>

    </Section>
  </Layout>
)
}

export default IndexPage
