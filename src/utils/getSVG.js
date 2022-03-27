import React from 'react'

const getSVG = id => {
    console.log('id', id)
  switch (id) {
    case "anime":
      return <img src="/anime.svg" alt="anime" />
    case "hype-artists":
      return <img src="/hype-artists.svg" alt="hype artists" />
    case "outerwear":
      return <img src="/outerwear.svg" alt="outerwear" />
    case "129210":
      return <img src="/telfar.svg" alt="telfar" />
    case "ugg":
      return <img src="/ugg.svg" alt="Telfar UGG" />

      default:
          return <></>
  }
}

export default getSVG
