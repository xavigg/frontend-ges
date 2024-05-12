import { Metadata } from "next";
import React from "react";
import DefaultLayout from "@components/Layouts/DefaultLayout";
import Breadcrumb from "@components/Breadcrumbs/Breadcrumb";
import CreateCategoryForm from "@categories/components/createCategoryForm";


export const metadata: Metadata = {
  title: "Gestion v1 | Category > Create",
  description: "Create a Category",
};

const CreateCategoryPage: React.FC = () => {
  return (
    <DefaultLayout>
      <Breadcrumb backSite={[{ name: "Category", href: "/categories" }]}  pageName="Create Category" />
      <CreateCategoryForm />
    </DefaultLayout>
  );
};

export default CreateCategoryPage;
