"use client";
import React, { useState } from "react";
import { Metadata } from "next";
import { logIn, ILogin } from "@auth/index";
import { useRouter } from "next/navigation";

export const metadata: Metadata = {
  title: "Gestion v1 | Login",
  description: "Login to admin dashboard",
};

const LogIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const loginData: ILogin = { email, password };

    try {
      const response = await logIn(loginData);
      console.log("Login successful: ", response.message);
      router.push("/products");
    } catch (error) {
      console.error("Login failed: ", error);
    }
  };

  return (
    <div className="flex min-h-screen place-items-center justify-center bg-black px-2 py-10 sm:px-4 lg:px-6">
      <div className="w-full max-w-md space-y-4">
        <div className="flex place-items-center justify-center">
          <img
            src="/images/logo/clsn.png"
            className="py-1"
            width={200}
            height={200}
          ></img>
        </div>
        <div className="flex place-items-center justify-center">
          <h2 className="mb-1 text-2xl font-bold text-white sm:text-title-xl2">
            Login
          </h2>
        </div>
        <form className="mt-5 space-y-4" onSubmit={handleSubmit} method="POST">
          <input type="hidden" name="remember" value="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Correo electrónico
              </label>
              <input
                id="email"
                name="email"
                value={email}
                type="email"
                autoFocus
                placeholder="Enter a valid email"
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border-gray-300 placeholder-gray-500 text-gray-900 relative block w-full appearance-none rounded-none rounded-t-md border px-3 py-2 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Contraseña
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
                required
                className="border-gray-300 placeholder-gray-500 text-gray-900 relative block w-full appearance-none rounded-none rounded-b-md border px-3 py-2 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Contraseña"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Iniciar sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
