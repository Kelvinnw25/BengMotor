import type { KategoriId } from "@/data/products";

// Ikon garis sederhana, satu per kategori. Pakai currentColor agar ikut warna teks.
export default function KategoriIcon({
  id,
  className,
}: {
  id: KategoriId;
  className?: string;
}) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (id) {
    case "knalpot": // pipa knalpot
      return (
        <svg {...common}>
          <path d="M3 9h9l5-3 4 2-4 2-5-1H3z" />
          <circle cx="19" cy="13" r="2.4" />
          <path d="M3 9v5" />
        </svg>
      );
    case "jeroan": // piston
      return (
        <svg {...common}>
          <rect x="8" y="3" width="8" height="8" rx="1" />
          <path d="M9 11v3M15 11v3M12 14v5M9 19h6" />
        </svg>
      );
    case "spion": // spion bulat
      return (
        <svg {...common}>
          <ellipse cx="9" cy="8" rx="5" ry="6" />
          <path d="M13 11l5 6M16 17h4" />
        </svg>
      );
    case "saklar": // tombol/switch
      return (
        <svg {...common}>
          <rect x="3" y="9" width="18" height="6" rx="3" />
          <circle cx="9" cy="12" r="2.2" fill="currentColor" stroke="none" />
        </svg>
      );
    case "lampu": // lampu/bohlam
      return (
        <svg {...common}>
          <path d="M9 18h6M10 21h4" />
          <path d="M12 3a6 6 0 0 0-4 10c.6.6 1 1.4 1 2h6c0-.6.4-1.4 1-2A6 6 0 0 0 12 3z" />
        </svg>
      );
    case "kaki": // footstep
      return (
        <svg {...common}>
          <path d="M5 16h10l4-2M5 16v3M15 16v3" />
          <circle cx="8" cy="9" r="1.4" />
          <path d="M8 10v6" />
        </svg>
      );
  }
}
