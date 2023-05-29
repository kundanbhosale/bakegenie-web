import Image from 'next/image'
import React from 'react'

const FeatureCard = ({
  title,
  description,
  image,
  width,
  height,
}: {
  title: string
  description: string
  image: string
  width?: number
  height?: number
}) => {
  return (
    <div className='relative z-0 p-4'>
      <Image
        src={image}
        alt={title + ' ' + 'icon'}
        width={width || 75}
        height={height || 75}
        className='mb-4'
      />
      <p className='text-xl font-bold'>{title}</p>
      <p className='my-4'>{description}</p>
      <span
        className='absolute bottom-0 left-0 -z-10  block bg-primary-200'
        style={{ width: '100%', height: 'calc(100% - 60px)' }}
      />
    </div>
  )
}

export default FeatureCard
