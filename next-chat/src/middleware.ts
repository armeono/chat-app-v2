import { getToken } from "next-auth/jwt";
import withAuth, { NextRequestWithAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  async function middleware(req: NextRequestWithAuth) {
    if (req.nextUrl.pathname === "/") {
      return NextResponse.redirect(new URL("/chat", req.url));
    }
    const token = await getToken({ req });

    const isAuth = !!token;

    if (!isAuth) {
      return NextResponse.redirect(new URL(`/login`, req.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: () => {
        return true;
      },
    },
  }
);

export const config = {
  matcher: [
    "/((?!login|reset-password|forgot-password|tracking|_next/static|favicon.ico|api/ecom/|imgs).*)",
  ],
};
