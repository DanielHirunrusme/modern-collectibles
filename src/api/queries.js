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
              URL
              Attachments
              Feature
              SVG
          }
        }
      }
    }
  }`


  export const Experts = `{
    allAirtable(
      filter: {
        table: { eq: "Experts" }
      }
    ) {
      edges {
        node {
          data {
              Name
              Bio
              Portrait
              Collectible
          }
        }
      }
    }
  }`