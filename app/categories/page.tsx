import { Metadata } from "next";
import DefaultLayout from "@/app/components/Layouts/DefaultLayout";
import React from "react";
import Breadcrumb from "@/app/components/Breadcrumbs/Breadcrumb";
import CategoryListPage from "./components/categoryListTable";

export const metadata: Metadata = {
  title: "Gestion v1 | Category > Create",
  description: "Create a Category",
};

const CreateCategoryPage: React.FC = () => {
  return (
    <DefaultLayout>
      <Breadcrumb backSite={[{ name: "Category", href: "/categories" }]}  pageName="List All" />
      <CategoryListPage />
    </DefaultLayout>
  );
};

export default CreateCategoryPage;