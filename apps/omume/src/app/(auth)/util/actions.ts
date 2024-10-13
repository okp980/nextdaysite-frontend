"use server";

import { redirect } from "next/navigation";
import { registerSchema } from "./schema";
import { useDetailsStore } from "./store";

export async function register(prevState: any, formData: FormData) {
  try {
    const validatedFields = registerSchema.safeParse({
      email: formData.get("email"),
      fullName: formData.get("fullName"),
      phoneNumber: formData.get("phoneNumber"),
      password: formData.get("password"),
    });

    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }
    const { setDetails } = useDetailsStore.getState();
    setDetails(validatedFields.data);
  } catch (error) {
    return {
      message: "",
    };
  }

  redirect("/welcome");
}
