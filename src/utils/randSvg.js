import React from 'react'

export const getRandSVG = () => {
    const svgs = ["backpack.svg", "bandana.svg", "belt.svg", "duffle.svg", "shirt.svg", "shoe.svg", "skateboard.svg", "trunk.svg", "wallet.svg"];

    const rand = Math.floor(Math.random()*svgs.length);
    return svgs[rand];
}