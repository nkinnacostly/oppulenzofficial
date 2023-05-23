import Image from 'next/image'
import React from 'react'
import Human1 from '../../../../assets/png/1.png'
import Human2 from '../../../../assets/png/2.png'
import Human3 from '../../../../assets/png/3.png'
import Dot1 from '../../../../assets/png/4.png'
import Dot2 from '../../../../assets/png/5.png'
import Link from 'next/link'

function Index() {
  return (
    <div className='w-full h-[100vh] '>
      <div className='grid justify-center w-full h-full grid-cols-1 lg:grid-cols-2 '>
        <div className='w-full h-full bg-[#6C63FF]'>
          <div className='flex items-center justify-start'>
            <div>
              <Image src={Human1} height={230} width={230} alt='' />
            </div>
            <div>
              <h1 className='text-[#3F3F3F]'>Invest Online</h1>
              <p className='text-white'>with a simple tap</p>
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <div>
              <h1 className='text-[#3F3F3F]'>Unlimited</h1>
              <p className='text-white'>Funding</p>
            </div>
            <div>
              <Image src={Human2} height={230} width={230} alt='' />
            </div>
          </div>
          <div className='flex items-center justify-start'>
            <div>
              <Image src={Human3} height={230} width={230} alt='' />
            </div>
            <div>
              <h1 className='text-[#3F3F3F]'>Pay all</h1>
              <p className='text-white'>Over the World</p>
            </div>
          </div>
        </div>
        <div className='w-full h-full'>
          <div className='flex justify-between w-full h-[90px] '>
            <Image src={Dot1} alt='' height={100} width={100} />
            <Image src={Dot2} alt='' height={100} width={100} />
          </div>
          <div className='flex items-center justify-center w-full h-[calc(100%-90px-90px)]   flex-col'>
            <div className='flex flex-col items-center justify-center w-full'>
              <div>
                <p className='mb-1 text-sm text-slate-500'>Email</p>
                <input
                  className='border-2 w-[280px] lg:w-[326px] h-[46px] rounded-[8px] outline-none pl-2 text-[12px] mb-5'
                  type='text'
                  name=''
                  id=''
                  placeholder='Enter your Email'
                />
              </div>
              <div>
                <p className='mb-1 text-sm text-slate-500'>Password</p>
                <input
                  className='border-2 w-[280px] lg:w-[326px] h-[46px] rounded-[8px] outline-none pl-2 text-[12px] mb-5'
                  type='text'
                  name=''
                  id=''
                  placeholder='Enter your Password'
                />
              </div>
            </div>
            <div className='flex flex-col items-center justify-center w-full'>
              <button className='w-[280px] lg:w-[326px] h-[46px] bg-[#D0D0D0] rounded-[8px] text-white mb-2'>
                Submit
              </button>
              <p className='text-sm text-slate-500'>
                Not Registered ?
                <Link href='/sign-up' className='pl-2 text-[#6C63FF]'>
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
          <div className='flex justify-between w-full h-[90px] '>
            <Image src={Dot1} alt='' height={100} width={100} />
            <Image src={Dot2} alt='' height={100} width={100} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
