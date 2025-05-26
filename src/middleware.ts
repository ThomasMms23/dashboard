import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";

// Le matcher doit être défini ici pour que Next.js le lise.
export const config = {
  matcher: ["/dashboard/:path*", "/my-sales/:path*", "/add-sale/:path*"],
};

export async function middleware(request: NextRequest) {
  console.log("--- Middleware START ---"); // LOG 1
  console.log("Request URL:", request.nextUrl.pathname); // LOG 2

  const session = await auth();

  console.log("Session exists:", !!session); // LOG 3

  // Si la route est protégée ET qu'il n'y a pas de session
  if (!session) {
    console.log("--- NO SESSION: Redirecting to /login ---"); // LOG 4
    // Construit l'URL de login en gardant l'URL d'origine en paramètre
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("callbackUrl", request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Si session OK ou route non protégée, on continue.
  console.log("--- SESSION OK or UNPROTECTED: Allowing request ---"); // LOG 5
  return NextResponse.next();
}
