import { z } from "zod"

export const loginSchema = z.object({
  identifier: z.string().min(1),
  password: z.string().min(1),
})

export const registerSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({ message: "Invalid email address" }),
  fullName: z
    .string({
      required_error: "Full name is required",
      invalid_type_error: "Invalid Full name",
    })
    .min(3, "Full name must contain at least 3 character")
    .max(100),
  phoneNumber: z
    .string({
      required_error: "Phone number is required",
      invalid_type_error: "Invalid Phone number",
    })
    .min(9, "Phone number must be a minimum of 9 digits")
    .max(12, "Phone number must be a maximum of 12 digits"),
  password: z
    .string({
      required_error: "Password is required",
      invalid_type_error: "Invalid Password",
    })
    .min(8, "contains at least 8 characters")
    .refine(
      (value) => {
        const hasLowercase = /[a-z]/.test(value)
        const hasUppercase = /[A-Z]/.test(value)
        return hasLowercase && hasUppercase
      },
      {
        message: "contains both lower (a-z) and upper case letters (A-Z)",
      }
    )
    .refine((value) => /[0-9!@#$%^&*(),.?":{}|<>]/.test(value), {
      message: "contains at least one number (0-9) or a symbol",
    }),
})
