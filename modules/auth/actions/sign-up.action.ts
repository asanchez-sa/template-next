"use server";

import { actionClient } from "@/core/actions/safe-action";
import { createClient } from "@/core/supabase/server";
import { headers } from "next/headers";
import { SignUpSchema } from "./schemas";

export const SignUpAction = actionClient
  .schema(SignUpSchema)
  .action(async ({ parsedInput: { email, password } }) => {
    const supabase = createClient();
    const origin = headers().get("origin");

    if (!email || !password) {
      return { error: "Email and password are required" };
    }

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    });

    if (error) {
      return {
        ok: false,
        message: "Error sign up",
      };
    }

    return {
      ok: true,
      message: "Check your email for the sign-up link",
    };
  });
