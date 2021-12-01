import React from "react"

const Hero = ({ title, subTitle, children }) => {
  return (
    <section className="hero">
      <div className="hero-text flex justify-end flex-col text-center  -mx-4">
      {title && <h1>{title}</h1>} 
      {subTitle && <p className="mt-1 md:mt-6 lg:text-3xl">{subTitle}</p>}
      </div>
      {children && <div>
        {children}
      </div>}
    </section>
  )
}

export default Hero;
