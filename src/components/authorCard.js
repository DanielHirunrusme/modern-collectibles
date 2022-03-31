import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
// Author params are defined by AirTable columns

const AuthorCard = ({ size, author }) => {
  const { Name, Bio, Portrait, Collectible } = author

  return (
    <div className="aspect-w-4 aspect-h-5 relative border flex flex-col items-end text-left justify-end border-black border-dotted hover:border-solid hover:bg-black hover:text-white">
      <div>
      {Portrait && Portrait[0] && (
        <div className="m-6 pb-0 h-24 w-24 sm:h-1/2 sm:w-1/2 md:mb-0 max-w-md transform ml-auto flex items-end justify-end">
                      <img src={Portrait[0].thumbnails.large.url} className=" w-full h-full absolute object-contain object-right-top" />
        </div>
      )}
      <div className="absolute transform flex flex-col bottom-0 h-auto left-0 w-full">
      {Name && <div className="pt-4 px-4">EXPERT<br /><h4 className="text-left">{Name}</h4></div>}
      {Collectible && (
        <div className="text-left m-4 border-black pt-4 border-t border-dotted">
          COLLECTIBLE<br />
          <div className="w-full">{Collectible}</div>
        </div>
      )}
      </div>
      </div>
    </div>
  )
}

export default AuthorCard
