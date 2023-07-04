'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Logo from '../../../assets/png/logo.png'
import { ReactComponent as DashboardIcon } from '../../../assets/svg/dashboardIcon.svg'
import { ReactComponent as SettingsIcon } from '../../../assets/svg/Line.svg'
import { ReactComponent as Assetsicon } from '../../../assets/svg/assets.svg'
import { ReactComponent as UserIcon } from '../../../assets/svg/user.svg'
import { ReactComponent as InvestIcon } from '../../../assets/svg/box.svg'
import NotificationIcon from '../../../assets/svg/notification.svg'
import { ReactComponent as SearchIcon } from '../../../assets/svg/search.svg'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'

function DashboardLayout({ children }) {
  const [isActive, setIsActive] = useState('dashboard')
  const router = useRouter()
  const pathname = usePathname()
  // console.log(pathname, 'URL')

  const handleClick = (index, path) => {
    setIsActive(index)
    router.push(path)
  }

  const sideBarLinks = [
    {
      index: 0,
      icon: <DashboardIcon />,
      name: `Home`,
      path: `/dashboard`,
    },
    {
      index: 1,
      icon: <InvestIcon />,
      name: `Product`,
      path: `/dashboard/invest`,
    },
    {
      index: 2,
      icon: <SettingsIcon />,
      name: `News flash`,
      path: `/dashboard/profile`,
    },

    // {
    //   index: 2,
    //   icon: <UserIcon />,
    //   name: `Refer a friend`,
    //   path: `/dashboard/profile`,
    // },

    {
      index: 3,
      icon: <SettingsIcon />,
      name: `Settings`,
      path: `/dashboard/settings`,
    },
    {
      index: 4,
      icon: <Assetsicon />,
      name: `About`,
      path: `/dashboard/assets`,
    },
    // {
    //   index: 5,
    //   icon: <UserIcon />,
    //   name: `Team`,
    //   path: `/dashboard/profile`,
    // },
    // {
    //   index: 6,
    //   icon: <SettingsIcon />,
    //   name: `Service`,
    //   path: `/dashboard/profile`,
    // },

    {
      index: 5,
      icon: <SettingsIcon />,
      name: `Contact Us`,
      path: `/dashboard/contact`,
    },
  ]
  return (
    <div className='w-full h-[100vh] flex relative bg-[#F5F4F6]'>
      <div className=' h-full w-[220px] fixed top-0 left-0 bottom-0 flex  flex-col p-3 bg-[#FFFFFF] rounded-b-xl border-r-2'>
        <div className='flex items-center justify-center'>
          <Image src={Logo} alt='' height={50} width={50} />
        </div>
        <ul className='w-full mt-7'>
          {sideBarLinks.map((links, index) => (
            <li className='block  mb-4 pl-5 h-[40px]' key={index}>
              <Link
                href={links.path}
                className={`flex items-center rounded 
              text-center cursor-pointer transition-colors  
              ${
                pathname === `${links.path}`
                  ? 'bg-[#021a36] h-full text-white'
                  : 'bg-white hover:bg-[#dcebf9] h-full'
              }
              `}
              >
                <span className='inline-block ml-4'>
                  <h2 className={`capitalize font-[Manrope]`}>{links.name}</h2>
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div></div>
      </div>
      <div className='w-[calc(100%-220px)] fixed left-[220px] top-0 h-full '>
        <div className='h-[66px] flex justify-between items-center p-3 bg-white rounded-r-xl'>
          <div>
            <div className='relative'>
              <SearchIcon className='absolute top-3 left-2' />
              <input
                type='text'
                placeholder='Search or type'
                className='w-[358px]  bg-[#F5F4F6] h-[40px] rounded-[8px] pl-7
                 font-[Manrope] text-[14px] outline-none'
              />
            </div>
          </div>
          <div className='flex items-center justify-center space-x-5'>
            <div>
              <Image
                src={NotificationIcon}
                height={15}
                width={15}
                alt=''
                className='text-[#5F6165]'
              />
            </div>
            <div className='bg-black w-[40px] h-[40px] rounded-full'></div>
          </div>
        </div>
        <div className='h-[calc(100%-66px)]  bg-[#F5F4F6] p-4 overflow-scroll'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
