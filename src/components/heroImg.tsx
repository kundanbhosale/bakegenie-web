'use client' // This is a client component 👈🏽

import React from 'react'
import useViewPort from '../hooks/useViewport'
import Image from 'next/image'

const HeroImg = () => {
  const { width } = useViewPort()
  const imgSize = width > 1440 ? 1200 : width > 1280 ? 1000 : 800
  if (!width) return null
  return (
    <div
      className='md:absolute'
      style={
        width > 1024
          ? { width: imgSize, top: '10%', height: 'auto' }
          : {
              backgroundImage: `url('./hero.png')`,
              width: 'calc(100vw + 3%)',
              height: '100vh',
              position: 'fixed',
              zIndex: 0,
              backgroundSize: '400px',
              opacity: 0.1,
              top: 0,
              left: '-5%',
            }
      }
    >
      {width > 1024 && (
        <Image
          src='/hero.png'
          alt='Bakegenie hero logo'
          priority={true}
          width={imgSize}
          height={imgSize}
          style={{ objectFit: 'contain', height: 'auto', width: imgSize }}
        />
      )}
    </div>
  )
}

export default HeroImg
