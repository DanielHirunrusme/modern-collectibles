import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Layout, PostCard, Seo, Section } from "../components/index"

const ReadPage = () => {
  const posts = useStaticQuery(graphql`
    query ReadPageQuery {
      featured: allApiPost(
        filter: { id: { in: ["127307", "127308", "127309", "127310", "129210"] } }, sort: {order: DESC, fields: date}
      ) {
        edges {
          node {
            title
            featured_media
            excerpt
            date
            author
            slug
            id
          }
        }
      }
      all: allApiPost(
        filter: { id: { nin: ["127307", "127308", "127309", "127310"] } }
      ) {
        edges {
          node {
            title
            featured_media
            excerpt
            date
            author
            slug
            id
          }
        }
      }
    }
  `)

  const isFeatured = post => {
    const featured = ["127307", "127308", "127309", "127310", "129210"]
    let is = false
    featured.map(id => {
      console.log(post)
      if (String(post.id) === id) is = true
    })
    return is
  }

  const featuredPosts = posts.featured?.edges?.map(({ node }) => node)
  const allPosts = posts.all?.edges?.map(({ node }) => node)
  return (
    <Layout>
      <Seo title="Read" />
      <Section title="Featured">
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-2">
        {featuredPosts &&
          featuredPosts.map(post => (
            <PostCard featured={isFeatured(post)} size="small" post={post} />
          ))}
      </div>
      </Section>
      <Section title="All">
      <div className="max-w-6xl mx-auto grid grid-flow-row gap-8">
      {allPosts &&
          allPosts.map(post => (
            <PostCard size="slim" post={post} />
          ))}
      </div>
      </Section>
    </Layout>
  )
}

export default ReadPage
