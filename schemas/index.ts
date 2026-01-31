import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({ message: "Invalid Email" }),
  password: z.string().min(1, { message: "Invalid Password" }),
});

export const PostSchema = z.object({
  title: z.string().min(1),
  content: z.string().min(1),
  image: z.string(),
});
