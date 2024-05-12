import { IExecutionResult, Routes } from "@/app/types";
import { ILogin } from "@auth/types/login.interface";
import axios from "axios";

export async function logIn(loginData: ILogin): Promise<IExecutionResult> {
  try {
    const url = `${process.env.NEXT_PUBLIC_LOCAL_BACKEND}${Routes.Auth_Login}`;
    const response = await axios.post(
      url,
      {
        email: loginData.email,
        password: loginData.password,
      },
      {
        withCredentials: true,
      },
    );
    return response.data;
  } catch (error) {
    console.error("Login error: ", error);
    throw error;
  }
}
