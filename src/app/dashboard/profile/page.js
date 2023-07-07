'use client'
import React, { useState } from 'react'
import DashboardLayout from '@/components/dashboard/dashboardLayout'
import ProfileSection from '@/components/dashboard/profile/profile'

function Index() {
  return (
    <DashboardLayout>
      <ProfileSection />
    </DashboardLayout>
  )
}

export default Index
