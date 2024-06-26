import { IExecutionResult, Routes } from "@appTypes/index";
import { Category } from "@categories/index";
import axios from "axios";

export const getCategories = async (): Promise<Category[]> => {
  try {
    const url = `${process.env.NEXT_PUBLIC_LOCAL_BACKEND}${Routes.CATEGORIES}`;
    const response = await axios.get(url, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
};

export async function createCategory(name: string): Promise<IExecutionResult> {
  const newCategory = { name: name };
  const url = `${process.env.NEXT_PUBLIC_LOCAL_BACKEND}${Routes.CATEGORIES}`;
  try {
    const response = await axios.post(url, newCategory, {
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
