import { defineConfig } from "tailwindcss/helpers";

export default defineConfig({
    theme: {
        extend: {
            fontFamily: {
                display: ["var(--font-manrope)", "sans-serif"],
                sac: [""]
            },
            colors: {
                primary: "#F25639",
                avocado: {
                    200: "oklch(0.98 0.04 113.22)",
                    300: "oklch(0.94 0.11 115.03)",
                    400: "oklch(0.92 0.19 114.08)",
                    500: "oklch(0.84 0.18 117.33)",
                    600: "oklch(0.53 0.12 118.34)",
                },
            },
            transitionTimingFunction: {
                fluid: "cubic-bezier(0.3, 0, 0, 1)",
                snappy: "cubic-bezier(0.2, 0, 0, 1)",
            },
        },
    },
});
