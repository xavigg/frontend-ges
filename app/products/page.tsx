
import { Metadata } from "next";
import React from "react";
import DefaultLayout from "../components/Layouts/DefaultLayout";
import Breadcrumb from "../components/Breadcrumbs/Breadcrumb";
import ProductListTablePage from "./components/productListTable";
import ErrorBoundary from "../components/ErrorBoundary/errorBoundary";

export const metadata: Metadata = {
  title: "Gestion v1 | Login",
  description: "Login page to admin dashboard",
};

export default async function Home() {

  return (
    <DefaultLayout>
        <Breadcrumb
          backSite={[{ name: "Product", href: "/products" }]}
          pageName="List All"
        />
        <ProductListTablePage />
    </DefaultLayout>
  );
}
