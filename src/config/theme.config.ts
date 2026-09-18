export const themeConfig = {
  colors: {
    primary: "#A3FF6B", // Verde Tech
    secondary: "#1F2937", // Azul Grafite
    support: "#94A3BB", // Cinza
    background: "#E5E7EB", // Cinza Claro
  },
  fonts: {
    sans: "var(--font-montserrat)",
  },
  radius: {
    sm: "0.5rem",
    md: "0.75rem",
    lg: "1.25rem",
    xl: "2rem",
  },
} as const;

export type ThemeConfig = typeof themeConfig;
