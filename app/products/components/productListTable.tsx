import React from "react";
import Image from "next/image";
import { Product } from "@products/models/product.model";
import { cookies } from "next/headers";
import { getProductsSSR } from "../services/product.service";

const ProductListTablePage = async () => {
  let products: Product[] = [];
  try {
    const cookieStore = cookies();
    const authToken = cookieStore.get("auth-cookie")?.value; 
    products = await getProductsSSR(authToken);
  } catch (error) {
    return (
      <div> 
        ❌ {(error as Error).message}
        <div>⚠️Try Again</div>
      </div>
    );
  }

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Product List
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-xl bg-black-2 dark:bg-yellow-400 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase text-white dark:text-black xsm:text-base">
              Product
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase text-white dark:text-black xsm:text-base">
              Category
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase text-white dark:text-black xsm:text-base">
              Brand
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase text-white dark:text-black xsm:text-base">
              Price
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase text-white dark:text-black xsm:text-base">
              Warranty
            </h5>
          </div>
        </div>

        {products.map((product: Product, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-5 ${
              key === products.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <div className="flex-shrink-0">
                <Image
                  src={product.img_url}
                  alt={product.name}
                  width={60}
                  height={60}
                />
              </div>
              <p className="hidden text-black dark:text-white sm:block">
                {product.name}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3 dark:text-meta-5">
                {product.category.name}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">{product.brand.name}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-meta-1">${product.price}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-meta-5">{product.warranty} Month</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListTablePage;
