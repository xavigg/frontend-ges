"use client";
import React, { useEffect, useState } from "react";
import DefaultLayout from "@/app/components/Layouts/DefaultLayout";
import ProductListTablePage from "@products/components/productListTable";
import Breadcrumb from "@/app/components/Breadcrumbs/Breadcrumb";
import { getProducts } from "@products/services/product.service";
import { Product } from "@products/models/product.model";

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProducts();
        setProducts(products);
      } catch (err: any) {
        console.log(error)
        setError(err.message);
      }
    };
    fetchProducts();
  }, []);

  return (
    <DefaultLayout>
      <Breadcrumb
        backSite={[{ name: "Product", href: "/products" }]}
        pageName="List All"
      />
      {error ? (
        <div className="error">{error}</div>
      ) : (
        <ProductListTablePage products={products} />
      )}
    </DefaultLayout>
  );
};

export default ProductsPage;
