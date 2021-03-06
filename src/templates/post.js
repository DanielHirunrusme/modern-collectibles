import * as React from "react"
import { Hero, Layout, Seo, Section } from "../components"
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share"

import { useStaticQuery, graphql } from "gatsby"

const Post = ({ pageContext }) => {
  const { slug, post } = pageContext
  console.log(post)

  const data = useStaticQuery(graphql`
    query Post {
      airPosts: allAirtable(filter: { table: { eq: "Posts" } }) {
        edges {
          node {
            data {
              ID
              Featured
              SVG {
                url
              }
            }
          }
        }
      }
      
    }
  `)

  const airPosts = data.airPosts?.edges?.map(({ node }) => node)

  console.log('airPosts', airPosts)
  console.log(post)
  return (
    <Layout>
      <Seo
        title={post.title?.rendered}
        description={post.excerpt?.rendered}
        image={
          post._embedded["wp:featuredmedia"][0]?.media_details?.sizes[
            "post-thumbnail-1240"
          ]?.source_url
        }
      />
      <div>
        {/* <div className="bg-black h-screen w-full sticky top-0" style={{ mixBlendMode: "difference"}}></div> */}
        {/* <Hero title={post.title?.rendered}>
          {post._embedded["wp:featuredmedia"] &&
            post._embedded["wp:featuredmedia"][0] &&
            post._embedded["wp:featuredmedia"][0]?.source_url && (
              <div className="max-w-sm mx-auto my-16 md:my-20">
                <img
                  className="w-full md:w-full md:max-w-sm lg:max-w-md mx-auto"
                  src={post._embedded["wp:featuredmedia"][0]?.source_url}
                />
              </div>
            )}
        </Hero> */}
        <div className="w-full mx-auto mt-0 md:mt-20 relative md:min-h-screen">
        <h1
            className="text-left max-w-6xl relative z-10 mx-auto"
            dangerouslySetInnerHTML={{ __html: post.title?.rendered }}
          />
          {airPosts.map((p)=><>{p.data?.ID === String(post.id) && <img
            className="w-full mx-auto mt-2 pb-20 md:my-0 md:absolute h-full object-contain object-bottom top-0 right-0"
            src={p.data?.SVG[0]?.url}
          />}</>)}
          
          
        </div>

        <article className="rte">
          <div className="max-w-6xl grid grid-cols-12 mb-12">
            <div className="col-span-6 md:col-span-4">
              AUTHOR
              <br />
              <div
                dangerouslySetInnerHTML={{
                  __html: post._embedded.author[0].name,
                }}
              ></div>
            </div>
            <div className="col-span-6 md:col-span-4">
              PUBLISHED
              <br />
              <div
                dangerouslySetInnerHTML={{
                  __html: post.date,
                }}
              ></div>
            </div>
          </div>
          <div
            className="overflow-hidden md:overflow-auto md:max-w-6xl mx-auto"
            dangerouslySetInnerHTML={{ __html: post.content?.rendered }}
          ></div>

          <div className="max-w-6xl mx-auto my-16 md:my-32">
            <ul className="list-nav flex flex-col md:flex-row group">
              <li className="mr-3">SHARE:</li>
              <li className="mr-3">
                <EmailShareButton
                  subject={post.title?.rendered}
                  body=""
                  separator=" | "
                  url={`https://moderncollectibles.gatsbyjs.io/read/${post.slug}`}
                >
                  Email
                </EmailShareButton>
              </li>
              <li className="hidden md:block mr-3">|</li>
              <li className="mr-3">
                <FacebookShareButton quote="">Facebook</FacebookShareButton>
              </li>
              <li className="hidden md:block mr-3">|</li>

              <li className="mr-3">
                <LinkedinShareButton
                  title={post.title?.rendered}
                  summary=""
                  source=""
                  url={`https://moderncollectibles.gatsbyjs.io/read/${post.slug}`}
                >
                  LinkedIn
                </LinkedinShareButton>
              </li>
              <li className="hidden md:block mr-3">|</li>

              <li className="mr-3">
                <TwitterShareButton
                  title={post.title?.rendered}
                  via="jingdaily"
                  url={`https://moderncollectibles.gatsbyjs.io/read/${post.slug}`}
                >
                  Twitter
                </TwitterShareButton>
              </li>
              <li className="hidden md:block mr-3">|</li>

              <li className="mr-3">
                <WhatsappShareButton
                  title={post.title?.rendered}
                  url={`https://moderncollectibles.gatsbyjs.io/read/${post.slug}`}
                >
                  WhatsApp
                </WhatsappShareButton>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </Layout>
  )
}

export default Post
