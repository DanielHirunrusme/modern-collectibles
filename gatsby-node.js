const fetch = require("node-fetch")
const path = require("path")
const crypto = require("crypto")

// async function createShopPage(graphql, actions) {
//   const { createPage } = actions
//   const result = await graphql(`{
//     allAirtable(
//       filter: {
//         table: { eq: "Shop" }
//       }
//     ) {
//       edges {
//         node {
//           data {
//               Title
//               Status
//               ID
//               Collection
//               Price
//               Year
//               Attachments
//           }
//         }
//       }
//     }
//   }`)

//   if (result.errors) throw result.errors

//   // const projectEdges = (result.data.allSanityProject || {}).edges || []
//   const shopEdges = result.data;

// }

// part two
exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions;

  const allPosts = await (
    await fetch(
      "https://jingdaily.com/wp-json/wp/v2/posts?filter[tag]=17457&_embed"
    )
  ).json()

  for (const post of allPosts) {
    // create node for graphql
    // console.log('creating node')
    // console.log('post._embedded.author[0].name', post._embedded.author[0].name);
    // console.log("post._embedded['wp:featuredmedia'][0].source_url", post._embedded['wp:featuredmedia'][0].source_url)
    const node = {
      id: `${post.id}`,
      parent: `__SOURCE__`,
      internal: {
        // lets you query nodes using allAPIPost and APIPost
        type: `APIPost`,
      },
      children: [],

      // Other fields that you want to query with graphQl
      slug: post.slug,
      title: post.title.rendered,
      date: post.date,
      content: post.content?.rendered,
      excerpt: post.excerpt?.rendered,
      featured_media: post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0] && post._embedded['wp:featuredmedia'][0]?.source_url ? post._embedded['wp:featuredmedia'][0].source_url : '' ,
      og_image: post._embedded?.media_details?.sizes['post-thumbnail-1240']?.source_url ? post._embedded.media_details.sizes['post-thumbnail-1240'].source_url : '',
      author: post._embedded.author[0].name
    };
    const contentDigest = crypto.createHash(`md5`).update(JSON.stringify(node)).digest(`hex`);
    node.internal.contentDigest = contentDigest;
    createNode(node);
  }
  
};

exports.createPages = async ({ graphql, actions }) => {
  // await createShopPage(graphql, actions)

  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })

  const allPosts = await (
    await fetch(
      "https://jingdaily.com/wp-json/wp/v2/posts?filter[post__in]=127307,127308,127309,127310&_embed"
    )
  ).json()
  for (const post of allPosts) {
    // const blocks = await (await fetch(‘http://some-api.com/post/’ + post.id)).json();
    if (
      String(post.id) === "127307" ||
      String(post.id) === "127308" ||
      String(post.id) === "127309" ||
      String(post.id) === "127310"
    ) {
      createPage({
        path: `read/${post.slug}`,
        component: path.resolve(`./src/templates/post.js`),
        context: {
          slug: `read/${post.slug}`,
          post,
        },
      })
    }
  }
}





