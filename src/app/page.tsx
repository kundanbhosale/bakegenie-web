'use client' // This is a client component 👈🏽

import Link from 'next/link'
import Input from '../components/input'
import HeroImg from '../components/heroImg'
import Features from '../components/features'
import Survey from '../components/survey'
import { Fragment } from 'react'
import Footer from '../components/footer'
import { useViewport } from '../context/viewport'
import Image from 'next/image'

export default function Home() {
  return <Page />
}

const Page = () => {
  const { width } = useViewport()
  return (
    <Fragment>
      <main className='px-8 xl:px-14'>
        <div
          className='relative flex flex-col pt-10 lg:h-screen'
          style={{ maxWidth: '1920px' }}
        >
          <div className='relative w-fit'>
            <Link
              href={'/'}
              className='w-fit text-2xl font-extrabold uppercase text-primary-800'
            >
              Bakegenie{' '}
            </Link>
            <Image
              src='/heart.png'
              width={75}
              height={75}
              alt='bakegnie logo'
              className='absolute z-0'
              style={{ top: '-30px', left: '-25%', opacity: 0.7 }}
            />
          </div>
          <div className='mt-20 flex flex-1 pb-10'>
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
                Bakery Software to transform the way you manage your online
                orders. With integrated AI technology, streamline your bakery
                operations, automate customer messaging, and efficiently handle
                custom orders. Stay tuned for a powerful solution designed
                specifically for small bakery owners like you!
              </p>
              <div className='notify-wrapper'>
                <Input />
              </div>
            </div>
            <div className='relative flex-1'>
              <HeroImg />
            </div>
          </div>
        </div>
        <Features />
        <Survey />
      </main>
      <Footer />
    </Fragment>
  )
}
