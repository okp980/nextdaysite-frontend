export { auth as middleware } from "./auth"
// import { auth } from "./auth"
// import { Role } from "@/app/util/types/user"
// import { NextResponse } from "next/server"

// export default auth((req) => {
//   if (!req.auth) {
//     return NextResponse.redirect(new URL("/signin", req.url))
//   }

//   console.log("re auth", req.auth.user)

//   if (
//     req.auth.user?.role !== "admin" &&
//     req.nextUrl.pathname.startsWith("/bussiness")
//   ) {
//     return NextResponse.rewrite(new URL("/403", req.url))
//   }
//   if (
//     req.auth.user?.role !== "user" &&
//     req.nextUrl.pathname.startsWith("/user")
//   ) {
//     return NextResponse.rewrite(new URL("/403", req.url))
//   }

//   return NextResponse.next()
// }) as any

// export const config = {
//   // matcher: ["/onboarding/:path*", "/user/:path*", "/bussiness/:path*"],
//   matcher: ["/user/:path*", "/bussiness/:path*"],
// }
