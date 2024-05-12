import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import DefaultLayout from "@/app/components/Layouts/DefaultLayout";
import { getProducts } from "./products";

export const metadata: Metadata = {
  title:
    "Gestion v1",
  description: "POS",
};

export default async function Home() {
  const products = await getProducts()
  const cantidad = products.length.toString();

  
  return (
    <>
      <DefaultLayout>
        <ECommerce total={cantidad} />
      </DefaultLayout>
    </>
  );
}
