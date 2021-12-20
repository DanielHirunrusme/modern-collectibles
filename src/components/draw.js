import React, {useState, useRef, useEffect} from "react"
import ReactVivus from "react-vivus"
import {Link} from "gatsby"
import { useInView } from "react-intersection-observer"

// draw SVG
const Draw = ({svg, start = "inViewPort", caption}) => {
  const vivusRef = useRef();
  const [ready, setReady] = useState(false);
  const [play, setPlay] = useState(false);
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: [0, .2, .5, .75, 1],
  });

  useEffect(()=>{
    if(start === "manual" && ready) {
      console.log(vivusRef);
      setPlay(true);
    }
  }, [inView])

  return (
  <div ref={ref} className="drawing">
    <ReactVivus
    ref={vivusRef}
    id="HeroSVG"
    className="max-h-screen md:h-screen"
      option={{
        file: svg.svg,
        start: "inViewport",
        animTimingFunction: "EASE",
        type: "oneByOne",
        onReady: ()=> setReady(true),
      }}
      // callback={console.log}
    />
    {svg.caption && ready && <Link to="/shop"><small className="text-sm text-center block mt-4">{svg.caption}</small></Link>}
  </div>
  )
}

export default Draw