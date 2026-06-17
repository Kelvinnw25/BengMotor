"use client";

import { useState } from "react";
import { produkList, kategoriList, type KategoriId } from "@/data/products";
import ProductCard from "./ProductCard";
import Reveal from "./Reveal";

type Filter = "semua" | KategoriId;

export default function ProductGrid() {
  const [filter, setFilter] = useState<Filter>("semua");

  const tampil =
    filter === "semua"
      ? produkList
      : produkList.filter((p) => p.kategori === filter);

  const chips: { id: Filter; label: string }[] = [
    { id: "semua", label: "Semua" },
    ...kategoriList.map((k) => ({ id: k.id as Filter, label: k.nama })),
  ];

  return (
    <section id="katalog" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <Reveal>
        <p className="eyebrow text-race">Barang ready</p>
        <h2 className="headline mt-3 text-4xl sm:text-5xl">Katalog</h2>
        <div className="accent-rule mt-4" />
      </Reveal>

      {/* Chip filter */}
      <div className="mt-8 flex flex-wrap gap-2">
        {chips.map((c) => {
          const aktif = filter === c.id;
          return (
            <button
              key={c.id}
              onClick={() => setFilter(c.id)}
              className={`rounded-full border px-4 py-2 font-cond text-sm font-bold uppercase tracking-wide transition ${
                aktif
                  ? "border-gold bg-gold text-asphalt"
                  : "border-line text-mute hover:border-mute hover:text-ink"
              }`}
            >
              {c.label}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tampil.map((p, i) => (
          <Reveal key={p.id} delay={(i % 3) * 80}>
            <ProductCard produk={p} />
          </Reveal>
        ))}
      </div>

      {tampil.length === 0 && (
        <p className="mt-10 font-body text-mute">
          Belum ada barang di kategori ini. Chat aja langsung, biasanya bisa dicariin.
        </p>
      )}
    </section>
  );
}
