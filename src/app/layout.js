import { Toaster } from 'react-hot-toast'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Oppulenzofficial',
  description: 'Official Website for the Oppulenzofficial investment platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Toaster position='top-right' reverseOrder={false} />

        {children}
      </body>
    </html>
  )
}
