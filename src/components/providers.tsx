"use client";

import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import { LanguageProvider } from "@/lib/language-context";
import "@/lib/i18n";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="data-theme"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <LanguageProvider>
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: "var(--background)",
              color: "var(--foreground)",
              border: "1px solid var(--border)",
            },
          }}
        />
      </LanguageProvider>
    </ThemeProvider>
  );
}
