import { NextApiRequest } from "next"
import { NextResponse } from "next/server"

export function middleware(request:NextApiRequest){
  return NextResponse.redirect(new URL('/', request.url))
    
}

export const config = {
    matcher: ['/about/:path*'],
}