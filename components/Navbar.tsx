import Link from "next/link";
import { business } from "@/data/business";
import { waUmum } from "@/lib/whatsapp";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-asphalt/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-display text-2xl font-black italic uppercase tracking-tight text-ink">
            Beng
          </span>
          <span className="font-display text-2xl font-black italic uppercase tracking-tight text-gold">
            Motor
          </span>
        </Link>

        <nav className="hidden items-center gap-7 font-cond text-sm font-bold uppercase tracking-wider text-mute sm:flex">
          <a href="/#katalog" className="transition hover:text-ink">
            Katalog
          </a>
          <a href="/#kategori" className="transition hover:text-ink">
            Kategori
          </a>
          <a href="/#lokasi" className="transition hover:text-ink">
            Lokasi
          </a>
        </nav>

        <a
          href={waUmum()}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-gold px-5 py-2 font-cond text-sm font-bold uppercase tracking-wide text-asphalt transition hover:bg-ink"
        >
          {business.telepon[1]}
        </a>
      </div>
    </header>
  );
}
