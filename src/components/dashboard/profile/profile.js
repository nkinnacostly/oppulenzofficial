'use client'
import React, { useEffect } from 'react'
import Cookies from 'js-cookie'
import { useUser } from '@/helpers/getUser'
import { makeApiCall } from '../../../../lib/api'

function ProfileSection({ user }) {
  return (
    <div className='flex flex-col w-full h-full p-5 bg-white '>
      <div className='h-[100px]  w-full flex items-center justify-center'>
        <div className='h-[80px] w-[80px] rounded-full  bg-black'></div>
      </div>
      <div className='grid grid-cols-2 mt-4 place-content-center'>
        <p>Full Name:</p>
        <p>{` ${user?.name}`}</p>
      </div>
      <div className='grid grid-cols-2 mt-4'>
        <p>Email:</p>
        <p>{`${user?.email}`}</p>
      </div>
      <div className='grid grid-cols-2 mt-4'>
        <p>Phone:</p>
        <p>{` ${user?.phone}`}</p>
      </div>
      <div className='grid grid-cols-2 mt-4'>
        <p>Bank Account Name:</p>
        <p>{user?.user_banks?.account_name}</p>
      </div>
      <div className='grid grid-cols-2 mt-4'>
        <p>Bank Account Number:</p>
        <p>{user?.user_banks?.account_number}</p>
      </div>
      <div className='grid grid-cols-2 mt-4'>
        <p>Bank Name:</p>
        <p>{user?.user_banks?.bank_name}</p>
      </div>
    </div>
  )
}

export default ProfileSection
