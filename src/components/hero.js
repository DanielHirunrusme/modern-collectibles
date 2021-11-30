import React from "react"

const Hero = ({ title, subTitle, children }) => {
  return (
    <section className="hero flex justify-end flex-col overflow-hidden">
      <div className="flex justify-center flex-col text-center">
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
