import { Metadata } from "next";
import DefaultLayout from "@/app/components/Layouts/DefaultLayout";
import React from "react";
import ProductListTablePage from "./components/productListTable";
import Breadcrumb from "../components/Breadcrumbs/Breadcrumb";

export const metadata: Metadata = {
  title: "Gestion v1 | Products",
  description:
    "List of products",
};

const ProductsPage: React.FC = () => {
  return (
    <DefaultLayout>
      <Breadcrumb backSite={[{ name: "Product", href: "/products" }]}  pageName="List All" />
      <ProductListTablePage/>
    </DefaultLayout>
  );
};

export default ProductsPage;
