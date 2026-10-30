import { NextResponse, type NextRequest } from "next/server";
import { adminCookie, verifyAdminToken } from "@/lib/auth/session-token";

export function proxy(request: NextRequest) {
  const session = verifyAdminToken(request.cookies.get(adminCookie)?.value);
  const isLogin = request.nextUrl.pathname === "/admin/login";
  const response = !session && !isLogin
    ? NextResponse.redirect(new URL("/admin/login", request.url))
    : session && isLogin
      ? NextResponse.redirect(new URL("/admin", request.url))
      : NextResponse.next();
  response.headers.set("Cache-Control", "private, no-store, max-age=0");
  return response;
}

export const config = { matcher: "/admin/:path*" };
