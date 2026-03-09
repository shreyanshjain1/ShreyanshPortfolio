import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        neon: "0 20px 70px rgba(34, 211, 238, 0.18)",
        deep: "0 28px 90px rgba(2, 6, 23, 0.45)"
      },
      backgroundImage: {
        mesh: "radial-gradient(circle at 20% 20%, rgba(34,211,238,0.22), transparent 22%), radial-gradient(circle at 80% 0%, rgba(168,85,247,0.18), transparent 18%), radial-gradient(circle at 70% 55%, rgba(14,165,233,0.15), transparent 20%), linear-gradient(180deg, #020617 0%, #0b1020 45%, #020617 100%)"
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.06)" }
        },
        marqueeX: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" }
        },
        shine: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" }
        }
      },
      animation: {
        floaty: "floaty 7s ease-in-out infinite",
        pulseGlow: "pulseGlow 5s ease-in-out infinite",
        marqueeX: "marqueeX 22s linear infinite",
        shine: "shine 9s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;
