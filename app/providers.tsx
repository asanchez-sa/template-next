"use client";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

if (typeof window !== "undefined") {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    person_profiles: "identified_only",
    capture_pageview: false,
    capture_pageleave: true,
  });
}

type ProviderProps = {
  locale: string;
  children: React.ReactNode;
};

export function PHProvider({ locale, children }: ProviderProps) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
