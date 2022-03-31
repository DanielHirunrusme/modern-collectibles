import React from "react"
import { Link } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import getSVG from "../utils/getSVG"

const PostCard = ({ size, post, featured, image = null }) => {
  const { title, excerpt, author, featured_media, slug, date, id } = post

  // console.log(post)
  switch (size) {
    case "slim":
      return (
        <article className="border p-4 border-black border-dotted hover:bg-black hover:text-white group">
          {slug && (
            <OutboundLink href={`http://jingdaily.com/${slug}`} target="_blank">
              <div className="flex justify-between flex-col">
                <div className="md:grid grid-cols-12 gap-8 ">
                  {title && (
                    <h4
                      className="text-xl md:text-3xl col-span-4 mb-4 pb-4 md:pb-0 md:mb-0 border-dotted border-b md:border-b-0 md:pr-2  md:border-r border-black group-hover:border-white"
                      dangerouslySetInnerHTML={{ __html: title }}
                    />
                  )}
                  {excerpt && (
                    <div
                      className="col-span-8 "
                      dangerouslySetInnerHTML={{ __html: excerpt }}
                    />
                  )}
                </div>
                {/* {author && <div className="">{author}</div>} */}
              </div>
            </OutboundLink>
          )}
        </article>
      )

    case "medium":
      return (
        <article
          className={`group overflow-clip ${
            size !== "large"
              ? "aspect-w-4  aspect-h-6 md:aspect-h-4"
              : "aspect-w-4 aspect-h-6 md:aspect-w-6"
          } post-card border border-black border-dotted`}
        >
          {slug && (
            <Link to={`/read/${slug}`}>
              <div className="flex justify-between flex-col h-full">
                <div className="h-full flex-1 overflow-hidden flex flex-col">
                  
                  {image ? (
                        <div className="flex-0">
                          <img className="bg-white" src={image} alt={title} />
                        </div>
                      ) : <>{featured_media && (
                        <div className="aspect-w-16 aspect-h-9 m-1 bg-black flex-0">
                          <img className="" src={featured_media} alt={title} />
                        </div>
                      )}</>}
                  <div className="relative md:grid grid-cols-12 h-full border-t border-black border-dotted group-hover:border-white flex-0 mb-2 mx-1">
                    {title && (
                      <h4
                        className="mx-3 mt-2 pt-2 pb-3 md:py-0 border-dotted text-xl md:text-3xl col-span-7 md:col-span-6 border-b md:border-b-0 md:border-r border-black group-hover:border-white mr-2 pr-2"
                        dangerouslySetInnerHTML={{ __html: title }}
                      />
                    )}
                    {excerpt && (
                      <div
                        className="mx-3 my-3 text-sm md:text-xl block col-span-5 md:col-span-6 overflow-clip"
                        dangerouslySetInnerHTML={{ __html: excerpt }}
                      />
                    )}
                  </div>
                </div>
                {author && (
                  <div className="mt-auto mx-4 mb-2 text-sm md:text-xl absolute bottom-0">
                    {author}
                  </div>
                )}
              </div>
            </Link>
          )}
        </article>
      )

    case "featured":
      return (
        <>
          <article className={`group mb-4 ${size !== "large" ? "" : ""}  `}>
            {slug && (
              <Link to={`/read/${slug}`}>
                <div className="flex relative" style={{ minHeight: "65vh"}}>
                  <div  className="flex w-full flex-1 flex-col relative z-10 lg:justify-between">
                    <div className="overflow-hidden flex flex-col lg:flex-row relative">
                      {title && (
                        <h2
                          className="flex text-left top-0 left-0 "
                          dangerouslySetInnerHTML={{ __html: title }}
                        />
                      )}

                      {image && (
                        <div className="md:w-1/2 lg:hidden mx-auto w-full flex-0 mt-2">
                          {/* {getSVG(id)} */}
                          {/* <img src="/hype-artists.svg" alt="Telfar" /> */}
                          <img className="" src={image} alt={title} />
                        </div>
                      )}
                    </div>

                    <div className="grid-flow-row pb-12 border-b border-dotted border-black pt-8">
                      <div className="">
                        {excerpt && (
                          <div
                            className="md:text-xl block max-w-2xl"
                            dangerouslySetInnerHTML={{ __html: excerpt }}
                          />
                        )}
                      </div>

                      <div className="md:w-1/2 grid grid-cols-12 mt-6 items-end">
                        {author && (
                          <div className="col-span-6 md:col-span-6">
                            AUTHOR
                            <br />
                            {author}
                          </div>
                        )}
                        {date && (
                          <div className="col-span-6 md:col-span-6">
                            PUBLISHED
                            <br />
                            <div>{date}</div>
                          </div>
                        )}

                        {/* <div className="col-span-3">Read Article →</div> */}
                      </div>
                    </div>
                  </div>
                  <div className="hidden lg:block top-0 transform translate-x-1/3 right-0 absolute object-contain h-full w-full flex-0 mb-8">
                    {image && (
                        <img className="absolute top-0 left-0 object-contain h-full w-full" src={image} alt={title} />
                    )}
                  </div>
                </div>
              </Link>
            )}
          </article>
          {/* <hr /> */}
        </>
      )
  }

  // return (
  //   <>
  //     {size !== "slim" ? (
  //       <article
  //         className={`group overflow-clip ${
  //           size !== "large"
  //             ? "aspect-w-4  aspect-h-6 md:aspect-h-4"
  //             : "aspect-w-4 aspect-h-6 md:aspect-w-6"
  //         } post-card border border-black `}
  //       >
  //         {slug && (
  //           <Link to={`/read/${slug}`}>
  //             <div className="flex justify-between flex-col h-full">
  //               <div className="h-full flex-1 overflow-hidden flex flex-col">
  //                 {featured_media && (
  //                   <div className="aspect-w-16 aspect-h-9 m-1 bg-black flex-0">
  //                     <img className="" src={featured_media} alt={title} />
  //                   </div>
  //                 )}
  //                 <div className="relative md:grid grid-cols-12 h-full border-t border-black group-hover:border-white flex-0 mb-2 mx-1">
  //                   {title && (
  //                     <h4
  //                       className="mx-3 mt-2 pt-2 pb-3 md:py-0 border-dotted text-xl md:text-3xl col-span-7 md:col-span-6 border-b md:border-b-0 md:border-r border-black group-hover:border-white mr-2 pr-2"
  //                       dangerouslySetInnerHTML={{ __html: title }}
  //                     />
  //                   )}
  //                   {excerpt && (
  //                     <div
  //                       className="mx-3 my-3 text-sm md:text-xl block col-span-5 md:col-span-6 overflow-clip"
  //                       dangerouslySetInnerHTML={{ __html: excerpt }}
  //                     />
  //                   )}
  //                 </div>
  //               </div>
  //               {author && (
  //                 <div className="mt-auto mx-4 mb-2 text-sm md:text-xl absolute bottom-0">
  //                   {author}
  //                 </div>
  //               )}
  //             </div>
  //           </Link>
  //         )}
  //       </article>
  //     ) : (
  //       <article className="border p-4 border-black hover:bg-black hover:text-white group">
  //         {slug && (
  //           <OutboundLink href={`http://jingdaily.com/${slug}`} target="_blank">
  //             <div className="flex justify-between flex-col">
  //               <div className="md:grid grid-cols-12 gap-8 ">
  //                 {title && (
  //                   <h4
  //                     className="text-xl md:text-3xl col-span-4 mb-4 pb-4 md:pb-0 md:mb-0 border-dotted border-b md:border-b-0 md:pr-2  md:border-r border-black group-hover:border-white"
  //                     dangerouslySetInnerHTML={{ __html: title }}
  //                   />
  //                 )}
  //                 {excerpt && (
  //                   <div
  //                     className="col-span-8 "
  //                     dangerouslySetInnerHTML={{ __html: excerpt }}
  //                   />
  //                 )}
  //               </div>
  //               {/* {author && <div className="">{author}</div>} */}
  //             </div>
  //           </OutboundLink>
  //         )}
  //       </article>
  //     )}
  //   </>
  // )
}

export default PostCard
