import React from "react"
import { Link } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-gtag"

const PostCard = ({ size, post, featured }) => {
  const { title, excerpt, author, featured_media, slug } = post;
  return (
    <>
    {size !== "slim" ?
    <article className={`group overflow-clip ${size !== "large" ? 'aspect-w-4  aspect-h-6 md:aspect-h-4' : 'aspect-w-4 aspect-h-6 md:aspect-w-6'} post-card border border-black `} >
      {slug && <Link to={`/read/${slug}`}><div className="flex justify-between flex-col h-full">
        <div className="h-full flex-1 overflow-hidden flex flex-col">
          {featured_media && <div className="aspect-w-16 aspect-h-9 m-1 bg-black flex-0"><img className="" src={featured_media} alt={title} /></div>}
          <div className="relative md:grid grid-cols-12 h-full border-t border-black group-hover:border-white flex-0 mb-2 mx-1">
          {title && <h4 className="mx-3 mt-2 pt-2 pb-3 md:py-0 border-dotted text-xl md:text-3xl col-span-7 md:col-span-6 border-b md:border-b-0 md:border-r border-black group-hover:border-white mr-2 pr-2"  dangerouslySetInnerHTML={{__html: title }} />}
          {excerpt && <div className="mx-3 my-3 text-sm md:text-xl block col-span-5 md:col-span-6 overflow-clip" dangerouslySetInnerHTML={{__html: excerpt }} />}
          </div>
        </div>
        {author && <div className="mt-auto mx-4 mb-2 text-sm md:text-xl absolute bottom-0">{author}</div>}
      </div>
      </Link>}
    </article>
    :
    <article className="border p-4 border-black hover:bg-black hover:text-white group">
      {slug && <OutboundLink href={`http://jingdaily.com/${slug}`} target="_blank"><div className="flex justify-between flex-col">
        <div className="sm:grid grid-cols-12 gap-8 ">
          {title && <h4 className="text-xl md:text-3xl col-span-4 mb-4 pb-4 md:pb-0 sm:mb-0 border-dotted border-b md:border-b-0  md:border-r border-black group-hover:border-white"  dangerouslySetInnerHTML={{__html: title }} />}
          {excerpt && <div className="col-span-8 " dangerouslySetInnerHTML={{__html: excerpt }} />}
        </div>
        {/* {author && <div className="">{author}</div>} */}
      </div>
      </OutboundLink>}
    </article>
  }
    </>
  )
}

export default PostCard
