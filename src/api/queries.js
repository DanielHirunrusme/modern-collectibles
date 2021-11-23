import React from 'react'

export const Shop = `{
    allAirtable(
      filter: {
        table: { eq: "Shop" }
      }
    ) {
      edges {
        node {
          data {
              Title
              Status
              ID
              Collection
              Price
              Year
              Attachments
          }
        }
      }
    }
  }`