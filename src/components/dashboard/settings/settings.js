import SmallLoader from '@/helpers/Spinner'
import React, { useState } from 'react'
import { makeApiCall } from '../../../../lib/api'
import toaster from '@/helpers/toaster'

function Settings() {
  const [isLoading, setIsLoading] = useState(false)

  const [bankDetails, setBankDetails] = useState({
    bank_name: '',
    account_number: '',
    account_name: '',
  })
  const handleUserInputs = (e) => {
    const name = e.target.name
    const value = e.target.value
    setBankDetails({
      ...bankDetails,
      [name]: value,
    })
  }
  const handleSubmit = async () => {
    // e.preventDefault()
    setIsLoading(true)
    const response = await makeApiCall('/bankDetails', 'POST', bankDetails)
    console.log(response)
    setIsLoading(false)

    if (response?.message === 'bank details successfully updated') {
      toaster('Bank Details Successfully Updated', 'success')
      setIsLoading(false)
      setBankDetails({
        bank_name: '',
        account_number: '',
        account_name: '',
      })
      return
    }

    // if (response.error === 'Invalid credentials') {
    //   setIsLoading(false)
    //   toaster(`${response?.error}`, 'error')
    //   toaster(`${response?.error}`, 'error')
    //   // console.log(response.response.data.email)
    // }
  }
  return (
    <div className='bg-white rounded-lg w-full h-full p-5'>
      <h3 className='text-center font-bold text-[20px] capitalize'>
        Update You Bank Details
      </h3>
      <div>
        <p className='font-bold'>Bank Name</p>
        <input
          className='border-2 w-full h-[46px] rounded-[8px] outline-none pl-2 text-[12px] mb-5'
          type='text'
          name='bank_name'
          id='password'
          placeholder='Bank Name'
          onChange={handleUserInputs}
        />
      </div>
      <div>
        <p className='font-bold'>Bank Account Name</p>
        <input
          className='border-2 w-full h-[46px] rounded-[8px] outline-none pl-2 text-[12px] mb-5'
          type='text'
          name='account_name'
          id='password'
          placeholder='Bank Account Name'
          onChange={handleUserInputs}
        />
      </div>
      <div>
        <p className='font-bold'>Bank Account Number</p>
        <input
          className='border-2 w-full h-[46px] rounded-[8px] outline-none pl-2 text-[12px] mb-5'
          type='text'
          name='account_number'
          id='password'
          placeholder='Bank Account Number'
          onChange={handleUserInputs}
        />
      </div>
      <div className='flex flex-col items-center justify-center w-full'>
        <button
          className='w-[280px] lg:w-[326px] h-[46px] bg-[#021a36] rounded-[8px] text-white mb-2'
          onClick={handleSubmit}
          disabled={isLoading}
        >
          {isLoading ? (
            <div className='flex items-center justify-center'>
              <SmallLoader size={20} thickness={2} color='#fff' />
            </div>
          ) : (
            'Update Details'
          )}
        </button>
      </div>
    </div>
  )
}

export default Settings
