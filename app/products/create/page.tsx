import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";
import CreateProductForm from "../components/createProductForm";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

export const metadata: Metadata = {
  title: "Gestion v1 | Products > Create",
  description:
    "Create a Product",
};

const ProductCreatePage: React.FC = () => {
  return (
    <DefaultLayout>
      <Breadcrumb siteName= "Product" pageName="Create Product" />
      <CreateProductForm/>
    </DefaultLayout>
  );
};

export default ProductCreatePage;
