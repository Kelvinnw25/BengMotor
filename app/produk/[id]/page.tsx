import Link from "next/link";
import { notFound } from "next/navigation";
import {
  produkList,
  getProduk,
  formatRupiah,
  namaKategori,
} from "@/data/products";
import { waOrder } from "@/lib/whatsapp";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductMedia from "@/components/ProductMedia";
import type { Metadata } from "next";

// WAJIB untuk static export: daftar semua halaman produk yang akan dibuat.
export function generateStaticParams() {
  return produkList.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const p = getProduk(id);
  if (!p) return { title: "Produk tidak ditemukan — Beng Motor" };
  return {
    title: `${p.nama} — ${formatRupiah(p.harga)} | Beng Motor`,
    description: p.deskripsi,
  };
}

export default async function ProdukPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const produk = getProduk(id);
  if (!produk) notFound();

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl px-5 py-12">
        <nav className="font-mono text-xs uppercase tracking-wider text-mute">
          <Link href="/" className="hover:text-gold">
            Beranda
          </Link>{" "}
          / <span className="text-mute">{namaKategori(produk.kategori)}</span> /{" "}
          <span className="text-ink">{produk.nama}</span>
        </nav>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-line">
            <ProductMedia produk={produk} />
          </div>

          <div className="flex flex-col">
            <p className="eyebrow text-race">{namaKategori(produk.kategori)}</p>
            <h1 className="headline mt-3 text-3xl sm:text-4xl">{produk.nama}</h1>
            <p className="mt-5 font-mono text-3xl font-bold text-gold">
              {formatRupiah(produk.harga)}
            </p>

            <span
              className={`mt-3 inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1 font-cond text-xs font-bold uppercase tracking-wider ${
                produk.tersedia
                  ? "border-gold/40 text-gold"
                  : "border-line text-mute"
              }`}
            >
              {produk.tersedia ? "Ready stock" : "Stok kosong — bisa indent"}
            </span>

            <p className="mt-6 font-body text-mute">{produk.deskripsi}</p>

            {produk.spek.length > 0 && (
              <ul className="mt-6 space-y-2">
                {produk.spek.map((s) => (
                  <li
                    key={s}
                    className="flex items-start gap-3 font-body text-ink"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-race" />
                    {s}
                  </li>
                ))}
              </ul>
            )}

            <a
              href={waOrder(produk)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-race px-7 py-3.5 font-cond text-base font-bold uppercase tracking-wide text-ink transition hover:bg-ink hover:text-asphalt"
            >
              {produk.tersedia ? "Pesan via WhatsApp" : "Tanya stok via WhatsApp"}
            </a>

            <Link
              href="/#katalog"
              className="mt-3 inline-flex items-center justify-center rounded-full border border-line px-7 py-3.5 font-cond text-base font-bold uppercase tracking-wide text-ink transition hover:border-gold hover:text-gold"
            >
              ← Balik ke katalog
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
