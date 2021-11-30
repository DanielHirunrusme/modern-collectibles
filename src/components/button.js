import React from "react"
import { Link } from "gatsby"

export const Button = ({ size, text, url }) => {
  return <>{url && text && <Link to={url}>{text}</Link>}</>
}

// export default Button
