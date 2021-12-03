import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
// Author params are defined by AirTable columns

const AuthorCard = ({ size, author, num }) => {
  const { name, description, image, pick } = author

  const getImage = num => {
    switch (num) {
      case 1:
        return (
          <StaticImage
            placeholder="tracedSVG"
            width={200}
            height={200}
            transformOptions={{ grayscale: "true" }}
            src="../images/LVS_Experts_Sarah.png"
            alt={name}
          />
        )
        break
      case 2:
        return (
          <StaticImage
            transformOptions={{ grayscale: "true" }}
            width={200}
            height={200}
            placeholder="tracedSVG"
            src="../images/LVS_Experts_Michael.jpg"
            alt={name}
          />
        )
        break
      case 3:
        return (
          <StaticImage
            transformOptions={{ grayscale: "true" }}
            width={200}
            height={200}
            placeholder="tracedSVG"
            src="../images/LVS_Experts_Hannan.jpg"
            alt={name}
          />
        )
        break
      case 4:
        return (
          <StaticImage
            transformOptions={{ grayscale: "true" }}
            width={200}
            height={200}
            placeholder="tracedSVG"
            src="../images/LVS_Experts_Iolo.jpg"
            alt={name}
          />
        )
        break
    }
  }
  return (
    <div className="aspect-w-4 aspect-h-5 border flex flex-col justify-between border-black hover:bg-black hover:text-white">
      {name && <h4 className="mt-3">{name}</h4>}
      {num && (
        <div className="p-8 md:p-16 m-auto flex items-center justify-center">
          {getImage(num)}
        </div>
      )}
      {pick && (
        <div className=" text-sm text-center w-full h-full flex items-end">
          {/* <div className="m-4 text-center w-full">❤<br/>{pick}</div> */}
        </div>
      )}
    </div>
  )
}

export default AuthorCard
