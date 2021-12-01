import React from "react"
import { Link } from "gatsby"

const getSize = size => {
  switch (size) {
    case "small":
      return " aspect-w-1 aspect-h-1"
      break
  }
}

const PostCard = ({ size, post }) => {
  const { title, excerpt, author, featured_media } = post
  return (
    <article className={`${size !== "large" ? 'aspect-w-4' : 'aspect-w-4 md:aspect-w-5'} post-card border border-black aspect-h-4 ${getSize(size)}`} data-size={size}>
      <Link to={`/read/${post.slug}`}><div className="flex justify-between flex-col">
        <div>
          {featured_media && <img className="p-1" src={featured_media} alt={SVGComponentTransferFunctionElement} />}
          {title && <h4 className="mx-4 mt-3 uppercase">{title}</h4>}
          {excerpt && size !== "small" && <div className="mx-4 my-3 hidden md:block" dangerouslySetInnerHTML={{__html: excerpt }} />}
        </div>
        {author && <div className="mx-4 my-3">{author}</div>}
      </div>
      </Link>
    </article>
  )
}

export default PostCard
