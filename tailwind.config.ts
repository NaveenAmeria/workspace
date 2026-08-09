import type { Config } from "tailwindcss";

/**
 * Tailwind theme for SmoothCuts.
 * Every color token maps 1:1 to a CSS custom property (RGB triplet) defined
 * in :root inside app/globals.css, so the palette has a single source of truth
 * and Tailwind opacity modifiers (e.g. text-violet/80) keep working.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Surfaces
        base: "rgb(var(--color-base) / <alpha-value>)", // #0A0A0F
        coal: "rgb(var(--color-coal) / <alpha-value>)", // #111118
        card: "rgb(var(--color-card) / <alpha-value>)", // #1A1A24
        line: "rgb(var(--color-line) / <alpha-value>)", // #2A2A38
        // Accents
        violet: "rgb(var(--color-violet) / <alpha-value>)", // #6C63FF
        violh: "rgb(var(--color-violet-h) / <alpha-value>)", // #8B85FF
        mint: "rgb(var(--color-mint) / <alpha-value>)", // #00E5BE
        coral: "rgb(var(--color-coral) / <alpha-value>)", // #FF6B6B
        gold: "rgb(var(--color-gold) / <alpha-value>)", // #FFB800
        // Text
        snow: "rgb(var(--color-snow) / <alpha-value>)", // #F0F0F8
        mute: "rgb(var(--color-mute) / <alpha-value>)", // #9898B0
        dim: "rgb(var(--color-dim) / <alpha-value>)", // #5A5A72
      },
      fontFamily: {
        display: ["var(--font-syne)", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-dm-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-jb-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        card: "12px",
        banner: "16px",
      },
      boxShadow: {
        "glow-violet": "0 20px 60px rgba(108, 99, 255, 0.15)",
        "glow-mockup": "0 40px 120px rgba(108, 99, 255, 0.25)",
        "btn-hover": "0 8px 30px rgba(108, 99, 255, 0.4)",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
