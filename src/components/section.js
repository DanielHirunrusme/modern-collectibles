import React from "react"
import {Link} from "gatsby"

const Section = ({ size, title, subTitle, children }) => {
  return (
    <section id={title} className="pt-12 md:pt-48">
      {title && <h2 className="py-12">{title}</h2>}
      {subTitle && <div>{subTitle}</div>}
      <div>{children}</div>
    </section>
  )
}

export default Section;
