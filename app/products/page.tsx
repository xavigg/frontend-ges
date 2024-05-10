import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";
import ProductListTablePage from "./components/productListTable";

export const metadata: Metadata = {
  title: "Gestion v1 | Products",
  description:
    "List of products",
};

const ProductsPage: React.FC = () => {
  return (
    <DefaultLayout>
      <ProductListTablePage/>
    </DefaultLayout>
  );
};

export default ProductsPage;
