// app/middleware.js
import { NextResponse } from 'next/server';
import axios from '../lib/axios';

export async function middleware(req) {
  const { pathname } = req.nextUrl;

  // Permitir el acceso a la ruta de autenticación sin verificación
  if (pathname.startsWith('/auth')) {
    return NextResponse.next();
  }

  try {
    // Realizar una solicitud al backend para verificar el token
    await axios.get('/auth/verify-token', {
      headers: {
        Cookie: req.headers.get('cookie'),
      },
    });

    // Si la verificación es exitosa, continuar con la solicitud
    return NextResponse.next();
  } catch (error) {
    // Si hay un error (token inválido o expirado), redirigir al usuario a la página de login
    return NextResponse.redirect('/auth/login');
  }
}

export const config = {
  matcher: ['/((?!auth).*)'], // Aplica el middleware a todas las rutas excepto /auth
};
