'use client' // This is a client component 👈🏽

import Link from 'next/link'
import Input from '../components/input'
import HeroImg from '../components/heroImg'
import useViewPort from '../hooks/useViewport'

export default function Home() {
  const { width } = useViewPort()
  if (!width) return null

  return (
    <main
      className='relative m-auto flex h-screen flex-col px-8 pt-10 xl:px-14'
      style={{ maxWidth: '1920px' }}
    >
      <Link
        href={'/'}
        className='text-2xl font-extrabold uppercase text-primary-800'
      >
        Bakegenie{' '}
      </Link>
      <div className='flex flex-1 pb-10'>
        <div
          className='relative z-10 m-auto flex flex-col justify-center text-center lg:block lg:text-left'
          style={
            width > 1440
              ? { maxWidth: '700px' }
              : width > 1024
              ? { maxWidth: '550px' }
              : {}
          }
        >
          <p className='mb-2 font-bold uppercase  sm:text-2xl md:text-base'>
            Coming Soon...
          </p>
          <h1 className='mb-6 text-primary-800'>
            Empowering Bakers with AI-Driven Order Management
          </h1>
          <p className='mb-10 text-lg sm:text-2xl md:text-base '>
            Bakery Software to transform the way you manage your online orders.
            With integrated AI technology, streamline your bakery operations,
            automate customer messaging, and efficiently handle custom orders.
            Stay tuned for a powerful solution designed specifically for small
            bakery owners like you!
          </p>
          <Input />
        </div>
        <div className='relative flex-1'>
          <HeroImg />
        </div>
      </div>
    </main>
  )
}
