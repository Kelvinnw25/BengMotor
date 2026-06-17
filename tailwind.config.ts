import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Palet "garasi balap": aspal gelap + 2 aksen yang diambil dari logo Beng Motor
        asphalt: "#0B0B0D", // background utama (aspal malam)
        carbon: "#141418", // permukaan kartu
        line: "#26262E", // garis/border halus
        ink: "#F4F2ED", // teks utama (putih hangat)
        mute: "#8C8C96", // teks sekunder
        race: "#FF2D1E", // merah balap (dari merah logo, dicerahkan)
        gold: "#E6B143", // emas (dari wordmark logo)
      },
      fontFamily: {
        // Diset via <link> Google Fonts di layout — tidak perlu fetch saat build.
        display: ["Saira", "system-ui", "sans-serif"],
        cond: ["'Saira Condensed'", "Saira", "sans-serif"],
        body: ["Saira", "system-ui", "sans-serif"],
        mono: ["'Space Mono'", "ui-monospace", "monospace"],
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        ticker: "ticker 28s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
