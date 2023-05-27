import React, { Fragment, useEffect, useState } from 'react'
import addEmail from '../firebase/db/email_list'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const loader = (
  <div role='status'>
    <svg
      aria-hidden='true'
      className='mr-2 h-8 w-8 animate-spin fill-primary-600 text-primary-300 '
      viewBox='0 0 100 101'
      style={{
        width: '25px',
        height: '25px',
      }}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
        fill='currentColor'
      />
      <path
        d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
        fill='currentFill'
      />
    </svg>
    <span className='sr-only'>Loading...</span>
  </div>
)

const setLocalCache = () => {
  return localStorage.setItem('waitlisted', 'true')
}

const getLocalCache = () => {
  return localStorage.getItem('waitlisted')
}

const Input = () => {
  const [data, setData] = useState<Record<string, string> | undefined>(
    undefined
  )
  const [loading, setLoading] = useState(false)

  const [email, setEmail] = useState('')

  useEffect(() => {
    const has = getLocalCache()
    if (has) {
      return setData({
        type: 'success',
        data: '',
      })
    }
  }, [])

  const handleSave = async () => {
    setLoading(true)
    setData(undefined)
    const isValid = emailRegex.test(email)
    if (!isValid) {
      setLoading(false)
      return setData({
        type: 'error',
        data: 'Invalid Email!',
      })
    }
    const { error } = await addEmail(email)
    setLoading(false)
    if (error) {
      if (error.code === 'permission-denied') {
        setLocalCache()
        return setData({
          type: 'success',
          data: '',
        })
      }
      return setData({
        type: 'error',
        data: 'Something went wrong!',
      })
    } else {
      setLocalCache()
      return setData({
        type: 'success',
        data: '',
      })
    }
  }

  return (
    <Fragment>
      <div
        className='notify-wrapper m-auto flex overflow-hidden rounded-full bg-white p-1 ring-2 ring-primary-700 lg:m-0'
        style={{ width: 'fit-content' }}
      >
        {data ? (
          <Fragment>
            {data.type === 'error' ? (
              <Fragment>
                <p
                  className={`${
                    data.type === 'error' ? 'text-red-700' : ''
                  } px-6 py-2  md:text-xl`}
                  onClick={() => setData(undefined)}
                >
                  {data.data}
                </p>
                <button
                  className='btn-primary sm:btn-lg rounded-full'
                  onClick={() => setData(undefined)}
                >
                  Ok
                </button>
              </Fragment>
            ) : (
              <Fragment>
                <p
                  className={`${
                    data.type === 'error' ? 'text-red-700' : ''
                  } px-6 py-2  lg:text-xl`}
                >
                  We will notify you soon!
                </p>
                <button
                  className='btn-primary lg:btn-lg rounded-full'
                  onClick={() => setData(undefined)}
                  disabled
                >
                  Notify Me
                </button>
              </Fragment>
            )}
          </Fragment>
        ) : (
          <Fragment>
            <input
              placeholder='jhondoe@example.com'
              className='px-4 md:px-6'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className='btn-primary sm:btn-lg flex justify-center rounded-full'
              onClick={handleSave}
              disabled={loading}
            >
              {loading ? loader : 'Notify Me'}
            </button>
          </Fragment>
        )}
      </div>
    </Fragment>
  )
}

export default Input
