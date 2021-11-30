import * as React from "react"
import { Link, StaticQuery, useStaticQuery, graphql } from "gatsby"
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

const ReadPage = () => {

  const posts = useStaticQuery(graphql`query ReadPageQuery { allApiPost(filter: {id: {in: ["127307", "127308", "127309", "127310"]}}) {
    edges {
      node {
        title
        id
        slug
        featured_media
      }
    }
  }}`);

  const flattenedPosts = posts.allApiPost?.edges?.map(({node}) => node);

  console.log('flattenedPosts', flattenedPosts);

  return (
  <Layout>
    <Seo title="Read" />
    <div className="grid pt-20 gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {flattenedPosts.map((post)=> <PostCard post={post} />)}
    </div>
    {/* List Articles */}
  </Layout>
)}

export default ReadPage
