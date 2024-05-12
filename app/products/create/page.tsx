import { Metadata } from "next";
import DefaultLayout from "@/app/components/Layouts/DefaultLayout";
import React from "react";
import CreateProductForm from "../components/createProductForm";
import Breadcrumb from "@/app/components/Breadcrumbs/Breadcrumb";

export const metadata: Metadata = {
  title: "Gestion v1 | Products > Create",
  description:
    "Create a Product",
};

const ProductCreatePage: React.FC = () => {
  return (
    <DefaultLayout>
      <Breadcrumb backSite={[{ name: "Product", href: "/products" }]}  pageName="Create Product" />
      <CreateProductForm/>
    </DefaultLayout>
  );
};

export default ProductCreatePage;
