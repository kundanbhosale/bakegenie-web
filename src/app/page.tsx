'use client' // This is a client component 👈🏽

import Image from 'next/image'
import Link from 'next/link'
import Input from '../components/input'
import HeroImg from '../components/heroImg'
import useViewPort from '../hooks/useViewport'

export default function Home() {

  const {width}  = useViewPort()
  if(!width) return null

  return (
    <main className="m-auto pt-10 xl:px-14 px-8 relative h-screen flex flex-col" style={{maxWidth:'1920px'}}>
      <Link href={'/'} className='uppercase font-extrabold text-2xl text-primary-800'>
      Bakegenie      </Link>
      <div className='flex pb-10 flex-1' >
      <div className='lg:block lg:text-left flex flex-col justify-center text-center relative z-10 m-auto' style={width > 1440  ? {maxWidth:'700px'} :width > 1024 ?{maxWidth:'550px'}:{}}>
        <p className='font-bold sm:text-2xl md:text-base  mb-2 uppercase'>Coming Soon...</p>
        <h1 className='mb-6 text-primary-800'>
          Empowering Bakers with AI-Driven Order Management
        </h1>
        <p className='mb-10 sm:text-2xl md:text-base text-lg '>Bakery Software to transform the way you manage your online orders. With integrated AI technology, streamline your bakery operations, automate customer messaging, and efficiently handle custom orders. Stay tuned for a powerful solution designed specifically for small bakery owners like you!</p>
      <Input/>
      </div>    
      <div className='flex-1 relative'>
<HeroImg/>
      </div>
      </div>
    </main>
  )
}
