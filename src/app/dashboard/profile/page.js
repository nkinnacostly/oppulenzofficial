'use client'
import React, { useEffect, useState } from 'react'
import DashboardLayout from '@/components/dashboard/dashboardLayout'
import ProfileSection from '@/components/dashboard/profile/profile'
import { useUser } from '@/helpers/getUser'
import { makeApiCall } from '../../../../lib/api'

function Index() {
  const [userDetails, setUserDetails] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const user = useUser() || null
  const getProducts = async () => {
    // e.preventDefault()
    setIsLoading(true)
    const response = await makeApiCall(`/getUser/${user?.user?.id}`)
    setUserDetails(response)
    setIsLoading(false)
    console.log(response)
  }

  useEffect(() => {
    getProducts()
  }, [])
  return (
    <DashboardLayout>
      {isLoading ? (
        <div className='flex items-center justify-center h-full'>
          <span class='loader'></span>
        </div>
      ) : (
        <ProfileSection user={userDetails} />
      )}
    </DashboardLayout>
  )
}

export default Index
