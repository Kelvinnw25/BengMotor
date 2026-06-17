import Image from "next/image";
import type { Produk } from "@/data/products";
import KategoriIcon from "./KategoriIcon";

// Warna gradient placeholder per kategori (dipakai kalau belum ada foto produk).
const grad: Record<string, string> = {
  knalpot: "from-race/25 to-asphalt",
  jeroan: "from-gold/20 to-asphalt",
  spion: "from-race/20 to-asphalt",
  saklar: "from-gold/15 to-asphalt",
  lampu: "from-gold/25 to-asphalt",
  kaki: "from-race/15 to-asphalt",
};

export default function ProductMedia({
  produk,
  className = "",
}: {
  produk: Produk;
  className?: string;
}) {
  const punyaFoto = produk.gambar.length > 0;

  if (punyaFoto) {
    return (
      <div className={`relative aspect-[4/3] overflow-hidden ${className}`}>
        <Image
          src={produk.gambar[0]}
          alt={produk.nama}
          fill
          sizes="(max-width: 640px) 100vw, 33vw"
          className="object-cover"
        />
      </div>
    );
  }

  // Placeholder: gradient + ikon kategori besar + label.
  return (
    <div
      className={`relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-gradient-to-br ${
        grad[produk.kategori] ?? "from-line to-asphalt"
      } ${className}`}
    >
      <div className="speedline absolute inset-0 opacity-20" />
      <KategoriIcon
        id={produk.kategori}
        className="relative h-16 w-16 text-ink/70"
      />
      <span className="absolute bottom-2 right-3 font-mono text-[10px] uppercase tracking-widest text-mute">
        foto menyusul
      </span>
    </div>
  );
}
