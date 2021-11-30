import React from "react"

const Hero = ({ title, subTitle, children }) => {
  return (
    <section className="hero overflow-hidden">
      <div className="hero-text flex justify-end flex-col text-center">
      {title && <h1>{title}</h1>} 
      {subTitle && <p className="mt-1 md:mt-6">{subTitle}</p>}
      </div>
      {children && <div>
        {children}
      </div>}
    </section>
  )
}

export default Hero;
