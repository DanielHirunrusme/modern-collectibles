import React from "react"
import { Link } from "gatsby"

const PostCard = ({ size, post, featured }) => {
  const { title, excerpt, author, featured_media, slug } = post;
  console.log(featured)
  return (
    <>
    {size !== "slim" ?
    <article className={`overflow-clip ${size !== "large" ? 'aspect-w-4  aspect-h-6 md:aspect-h-4' : 'aspect-w-4 aspect-h-6 md:aspect-w-6'} post-card border border-black `} >
      {slug && <Link to={`/read/${slug}`}><div className="flex justify-between flex-col h-full">
        <div className="h-full flex-1 overflow-hidden">
          {featured_media && <div className="aspect-w-16 aspect-h-9 m-1 bg-gray-100"><img className="" src={featured_media} alt={title} /></div>}
          <div className="grid grid-cols-12">
          {title && <h4 className="mx-4 mt-2 text-xl md:text-3xl col-span-6"  dangerouslySetInnerHTML={{__html: title }} />}
          {excerpt && <div className="mx-4 my-3 text-sm md:text-xl block col-span-6 overflow-clip" dangerouslySetInnerHTML={{__html: excerpt }} />}
          </div>
        </div>
        {author && <div className="mx-4 mt-auto mb-3 text-sm md:text-xl">{author}</div>}
      </div>
      </Link>}
    </article>
    :
    <article className="border p-4 border-black">
      {slug && <a href={`http://jingdaily.com/${slug}`} target="_blank"><div className="flex justify-between flex-col">
        <div className="sm:grid grid-cols-12 gap-8 ">
          {title && <h4 className="md:text-3xl col-span-4 mb-8 sm:mb-0"  dangerouslySetInnerHTML={{__html: title }} />}
          {excerpt && <div className=" col-span-8 text-sm md:text-xl" dangerouslySetInnerHTML={{__html: excerpt }} />}
        </div>
        {/* {author && <div className="">{author}</div>} */}
      </div>
      </a>}
    </article>
  }
    </>
  )
}

export default PostCard
