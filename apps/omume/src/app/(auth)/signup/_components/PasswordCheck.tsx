import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import { z } from "zod";
import clx from "classnames";

type Props = {
  password: string;
  type: "length" | "case" | "special_char";
};

export default function PasswordCheck({ password, type }: Props) {
  let schema;
  let validationField;
  let message = "";
  switch (type) {
    case "length":
      schema = z.string().min(8);
      validationField = schema.safeParse(password);
      message = "contains at least 8 characters";
      break;
    case "case":
      schema = z
        .string()
        .refine((value) => /[a-z]/.test(value) && /[A-Z]/.test(value));
      validationField = schema.safeParse(password);
      message = "contains both lower (a-z) and upper case letters (A-Z)";
      break;
    case "special_char":
      schema = z
        .string()
        .refine((value) => /[0-9!@#$%^&*(),.?":{}|<>]/.test(value));
      validationField = schema.safeParse(password);
      message = "contains at least one number (0-9) or a symbol";
      break;

    default:
      break;
  }

  if (!schema || !validationField) return null;

  return (
    <p
      className={clx("flex gap-2 items-center", {
        "text-[#F04438]": !!validationField.error,
        "text-[#34A853]": validationField.success,
      })}
    >
      {validationField.success ? <FaCheck /> : <FaTimes />}{" "}
      <span>{message}</span>
    </p>
  );
}
