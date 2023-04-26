import { object, string, TypeOf } from "zod";
import { MOBILE_REGEX_BD } from "./helper";

export const merchantSchema = object({
  brand_name: string().nonempty({
    message: "Please enter your brand name",
  }),
  // user_name: string().nonempty({
  //   message: "Please enter a unique user name",
  // }),
  email: string().email({
    message: "Please enter a valid email address",
  }),
  phone: string()
    .nonempty({
      message: "Phone is required",
    })
    .regex(MOBILE_REGEX_BD, {
      message: "Phone number is not valid",
    }),
  password: string().nonempty({
    message: "Password is required",
  }),
  password_confirmation: string().nonempty({
    message: "Password confirmation is required",
  }),
}).refine((data) => data.password === data.password_confirmation, {
  message: "Passwords do not match",
  path: ["password_confirmation"],
});

export const createSessionSchema = object({
  email: string({
    required_error: "Email is required",
  }).email("Invalid email or password"),
  password: string({
    required_error: "Password is required",
  }).min(6, "Invalid email or password"),
});

export type MerchantInput = TypeOf<typeof merchantSchema>;
export type CreateSessionInput = TypeOf<typeof createSessionSchema>;
