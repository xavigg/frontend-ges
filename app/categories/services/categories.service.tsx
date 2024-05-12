import { IExecutionResult, Routes } from "@appTypes/index";
import { Category } from "@categories/index";

export const getCategories = (): Promise<Category[]> => {
  const url = `${process.env.NEXT_PUBLIC_LOCAL_BACKEND}${Routes.CATEGORIES}`;
  return fetch(url, { cache: "no-store" })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => data as Category[])
    .catch((error) => {
      console.error("Failed to fetch products:", error);
      return [] as Category[];
    });
};

export async function createCategory(name: string): Promise<IExecutionResult> {
  const newCategory = { name: name };
  const url = `${process.env.NEXT_PUBLIC_LOCAL_BACKEND}${Routes.CATEGORIES}`;
  const options = {
    method: "POST",
    body: JSON.stringify(newCategory),
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      const errorData = await response.json();
      console.log(errorData);
      return errorData || "Error desconocido al crear la categoría";
    }
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    throw error;
  }
}
