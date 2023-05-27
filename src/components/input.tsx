import React from 'react'

const Input = () => {

  return (
    <div className='lg:m-0 m-auto bg-white ring-2 ring-primary-700 rounded-full overflow-hidden flex p-1 notify-wrapper' style={{maxWidth:'400px'}}>
      <input placeholder='jhondoe@example.com' className='px-4 md:px-6'/>
      <button className='btn-primary sm:btn-lg rounded-full'>Notify Me</button>
    </div>
  )
}

export default Input