import { NextResponse } from "next/server";
import { authMiddleware, clerkClient } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
  publicRoutes: ["/", "/blog(.*)", "/api(.*)", "/categories(.*)"],
  async afterAuth(auth, req) {
    if (auth.isPublicRoute) {
      //  For public routes, we don't need to do anything
      return NextResponse.next();
    }

    const url = new URL(req.nextUrl.origin);

    if (auth.userId === null || auth.userId === undefined) {
      // If user is not authenticated (userId is null or undefined),
      // redirect them to the sign in page
      url.pathname = "/signin";
      return NextResponse.redirect(url);
    }

    // Set the user's role to user if it doesn't exist
    const user = await clerkClient.users.getUser(auth.userId);

    if (user === null || user === undefined) {
      throw new Error("User not found.");
    }

    // If the user doesn't have a role, set it to user
  },
});

export const config = {
  matcher: [
    "/",
    "/blog(.*)",
    "/write",
    "/(api|trpc)(.*)",
    "/((?!.*\\..*|_next).*)",
  ],
};
