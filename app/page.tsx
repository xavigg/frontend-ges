import { Metadata } from "next";
import DefaultLayout from "@/app/components/Layouts/DefaultLayout";
import React from "react";
import Breadcrumb from "@/app/components/Breadcrumbs/Breadcrumb";
import BrandListPage from "@brands/components/brandListTable";
import LogIn from "./auth/components/login";

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