'use client'
import React, { useEffect, useState } from 'react'
import DashboardLayout from '@/components/dashboard/dashboardLayout'
import Plant from '../../../assets/png/plant.jpeg'
import { makeApiCall } from '../../../lib/api'
import { API_BASE_URL, IMAGE_BASE_URL } from '../../../constant'

function Index() {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const getProducts = async () => {
    // e.preventDefault()
    setIsLoading(true)
    const response = await makeApiCall('/getProduct')
    // console.log(response)
    setProducts(response)
    setIsLoading(false)
    console.log(response)
    // if (response.user.verification_status === 'NO') {
    //   toaster('Account Pending Verification', 'success')
    //   setIsLoading(false)
    //   return
    // } else {
    //   toaster('Login Successful', 'success')
    //   Cookies.set('user_token', response.token)
    //   Cookies.set('user_details', JSON.stringify(response))
    //   setIsLoading(false)
    //   router.push('/dashboard')
    // }

    // if (response.status === 400 || 401) {
    //   toaster(`${response?.error?.email[0]}`, 'error')
    //   toaster(`${response?.error?.phone[0]}`, 'error')
    //   // console.log(response.response.data.email)
    // }
  }

  useEffect(() => {
    getProducts()
  }, [])
  // console.log(IMAGE_BASE_URL)
  // console.log(products[1].image)
  return (
    <div>
      <DashboardLayout>
        <div className='w-ful  h-full flex items-center  flex-col'>
          <div className='h-[350px] w-[80%] flex items-center justify-center  mt-2'>
            <iframe
              className='h-full w-full'
              src='https://www.youtube.com/embed/yOJ4WdUxSyo'
              title='Fivio Foreign - God Did Freestyle (Official Video)'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowfullscreen
            ></iframe>
          </div>
          <h1 className='uppercase font-semibold text-xl mt-8 mb-8'>
            Products
          </h1>
          <div className='h-[calc(100%-350px)]  w-full overflow-scroll '>
            {isLoading ? (
              <div className='flex items-center justify-center h-full'>
                <span class='loader'></span>
              </div>
            ) : (
              <div className='grid grid-cols-3 gap-4 '>
                {products.slice(0, 3).map((prod, index) => (
                  <div key={index} className='w-[300px] h-[360px]'>
                    <div
                      className=''
                      style={{
                        backgroundImage: `url(${IMAGE_BASE_URL}/${prod.image})`,

                        width: '100%',
                        height: '200px',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                      }}
                    ></div>
                    <div className='h-[calc(100%-200px)]  p-2 bg-[#021a36] text-white'>
                      <h2 className='font-bold font-[Manrope] capitalize'>
                        {prod.name}
                      </h2>
                      <div className='flex items-center justify-between'>
                        <p className='text-sm font-[Manrope]'>Daily Income</p>
                        <p className='text-sm font-[Manrope]'>
                          ₦ {prod.daily_income}
                        </p>
                      </div>
                      <div className='flex items-center justify-between'>
                        <p className='text-sm font-[Manrope]'>Interest</p>
                        <p className='text-sm font-[Manrope]'>
                          {prod.interest}
                        </p>
                      </div>
                      <div className='flex items-center justify-between'>
                        <p className='text-sm font-[Manrope]'>Sector</p>
                        <p className='text-sm font-[Manrope] capitalize'>
                          {prod.product_name}
                        </p>
                      </div>
                      {/* <div className='flex items-center justify-between'>
                      <p className='text-sm font-[Manrope]'>Daily Income</p>
                      <p className='text-sm font-[Manrope]'>₦ 3000</p>
                    </div> */}
                      <div className='mt-2 font-[Manrope] font-bold'>
                        ₦ {prod.ammount}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </DashboardLayout>
    </div>
  )
}

export default Index
