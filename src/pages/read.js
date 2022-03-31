import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Layout, PostCard, Seo, Section } from "../components/index"

const ReadPage = () => {
  const posts = useStaticQuery(graphql`
    query ReadPageQuery {
      airPosts: allAirtable(filter: { table: { eq: "Posts" } }) {
        edges {
          node {
            data {
              ID
              Featured
              Hidden
              SVG {
                url
              }
            }
          }
        }
      }
      featured: allApiPost(
        filter: {
          id: { in: ["127307", "127308", "127309", "127310", "129210"] }
        }
        sort: { order: DESC, fields: date }
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
      allPosts: allApiPost(sort: { order: DESC, fields: date }) {
        edges {
          node {
            title
            id
            excerpt
            featured_media
            slug
            author
            date
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
  const allPosts = posts.allPosts?.edges?.map(({ node }) => node)
  const airPosts = posts.airPosts?.edges?.map(({ node }) => node)

  console.log(allPosts)
  return (
    <Layout>
      <Seo title="Read" />
      {/*<Section title="Featured">
       <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-2">
        {featuredPosts &&
          featuredPosts.map(post => (
            <PostCard featured={isFeatured(post)} size="medium" post={post} />
          ))}
      </div>
      </Section> */}
      <Section title="Read">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-2">
          {allPosts?.map(post => (
            <>
              {airPosts.map(p => (
                <>
                  {p.data.ID === post.id &&
                    !p.data?.Hidden && (
                      <React.Fragment key={`read-${post.id}`}>
                        <PostCard
                          size="medium"
                          post={post}
                          image={p.data?.SVG[0]?.url}
                        />
                      </React.Fragment>
                    )}
                </>
              ))}
            </>
          ))}
        </div>
      </Section>
    </Layout>
  )
}

export default ReadPage
