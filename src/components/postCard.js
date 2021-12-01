import React from "react"
import { Link } from "gatsby"

const PostCard = ({ size, post }) => {
  const { title, excerpt, author, featured_media, slug } = post;

  return (
    <article className={`${size !== "large" ? 'aspect-w-4' : 'aspect-w-4 md:aspect-w-5'} post-card border border-black aspect-h-4`} data-size={size}>
      {slug && <Link to={`/read/${slug}`}><div className="flex justify-between flex-col">
        <div>
          {featured_media && <img className="p-1" src={featured_media} alt={title} />}
          {title && <h4 className="mx-4 mt-2 text-3xl text-center">{title}</h4>}
          {excerpt && size !== "small" && <div className="mx-4 my-3 hidden md:block" dangerouslySetInnerHTML={{__html: excerpt }} />}
        </div>
        {author && <div className="mx-4 my-3">{author}</div>}
      </div>
      </Link>}
    </article>
  )
}

export default PostCard
