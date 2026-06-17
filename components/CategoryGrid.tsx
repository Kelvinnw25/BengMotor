import { kategoriList } from "@/data/products";
import KategoriIcon from "./KategoriIcon";
import Reveal from "./Reveal";

export default function CategoryGrid() {
  return (
    <section id="kategori" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <Reveal>
        <p className="eyebrow text-race">Cari berdasarkan</p>
        <h2 className="headline mt-3 text-4xl sm:text-5xl">Kategori</h2>
        <div className="accent-rule mt-4" />
      </Reveal>

      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {kategoriList.map((k, i) => (
          <Reveal key={k.id} delay={i * 60}>
            <a
              href={`/#katalog`}
              className="group flex h-full flex-col justify-between rounded-2xl border border-line bg-carbon p-5 transition hover:-translate-y-1 hover:border-gold"
            >
              <KategoriIcon
                id={k.id}
                className="h-9 w-9 text-mute transition group-hover:text-gold"
              />
              <div className="mt-8">
                <h3 className="font-cond text-xl font-bold uppercase tracking-wide text-ink">
                  {k.nama}
                </h3>
                <p className="mt-1 font-body text-sm text-mute">{k.deskripsi}</p>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
