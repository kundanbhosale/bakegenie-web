import Image from 'next/image'
import React from 'react'
import Input from './input'
import { useViewport } from '../context/viewport'

const Footer = () => {
  const { width } = useViewport()
  return (
    <div className='relative z-10 bg-primary-800'>
      <div
        className=' mx-auto  flex w-full max-w-screen-xl flex-col justify-end  p-8 pb-6 text-primary-50 md:flex-row-reverse md:justify-between'
        style={{ height: '300px' }}
      >
        <a
          href='mailto:kundanmbhosale@gmail.com'
          className='absolute z-30 flex cursor-pointer items-center justify-center rounded-full border-0 bg-primary-50 p-4 ring-2 ring-primary-800 hover:bg-primary-200'
          style={{ width: '75px', height: '75px', top: '-35px', right: '20px' }}
        >
          <Image
            src='/closemessage.png'
            width={45}
            height={45}
            alt='bakegenie contact email logo'
          />
        </a>
        <div className='relative z-30 my-8 md:flex md:flex-col md:justify-center'>
          <p className='mb-1 text-center md:ml-5 md:text-left'>
            Join waitlist today!
          </p>
          <Input />
        </div>
        <div className='relative z-10 mx-auto w-fit md:mx-0 md:flex md:flex-col md:justify-center'>
          <h2 className='relative z-10 sm:mb-2 md:mt-8'>BAKEGENIE</h2>
          <Image
            src='/heart.png'
            width={width > 768 ? 300 : 150}
            height={width > 768 ? 300 : 150}
            alt='bakegnie logo'
            className='absolute z-0'
            style={{
              top: width > 768 ? '-50px' : '-90px',
              left: width > 768 ? '-35%' : '20%',
            }}
          />
          <Image
            src='/heart.png'
            width={width > 768 ? 75 : 50}
            height={width > 768 ? 75 : 50}
            alt='bakegnie logo'
            className='absolute z-0'
            style={{ top: width > 768 ? '-20px' : '-170px', left: '55%' }}
          />
          <p className='text-center md:text-right'>Made with &lt;3</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
