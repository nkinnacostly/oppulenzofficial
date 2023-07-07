import React from 'react'
import Cookies from 'js-cookie'
import { useUser } from '@/helpers/getUser'

function ProfileSection() {
  const user = useUser() || null

  return (
    <div className='flex flex-col w-full h-full p-5 bg-white '>
      <div className='h-[100px]  w-full flex items-center justify-center'>
        <div className='h-[80px] w-[80px] rounded-full  bg-black'></div>
      </div>
      <div className='grid grid-cols-2 mt-4 place-content-center'>
        <p>Full Name:</p>
        <p>{` ${user?.user?.name}`}</p>
      </div>
      <div className='grid grid-cols-2 mt-4'>
        <p>Email:</p>
        <p>{`${user?.user?.email}`}</p>
      </div>
      <div className='grid grid-cols-2 mt-4'>
        <p>Phone:</p>
        <p>{` ${user?.user?.phone}`}</p>
      </div>
      <div className='grid grid-cols-2 mt-4'>
        <p>Bank Account Name:</p>
        <p>NILL</p>
      </div>
      <div className='grid grid-cols-2 mt-4'>
        <p>Bank Account Number:</p>
        <p>NILL</p>
      </div>
      <div className='grid grid-cols-2 mt-4'>
        <p>Bank Name:</p>
        <p>NILL</p>
      </div>
    </div>
  )
}

export default ProfileSection
