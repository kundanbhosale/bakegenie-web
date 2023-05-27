'use client' // This is a client component 👈🏽

import React from 'react'
import useViewPort from '../hooks/useViewport'
import Image from 'next/image'

const HeroImg = () => {
    const {width}  = useViewPort()
    const imgSize = width > 1440 ? 1200 : width > 1280 ? 1000 : 800
    if(!width) return null
  return (
    <div className='md:absolute' style={width > 1024 ? {width:imgSize, top:'10%'}:{backgroundImage:`url('./hero.png')`, width:'calc(100vw + 3%)', height:'100vh',position: 'fixed',
    zIndex: 0,
    backgroundSize: '400px',
    opacity: .1, top:0, left:'-5%'}}>
    {width > 1024 &&<Image src='./hero.png' alt='Bakegenie hero logo' width={imgSize} height={imgSize} style={{objectFit:'contain'}}/>}
      </div>
  )
}

export default HeroImg