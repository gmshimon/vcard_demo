import { useState } from 'react'
import { FaGoogle } from 'react-icons/fa'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { Link } from 'react-router-dom'

const Registration = () => {
  const [checked,setChecked] =useState(false)

  return (
    <section className='h-screen lg:flex'>
      <div className='lg:w-1/2 '>
        <img
          src='https://infyvcards-demo.nyc3.digitaloceanspaces.com/settings/8826/BG-(1).png'
          alt='login page'
          className='h-full w-full object-cover'
        />
      </div>
      <div className="lg:w-1/2 mt-3 bg-[url('https://vcards.infyom.com/assets/images/top-vector.png')]   bg-top">
        <div className='flex items-center justify-center'>
          <div className='mr-5'>
            <img
              src='https://infyvcards-demo.nyc3.digitaloceanspaces.com/settings/9168/Logo-1.png'
              alt=''
            />
          </div>
          <h1 className='text-xl font-semibold'>vCard Builder</h1>
        </div>
        <h1 className='text-center text-xl font-semibold mt-4'>
          Create an account
        </h1>
        <div className='flex justify-center mt-5'>
          <div className='w-2/3'>
            <div>
              <span className='ml-1 '>
                Name <span className='text-error fond-bold'>*</span>
              </span>
              <label
                className='input input-bordered flex mb-3 mt-2 items-center gap-2'
                htmlFor='name'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 16 16'
                  fill='currentColor'
                  className='h-4 w-4 opacity-70'
                >
                  <path d='M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z' />
                </svg>

                <input
                  type='text'
                  required
                  className='grow'
                  name='name'
                  placeholder='Name'
                />
              </label>
            </div>
            <div>
              <span className='ml-1 '>
                Email <span className='text-error fond-bold'>*</span>
              </span>
              <label
                className='input input-bordered flex mb-3 mt-2 items-center gap-2'
                htmlFor='email'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 16 16'
                  fill='currentColor'
                  className='h-4 w-4 opacity-70'
                >
                  <path d='M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z' />
                  <path d='M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z' />
                </svg>

                <input
                  type='email'
                  required
                  className='grow'
                  name='email'
                  placeholder='Email'
                />
              </label>
            </div>
            <div className='mb-3'>
              <label htmlFor='phone' className='ml-1 block'>
                <span className='text-gray-700'>Phone:</span>
                <span className='text-error font-bold ml-1'>*</span>
              </label>
              <PhoneInput
                country={'my'} // Default country code
                inputProps={{
                  name: 'phone',
                  required: true,
                  autoFocus: true
                }}
                containerStyle={{
                  width: '100%'
                }}
                inputStyle={{
                  width: '100%',
                  height: '40px',
                  borderRadius: '10px',
                  border: '1px solid #ccc',
                  paddingLeft: '50px',
                  paddingTop: '23px',
                  paddingBottom: '23px'
                }}
                buttonStyle={{
                  borderRadius: '4px 0 0 4px'
                }}
                dropdownStyle={{
                  borderRadius: '0 0 4px 4px'
                }}
              />
            </div>
            <div>
              <div className='flex justify-between'>
                <span className='ml-1 '>
                  Password <span className='text-error fond-bold'>*</span>
                </span>

                <span className='text-blue-500 hover:text-blue-800 cursor-pointer'>
                  Forget Password ?
                </span>
              </div>
              <label
                className='input input-bordered flex mt-2 items-center gap-2'
                htmlFor='password'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 16 16'
                  fill='currentColor'
                  className='h-4 w-4 opacity-70'
                >
                  <path
                    fillRule='evenodd'
                    d='M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z'
                    clipRule='evenodd'
                  />
                </svg>
                <input
                  type='password'
                  className='grow'
                  name='password'
                  placeholder='Password'
                />
              </label>
            </div>
            <div className='mt-4 w-grow'>
              <label className='flex items-center cursor-pointer'>
                <input type='checkbox' onChange={e=>setChecked(e.target.checked)} className='checkbox mr-1' />
                <span className='text-sm'>By signing up you agree to our <span className='text-blue-500 hover:text-blue-800 cursor-pointer'>Terms & Conditions</span> & <span className='text-blue-500 hover:text-blue-800 cursor-pointer'>Privacy Policy</span></span>
              </label>
            </div>
            <button disabled={!checked} className='btn btn-info text-white w-full mt-5 mb-3'>
              Register
            </button>

            <div className='text-center'>
              <span>
                Already have an account?{' '}
                <Link to='/login'>
                  <span className='ml-1 text-blue-500 hover:text-blue-800 cursor-pointer'>
                    Sign in here
                  </span>
                </Link>
              </span>
            </div>

            <button className='btn btn-error text-white w-full mt-5 mb-3'>
              <FaGoogle /> Login via Google
            </button>

            <div className='text-center text-sm'>
              <span>
                All Rights Reserved © 2024{' '}
                <span className='text-blue-500'>GM Shimon</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Registration
