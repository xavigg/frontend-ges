import { Metadata } from "next";
import DefaultLayout from "@/app/components/Layouts/DefaultLayout";
import React from "react";
import Breadcrumb from "@/app/components/Breadcrumbs/Breadcrumb";
import BrandListPage from "@brands/components/brandListTable";

export const metadata: Metadata = {
  title: "Gestion v1 | Category > Create",
  description: "Create a Category",
};

const CreateBrandPage: React.FC = () => {
  return (
    <DefaultLayout>
      <Breadcrumb backSite={[{ name: "Brands", href: "/brands" }]}  pageName="List All" />
      <BrandListPage />
    </DefaultLayout>
  );
};

export default CreateBrandPage;