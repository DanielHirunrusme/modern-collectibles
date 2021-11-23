

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

//   console.log(shopEdges);
// }


exports.createPages = async ({ graphql, actions }) => {
  // await createShopPage(graphql, actions)

  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}
