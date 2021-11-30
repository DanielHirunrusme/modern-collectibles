import React from "react"
import ReactVivus from "react-vivus"


// draw SVG
const Draw = ({svg, start = "inViewPort"}) => {
  return (
  <div>
    <ReactVivus
    id={svg}
      option={{
        file: svg,
        start: start,
        animTimingFunction: "EASE",
        type: "oneByOne",
        onReady: console.log('ready'),
      }}
      // callback={console.log}
    />
  </div>
  )
}

export default Draw