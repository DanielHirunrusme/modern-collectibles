import React from "react"

const Hero = ({ title, subTitle, children }) => {
  const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });

  return (
    <section className="hero relative">
      <div className="hero-text flex justify-end flex-col text-center max-w-7xl mx-auto">
      {title && <h1>{renderHTML(title)}</h1>} 
      {subTitle && <p className="mt-1 md:mt-6 text-sm lg:text-3xl">{subTitle}</p>}
      </div>
      {children && <div>
        {children}
      </div>}
    </section>
  )
}

export default Hero;
