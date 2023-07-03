import React from 'react'
import Telegram from '../../../../assets/png/telegram.jpg'
import Discord from '../../../../assets/png/discord.png'
import Image from 'next/image'
import Link from 'next/link'

function Contact() {
  return (
    <div className='flex items-center justify-center h-full space-x-9'>
      <Link href={'https://t.me/+Y_KoQCkjAXNhZWU0'}>
        <Image src={Telegram} height={300} width={300} alt='' />
      </Link>
      <Link href={'https://t.me/+Y_KoQCkjAXNhZWU0'}>
        <Image src={Discord} height={300} width={300} alt='' />
      </Link>
    </div>
  )
}

export default Contact
