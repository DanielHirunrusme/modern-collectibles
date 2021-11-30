import React from "react"

// Convert HTML to richtext
// 1. Standard (default)
// 2. Blockquote
// 3. Table
// 4. Custom Link
const RichText = ({ text }) => {
  return <>{text && <div class="rte">{text}</div>}</>
}

export default RichText
