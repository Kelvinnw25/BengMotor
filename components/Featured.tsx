import { produkList } from "@/data/products";
import ProductCard from "./ProductCard";
import Reveal from "./Reveal";

export default function Featured() {
  const unggulan = produkList.filter((p) => p.unggulan).slice(0, 3);
  if (unggulan.length === 0) return null;

  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <Reveal>
        <p className="eyebrow text-gold">Paling dicari</p>
        <h2 className="headline mt-3 text-4xl sm:text-5xl">Sorotan</h2>
        <div className="accent-rule mt-4" />
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {unggulan.map((p, i) => (
          <Reveal key={p.id} delay={i * 80}>
            <ProductCard produk={p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
