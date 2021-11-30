import * as React from "react"
import {Hero, Layout, Seo} from "../components";

const Post = ({ pageContext }) => {
  const {slug, post} = pageContext;
  console.log(post);
  return (
    <Layout>
      <Seo title="Post" />
      <Hero title={post.title?.rendered} />
      <article className="rte">
        <div className="max-w-6xl mx-auto px-4" dangerouslySetInnerHTML={ { __html: post.content?.rendered } }></div>
      </article>
    </Layout>
  )
}

export default Post
