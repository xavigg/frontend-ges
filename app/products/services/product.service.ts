import { Routes } from "@/app/types/routes.enum";
import { Product } from "../models/product.model";

export const getProducts = (): Promise<Product[]> => {
  const url = `${process.env.NEXT_PUBLIC_LOCAL_BACKEND}${Routes.PRODUCTS}`;
  return fetch(url, { cache: "no-store" })
      .then((response) => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then((data) => data as Product[])  // Asegura que el tipo de dato retornado sea Product[]
      .catch((error) => {
          console.error('Failed to fetch products:', error);
          return [] as Product[];  // Retorna un arreglo vacío si ocurre un error
      });
};


export const getProductByInternalCode = (
  internalCode: string,
): Promise<Product> => {
  const url = process.env.VERCEL_HOST + Routes.PRODUCT_DETAIL + internalCode;
  const productData = fetch(url, { cache: "no-store" }).then((response) =>
    response.json(),
  );
  return productData;
};

export const getProductByBrand = (brand: string): Promise<Product[]> => {
  const url =
    process.env.VERCEL_HOST + Routes.PRODUCT_BRAND + brand.toLowerCase();
  const productData = fetch(url, { cache: "no-store" }).then((response) =>
    response.json(),
  );
  return productData;
};

export const getProductByCondition = (condition: string): Promise<Product> => {
  const url = process.env.VERCEL_HOST + Routes.PRODUCT_CONDITION + condition;
  const productData = fetch(url, { cache: "no-store" }).then((response) =>
    response.json(),
  );
  return productData;
};

export async function newProduct(data: any) {
  const newP = {
    productName: data.productName,
    description: data.description,
    barCode: data.barCode,
    category: data.category,
    subCategory: data.subCategory,
    brand: data.brand,
    warranty: data.warranty,
    price: data.price,
    aditionals: data.aditionals,
    tax: data.tax,
    markup: data.markup,
    minStock: data.minStock,
    details: {
      storageSize: data.dstorageSize,
      ramSize: data.dramSize,
      processorName: data.dprocessorName,
      mainCameraQuantity: data.dmainCameraQuantity,
      mainCameraResolution: data.dmainCameraResolution,
      selfieCameraResolution: data.dselfieCameraResolution,
      screenDetail: data.dscreenDetail,
      batteryCapacity: data.dbatteryCapacity,
      os: data.dos,
      condition: data.dcondition,
    },
    onlineMarket: true,
    deleted: false,
    serialNumberRequired: true,
    avatarUrl: data.avatarUrl,
  };

  try {
    const url = process.env.NEXT_PUBLIC_LOCAL_BACKEND + Routes.PRODUCTS;
    const options = {
      method: "POST",
      body: JSON.stringify(newP),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(url, options);
    const newData = await response.json();
    console.log(newData);
    return newData;
  } catch (error) {
    console.error(error);
  }
}
