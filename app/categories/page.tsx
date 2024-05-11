import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import CategoryListPage from "./components/categoryListTable";

export const metadata: Metadata = {
  title: "Gestion v1 | Category > Create",
  description: "Create a Category",
};

const CreateCategoryPage: React.FC = () => {
  return (
    <DefaultLayout>
      <Breadcrumb siteName="Category" pageName="Create Category" />
      <CategoryListPage />
    </DefaultLayout>
  );
};

export default CreateCategoryPage;