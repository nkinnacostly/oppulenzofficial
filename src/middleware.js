import { NextResponse } from 'next/server'

export default function Middleware(req) {
  let verify = req.cookies.get('user_token')
  let url = req.url
  const { origin } = req.nextUrl
  if (!verify && url.includes('/dashboard')) {
    return NextResponse.redirect(`${origin}/`)
  }
}
