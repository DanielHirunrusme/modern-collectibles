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
  const { title, excerpt, author } = post
  return (
    <article className={`post-card border border-black aspect-w-5 aspect-h-4 ${getSize(size)}`} data-size={size}>
      <Link to={`/read/${post.slug}`}><div className="flex justify-between flex-col">
        <div>
          {title && <h4 className="mx-4 mt-3 uppercase">{title}</h4>}
          {excerpt && <div className="mx-4 my-3">{excerpt}</div>}
        </div>
        {author && <div className="mx-4 my-3">{author}</div>}
      </div>
      </Link>
    </article>
  )
}

export default PostCard
