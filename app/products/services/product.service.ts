import { Routes } from "@/app/types/routes.enum";
import { Product } from "../models/product.model";
import axios from "axios";

export async function getProductsSSR(
  authToken: string | undefined,
): Promise<Product[]> {
  try {
    const url = `${process.env.NEXT_PUBLIC_LOCAL_BACKEND}${Routes.PRODUCTS}`;
    const response = await axios.get(url, {
      headers: {
        Cookie: `auth-cookie=${authToken}`, 
      },
      withCredentials: true,
    });
    return response.data;
  } catch (error: any) {
    console.error(
      "Fetching products fail: ",
      error.message,
      error.response?.data,
    );
    throw new Error(`Error: ${error.message}`);
  }
}

export async function getProducts(): Promise<Product[]> {
  try {
    const url = `${process.env.NEXT_PUBLIC_LOCAL_BACKEND}${Routes.PRODUCTS}`;
    const response = await axios.get(url, {
      withCredentials: true,
    });
    return response.data;
  } catch (error: any) {
    console.error(
      "Fetching products fail: ",
      error.message,
      error.response?.data,
    );
    throw new Error(`Error: ${error.message}`);
  }
}

export async function newProduct(data: any) {
  const newP = {
    productName: data.productName,
    description: data.description,
    barCode: data.barCode,
    onlineMarket: true,
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
