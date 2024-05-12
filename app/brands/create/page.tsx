import { Metadata } from "next";
import React from "react";
import DefaultLayout from "@components/Layouts/DefaultLayout";
import Breadcrumb from "@components/Breadcrumbs/Breadcrumb";
import CreateBrandForm from "@brands/components/createBrandForm";


export const metadata: Metadata = {
  title: "Gestion v1 | Brand > Create",
  description: "Create a brand",
};

const CreateBrandPage: React.FC = () => {
  return (
    <DefaultLayout>
      <Breadcrumb backSite={[{ name: "Brands", href: "/brands" }]}  pageName="Create Brand" />
      <CreateBrandForm/>
    </DefaultLayout>
  );
  }

export default CreateBrandPage;
