import { IExecutionResult, Routes } from "@appTypes/index";
import { Brand } from "@brands/index";
import axios from "axios";

export const getBrands = async (): Promise<Brand[]> => {
  try {
    const url = `${process.env.NEXT_PUBLIC_LOCAL_BACKEND}${Routes.BRANDS}`;
    const response = await axios.get(url, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
};

export async function createBrand(name: string): Promise<IExecutionResult> {
  const newBrand = { name: name };
  const url = `${process.env.NEXT_PUBLIC_LOCAL_BACKEND}${Routes.BRANDS}`;
  try {
    const response = await axios.post(url, newBrand, {
      withCredentials: true,
    });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      return { success: false, message: error.response.data.message };
    }
    if (error instanceof Error) {
      return { success: false, message: error.message };
    } else {
      return { success: false, message: "Unknown error occurred" };
    }
  }
}
