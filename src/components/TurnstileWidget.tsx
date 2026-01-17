"use client";

import { Turnstile } from "@marsidev/react-turnstile";
import { siteConfig } from "@/config/site";
import { useTheme } from "next-themes";

interface TurnstileWidgetProps {
  onVerify: (token: string) => void;
}

export function TurnstileWidget({ onVerify }: TurnstileWidgetProps) {
  const { theme } = useTheme();
  const siteKey = siteConfig.security.turnstileSiteKey;

  // This check specifically looks for the default placeholder key.
  const isPlaceholder = siteKey === "0x4AAAAAACMhAS1DKNYMAxXh";

  if (!siteKey || isPlaceholder) {
    console.error("Cloudflare Turnstile site key is not configured. Using a placeholder.");
    return (
      <div className="my-4 rounded-lg border p-4 text-center text-sm bg-red-100 text-red-700 border-red-200 dark:bg-red-500/10 dark:text-red-400 dark:border-red-500/20">
        The security widget is not configured correctly. Form submission is disabled.
      </div>
    );
  }

  return (
    <div className="my-6 flex justify-center">
      <Turnstile
        siteKey={siteKey}
        onSuccess={onVerify}
        options={{ theme: theme === "dark" ? "dark" : "light" }}
      />
    </div>
  );
}