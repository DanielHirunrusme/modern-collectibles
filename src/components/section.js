import React from "react"
import {Link} from "gatsby"

const Section = ({ size, title, subTitle, children }) => {
  return (
    <section className="pt-12 md:pt-48">
      {title && <h2 className="pb-4 md:pb-16">{title}</h2>}
      {subTitle && <div>{subTitle}</div>}
      <div>{children}</div>
    </section>
  )
}

export default Section;
