"use server";

import { cookies } from "next/headers";
import { signin, signup } from "@/utils/authTools";
import { redirect } from "next/navigation";
import { COOKIE_NAME } from "@/utils/constants";
import { authSchema } from "@/validation-schemas/auth";

export const registerUser = async (
  prevState: { message: string | null },
  formData: FormData
) => {
  const data = authSchema.parse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  try {
    const { token } = await signup(data);
    cookies().set(COOKIE_NAME, token);
  } catch (e) {
    console.error(e);
    return { message: "Failed to register" };
  }

  redirect("/dashboard");
};

export const signinUser = async (
  prevState: { message: string | null },
  formData: FormData
) => {
  const data = authSchema.parse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  try {
    const { token } = await signin(data);
    cookies().set(COOKIE_NAME, token);
  } catch (e) {
    console.error(e);
    return { message: "Failed to sign in" };
  }

  redirect("/dashboard");
};
