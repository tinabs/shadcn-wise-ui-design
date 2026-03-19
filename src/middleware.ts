import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

/**
 * Redirect 127.0.0.1 to localhost so the address bar shows localhost.
 */
export function middleware(request: NextRequest) {
  const hostname = request.nextUrl.hostname
  if (hostname === "127.0.0.1") {
    const url = request.nextUrl.clone()
    url.hostname = "localhost"
    return NextResponse.redirect(url)
  }
  return NextResponse.next()
}
