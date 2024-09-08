import { z } from "zod";

const SignInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3).max(100),
});

const SignUpSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3).max(100),
});

export { SignInSchema, SignUpSchema };
