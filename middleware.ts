import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale } from "@/lib/i18n/config";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const segments = pathname.split("/").filter(Boolean);
  const maybeLocale = segments[0];

  if (maybeLocale && isLocale(maybeLocale) && maybeLocale === defaultLocale) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace(/^\/pl(?=\/|$)/, "") || "/";
    return NextResponse.redirect(url);
  }

  const locale = maybeLocale && isLocale(maybeLocale) ? maybeLocale : defaultLocale;
  const shouldRewrite = locale === defaultLocale && maybeLocale !== defaultLocale;
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-locale", locale);

  if (shouldRewrite) {
    const url = request.nextUrl.clone();
    url.pathname = pathname === "/" ? `/${defaultLocale}` : `/${defaultLocale}${pathname}`;
    return NextResponse.rewrite(url, { request: { headers: requestHeaders } });
  }

  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
