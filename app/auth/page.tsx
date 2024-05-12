import { Metadata } from "next";
import React from "react";
import LogIn from "./components/login";

export const metadata: Metadata = {
  title: "Gestion v1 | Login",
  description: "Login page to admin dashboard",
};

const LoginPage: React.FC = () => {
  return (
      <LogIn/>
  );
};

export default LoginPage;
