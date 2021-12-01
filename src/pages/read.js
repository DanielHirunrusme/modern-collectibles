import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import {
  Layout,
  PostCard,
  Seo,
} from "../components/index"

const ReadPage = () => {

  const posts = useStaticQuery(graphql`query ReadPageQuery { allApiPost(filter: {id: {in: ["127307", "127308", "127309", "127310"]}}) {
    edges {
      node {
        title
        slug
        excerpt
        featured_media
      }
    }
  }}`);

  const flattenedPosts = posts.allApiPost?.edges?.map(({node}) => node);

  return (
  <Layout>
    <Seo title="Read" />
    <div className="grid pt-20 gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {flattenedPosts && flattenedPosts.map((post)=> <PostCard size="small" post={post} />)}
    </div>
  </Layout>
)}

export default ReadPage
