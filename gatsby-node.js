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
  const { createNode } = actions

  const allPosts = await (
    await fetch(
      "https://jingdaily.com/wp-json/wp/v2/posts?tags=17457&_embed"
    )
  ).json()

  console.log(allPosts);

  for (const post of allPosts) {
    // create node for graphql
    // console.log('creating node')
    // console.log('post._embedded.author[0].name', post._embedded.author[0].name);
    // console.log("post._embedded['wp:featuredmedia'][0].source_url", post._embedded['wp:featuredmedia'][0].source_url)
    if (post.slug) {
      const node = {
        id: `${post.id}`,
        parent: `__SOURCE__`,
        internal: {
          // lets you query nodes using allAPIPost and APIPost
          type: `APIPost`,
        },
        // children: [],
        slug: post.slug,
        title: post.title.rendered ? post.title.rendered : "",
        date: post.date,
        content: post.content?.rendered,
        excerpt: post.excerpt?.rendered,
        featured_media:
          post._embedded["wp:featuredmedia"] &&
          post._embedded["wp:featuredmedia"][0] &&
          post._embedded["wp:featuredmedia"][0].source_url
            ? post._embedded["wp:featuredmedia"][0].source_url
            : "",
        // og_image: post._embedded?.media_details?.sizes["post-thumbnail-1240"]
        //   ?.source_url
        //   ? post._embedded.media_details.sizes["post-thumbnail-1240"].source_url
        //   : "",
        author: post._embedded.author[0].name,
      }
      const contentDigest = crypto
        .createHash(`md5`)
        .update(JSON.stringify(node))
        .digest(`hex`)
      node.internal.contentDigest = contentDigest
      createNode(node)
    }
  }
}

exports.createPages = async ({ graphql, actions }) => {
  // await createShopPage(graphql, actions)

  const { createPage } = actions
  // createPage({
  //   path: "/using-dsg",
  //   component: require.resolve("./src/templates/using-dsg.js"),
  //   context: {},
  //   defer: true,
  // })

  const allPosts = await (
    await fetch(
      "https://jingdaily.com/wp-json/wp/v2/posts?include[]=127310&include[]=127309&include[]=127308&include[]=127307&_embed"
    )
  ).json()
  for (const post of allPosts) {
    // const blocks = await (await fetch(‘http://some-api.com/post/’ + post.id)).json();
    console.log(post.id);
    if (
      String(post.id) === "127307" ||
      String(post.id) === "127308" ||
      String(post.id) === "127309" ||
      String(post.id) === "127310"
    ) {
      if (post && post.slug) {
        console.log('make post', post.slug)
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
}
