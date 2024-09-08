"use server";

import { actionClient } from "@/core/actions/safe-action";
import { createClient } from "@/core/supabase/server";
import { headers } from "next/headers";
import { SignInSchema } from "./schemas";

export const SignInAction = actionClient
  .schema(SignInSchema)
  .action(async ({ parsedInput: { email, password } }) => {
    const supabase = createClient();

    if (!email || !password) {
      return { error: "Email and password are required" };
    }

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return {
        ok: false,
        message: "Error signing up",
      };
    }

    return {
      ok: true,
      message: "Check your email for the sign-in link",
    };
  });
