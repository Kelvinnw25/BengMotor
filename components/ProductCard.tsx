import Link from "next/link";
import { type Produk, formatRupiah, namaKategori } from "@/data/products";
import { waOrder } from "@/lib/whatsapp";
import ProductMedia from "./ProductMedia";

export default function ProductCard({ produk }: { produk: Produk }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-carbon transition hover:-translate-y-1 hover:border-gold/60">
      <Link href={`/produk/${produk.id}/`} className="block">
        <div className="relative">
          <ProductMedia produk={produk} />
          <span className="absolute left-3 top-3 rounded-full bg-asphalt/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-mute backdrop-blur">
            {namaKategori(produk.kategori)}
          </span>
          {!produk.tersedia && (
            <span className="absolute right-3 top-3 rounded-full bg-asphalt/85 px-2.5 py-1 font-cond text-[11px] font-bold uppercase tracking-wider text-mute backdrop-blur">
              Kosong
            </span>
          )}
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <Link href={`/produk/${produk.id}/`}>
          <h3 className="font-cond text-lg font-bold uppercase leading-tight tracking-wide text-ink transition group-hover:text-gold">
            {produk.nama}
          </h3>
        </Link>

        <p className="mt-3 font-mono text-xl font-bold text-gold">
          {formatRupiah(produk.harga)}
        </p>

        <a
          href={waOrder(produk)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center justify-center rounded-full bg-race py-2.5 font-cond text-sm font-bold uppercase tracking-wide text-ink transition hover:bg-ink hover:text-asphalt"
        >
          {produk.tersedia ? "Pesan via WA" : "Tanya stok"}
        </a>
      </div>
    </article>
  );
}
