import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Poppins", "sans-serif"],
        serif: ["Playfair Display", "serif"],
        script: ["Dancing Script", "cursive"],
        "great-vibes": ["Great Vibes", "cursive"],
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        // Skylarbox Brand Colors - Official Palette
        brand: {
          // Main Colors
          lavender: "#CBA7E0", // Lavender Pastel - Màu chính
          yellow: "#FFF2CC", // Butterlight Yellow - Màu chính
          sage: "#DCE6D5", // Sage Green - Màu chính

          // Secondary Colors
          rose: "#FADCD9", // Pastel Rose - Màu phụ
          sky: "#DDEAF6", // Sky Soft Blue - Màu phụ
          cream: "#FAF9F6", // Cream White - Màu phụ

          // Typography Colors
          brown: "#6D4C41", // Text màu nâu ấm
          gray: "#777777", // Xám trà
        },

        // Legacy colors for compatibility
        primary: {
          50: "#f8f5ff",
          100: "#f0ebff",
          200: "#e0d7ff",
          300: "#c7b3ff",
          400: "#a885ff",
          500: "#CBA7E0", // Lavender Pastel
          600: "#b894d6",
          700: "#9f7ac8",
          800: "#8a5fb8",
          900: "#7a4fa8",
        },
        lavender: {
          50: "#f8f5ff",
          100: "#f0ebff",
          200: "#e0d7ff",
          300: "#c7b3ff",
          400: "#a885ff",
          500: "#CBA7E0", // Lavender Pastel
          600: "#b894d6",
          700: "#9f7ac8",
          800: "#8a5fb8",
          900: "#7a4fa8",
        },
        peach: {
          50: "#fef7ed",
          100: "#fdedd4",
          200: "#fbd7a8",
          300: "#f8bb71",
          400: "#f59538",
          500: "#f3771e",
          600: "#e45d13",
          700: "#bd4512",
          800: "#973816",
          900: "#7a3015",
        },
        cream: {
          50: "#fefefe",
          100: "#fefcfb",
          200: "#fdf8f5",
          300: "#faf4f0",
          400: "#f5ede7",
          500: "#FAF9F6", // Cream White
          600: "#e2d4c8",
          700: "#c8b8a8",
          800: "#a99a87",
          900: "#8a7d6d",
        },
        mint: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
        },
        sage: {
          50: "#f6f7f6",
          100: "#e3e7e3",
          200: "#c7d0c7",
          300: "#a3b1a3",
          400: "#7a8c7a",
          500: "#DCE6D5", // Sage Green
          600: "#4a5a4a",
          700: "#3d493d",
          800: "#333c33",
          900: "#2c322c",
        },
        pink: {
          50: "#fdf2f8",
          100: "#fce7f3",
          200: "#fbcfe8",
          300: "#f9a8d4",
          400: "#f472b6",
          500: "#ec4899",
          600: "#db2777",
          700: "#be185d",
          800: "#9d174d",
          900: "#831843",
        },
        beige: {
          50: "#fefefe",
          100: "#fdfcfb",
          200: "#faf8f5",
          300: "#f5f1eb",
          400: "#ede7df",
          500: "#e5dcd0",
          600: "#d4c7b7",
          700: "#b8a894",
          800: "#9a8b75",
          900: "#7d7160",
        },
        // Legacy color for compatibility
        mainColor: "#CBA7E0",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2s infinite",
        fadeIn: "fadeIn 0.5s ease-in-out",
        slideUp: "slideUp 0.5s ease-out",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "soft-gradient": "linear-gradient(135deg, #FAF9F6 0%, #DDEAF6 100%)",
        "hero-gradient":
          "linear-gradient(135deg, #FAF9F6 0%, #DCE6D5 50%, #DDEAF6 100%)",
        "product-gradient": "linear-gradient(135deg, #FAF9F6 0%, #F0EBFF 100%)",
        "testimonial-gradient":
          "linear-gradient(135deg, #DCE6D5 0%, #FAF9F6 100%)",
        "muse-gradient": "linear-gradient(135deg, #FAF9F6 0%, #F0EBFF 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
