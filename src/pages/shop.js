import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const ShopPage = ({data}) => {
  const allAirtableData = data.allAirtable.edges;
  return(
  <Layout>
    <Seo title="Shop" />
    <h1>This is the Shop page</h1>
    <p>This will be a table that is rendered via Airtable data. The page should be static since Airtable has a rate limit and we're unsure how much traffic the site will receive.</p>
  </Layout>
)}

export const query = graphql`
    query {
      allAirtable {
        edges {
          node {
            data {
              Collection
              ID
              Price
              Status
              Year
              Title
            }
          }
        }
      }
    }    
`

export default ShopPage
