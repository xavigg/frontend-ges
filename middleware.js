import { NextResponse } from "next/server";
import { Routes } from "@/app/types";

export async function middleware(req) {
  if (req.nextUrl.pathname.startsWith('/auth')) {
    return NextResponse.next();
  }

  const token = req.cookies.get('auth-cookie');

  if (!token) {
    return NextResponse.redirect(new URL('/auth', req.url));
  }

  try {
    // Verificación del token llamando al backend usando fetch
    const url = `${process.env.NEXT_PUBLIC_LOCAL_BACKEND}${Routes.tokenVerify}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include' // Esto asegura que las cookies se envíen con la solicitud
    });
    console.log(response.cookies)
    if (!response.ok) {
      throw new Error('Token inválido');
    }

    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL('/auth', req.url));
  }
}

export const config = {
  matcher: '/((?!auth).*)', // Aplica el middleware a todas las rutas excepto '/auth'
};