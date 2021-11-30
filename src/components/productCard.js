import React from "react"
import { Link } from "gatsby"

// 1. product param is defined by AirTable columns

const ProductCard = ({ product }) => {
  const { title, description, year, attachments, url, price } = product
  return (
    <div>
      {/* Attachments */}
      <div>{/* Image */}</div>
      <div>
        <button>More Info</button>
        <button>Buy Now</button>
      </div>
      {title && <h1></h1>}
    </div>
  )
}

export default ProductCard
