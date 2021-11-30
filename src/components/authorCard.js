import React from "react"
import {Link} from "gatsby"

// Author params are defined by AirTable columns

const AuthorCard = ({ size, author }) => {
  const {name, description} = author;
  return (
    <div className="aspect-w-4 aspect-h-5 border border-black">
      {name && <h4 className="mt-3">{name}</h4>}
      {description && <div>{description}</div>}
    </div>
  )
}

export default AuthorCard;
 