import * as React from "react"
import {Hero, Layout, Seo} from "../components";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

const Post = ({ pageContext }) => {
  const {slug, post} = pageContext;
  console.log(post);
  return (
    <Layout>
      <Seo title="Post" />
      <Hero title={post.title?.rendered}>
        <div className="max-w-md mx-auto mt-24">
          <img className="w-48 md:w-full md:max-w-sm lg:max-w-md mx-auto mt-24" src="https://jingdaily.com/wp-content/uploads/2021/11/LVS_Collectors_0_Hero_BW.jpg" />
        </div>
      </Hero>
      <article className="rte px-4 lg:px-0">
        <div className="max-w-6xl mx-auto" dangerouslySetInnerHTML={ { __html: post.content?.rendered } }></div>
        
        <div className="max-w-6xl mx-auto my-32">
          SHARE:&nbsp;
          <EmailShareButton subject={post.title?.rendered} body="" separator=" | " url={`https://moderncollectibles.gatsbyjs.io/read/${post.slug}`}>Email</EmailShareButton>&nbsp;
          <FacebookShareButton quote="">Facebook</FacebookShareButton>&nbsp;
          <LinkedinShareButton title={post.title?.rendered} summary="" source="" url={`https://moderncollectibles.gatsbyjs.io/read/${post.slug}`}>LinkedIn</LinkedinShareButton>&nbsp;
          <TwitterShareButton title={post.title?.rendered} via="jingdaily" url={`https://moderncollectibles.gatsbyjs.io/read/${post.slug}`}>Twitter</TwitterShareButton>&nbsp;
          <WhatsappShareButton title={post.title?.rendered} url={`https://moderncollectibles.gatsbyjs.io/read/${post.slug}`}>WhatsApp</WhatsappShareButton>
        </div>
      
      </article>
    </Layout>
  )
}

export default Post
