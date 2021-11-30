import React, {useState} from "react"
import ReactVivus from "react-vivus"
import {Link} from "gatsby"


// draw SVG
const Draw = ({svg, start = "inViewPort", caption}) => {
  const [ready, setReady] = useState(false);
  return (
  <div>
    <ReactVivus
    id="HeroSVG"
      option={{
        file: svg.svg,
        start: start,
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