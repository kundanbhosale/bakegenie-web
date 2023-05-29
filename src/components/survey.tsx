import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useViewport } from '../context/viewport'

const Survey = () => {
  const { width } = useViewport()
  return (
    <div className='relative z-10 mx-auto my-24 max-w-screen-2xl'>
      <h2 className='mb-8  text-center text-primary-800 lg:text-left'>
        We Value Your Feedback!
      </h2>
      <p
        className='text-center text-lg lg:text-left'
        style={{ maxWidth: '900px' }}
      >
        As we embark on our journey to revolutionize bakery management with
        Bakegenie, we invite you to be a crucial part of our story. Your unique
        insights, challenges, and ideas matter to us. Share your valuable
        feedback through our survey, and together, let&apos;s shape the future
        of bakery operations.
      </p>
      <div className='mt-8 flex justify-center lg:justify-start'>
        <Link
          href='https://tally.so/r/mOlPla'
          className='btn-primary btn-lg m-auto rounded-full text-2xl lg:m-0'
        >
          Take Survery Now!
        </Link>
      </div>
      <Image
        src='/planes.png'
        alt='survey alt icon'
        width={width > 1024 ? 350 : 100}
        height={width > 1024 ? 350 : 100}
        className='absolute right-0 top-0 z-0 lg:-top-10 lg:right-10'
      />
    </div>
  )
}

export default Survey
