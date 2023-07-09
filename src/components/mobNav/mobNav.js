import React from 'react'
import { ReactComponent as DashboardIcon } from '../../../assets/svg/dashboardIcon.svg'
import { ReactComponent as SettingsIcon } from '../../../assets/svg/Line.svg'
import { ReactComponent as Assetsicon } from '../../../assets/svg/assets.svg'
import { ReactComponent as UserIcon } from '../../../assets/svg/user.svg'
import { ReactComponent as PhoneIcon } from '../../../assets/svg/phone.svg'
import { ReactComponent as InvestIcon } from '../../../assets/svg/box.svg'
import { ReactComponent as AboutIcon } from '../../../assets/svg/about.svg'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
function MobNav() {
  const pathname = usePathname()

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
    //     {
    //       index: 2,
    //       icon: <SettingsIcon />,
    //       name: `News flash`,
    //       path: `/dashboard/news`,
    //     },

    // {
    //   index: 2,
    //   icon: <UserIcon />,
    //   name: `Refer a friend`,
    //   path: `/dashboard/profile`,
    // },

    {
      index: 3,
      icon: <UserIcon />,
      name: `Profile`,
      path: `/dashboard/profile`,
    },
    {
      index: 3,
      icon: <SettingsIcon />,
      name: `Settings`,
      path: `/dashboard/settings`,
    },
    {
      index: 4,
      icon: <AboutIcon />,
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
      icon: <PhoneIcon />,
      name: `Contact Us`,
      path: `/dashboard/contact`,
    },
  ]

  return (
    <div className='w-full lg:hidden fixed bottom-0 z-50 border-2 h-[55px] bg-white'>
      <ul className='w-full mt-7 flex justify-around items-center'>
        {sideBarLinks.map((links, index) => (
          <li className='' key={index}>
            <Link
              href={links.path}
              className={`flex items-center rounded 
              text-center cursor-pointer transition-colors  
              ${
                pathname === `${links.path}`
                  ? 'border-2 h-full text-black'
                  : 'bg-white hover:bg-[#dcebf9] h-full'
              }
              `}
            >
              <span className={`inline-block hover:${links.name}`}>
                {/* <h2 className={`capitalize font-[Manrope]`}>{links.name}</h2> */}
                {links.icon}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MobNav
