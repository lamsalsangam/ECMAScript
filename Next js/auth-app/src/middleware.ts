import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // Catch the path trying to visit
  const path = request.nextUrl.pathname;

  const isPublicPath = path === "/login" || path === "/signup";

  const token = request.cookies.get("token")?.value || "";

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
}

// See "Matching Paths"

export const config = {
  matcher: ["/", "/profile/:path*", "/login", "/signup"],
};
