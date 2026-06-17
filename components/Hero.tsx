"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Sprocket from "./Sprocket";
import { business } from "@/data/business";
import { waUmum } from "@/lib/whatsapp";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const root = useRef<HTMLDivElement>(null);
  const bigRef = useRef<HTMLDivElement>(null);
  const smallRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return; // jangan animasikan kalau user matiin motion

    const ctx = gsap.context(() => {
      // Idle: putaran pelan terus-menerus (dua arah berlawanan, seperti gir bertaut)
      gsap.to(bigRef.current, { rotation: 360, duration: 60, ease: "none", repeat: -1 });
      gsap.to(smallRef.current, { rotation: -360, duration: 28, ease: "none", repeat: -1 });

      // Scroll: putaran ekstra mengikuti scroll halaman (elemen ber-ref beda -> tidak konflik)
      gsap.to(bigRef.current, {
        rotation: "+=320",
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: 1 },
      });
      gsap.to(smallRef.current, {
        rotation: "-=520",
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: 1 },
      });
    }, root);

    return () => ctx.revert(); // cleanup wajib supaya tidak numpuk antar-navigasi
  }, []);

  return (
    <section ref={root} className="relative overflow-hidden">
      {/* Sprocket dekoratif di belakang teks */}
      <div className="pointer-events-none absolute inset-0 -z-0" aria-hidden="true">
        <div
          ref={bigRef}
          className="absolute -right-20 -top-16 h-[460px] w-[460px] text-race/30 sm:-right-10 md:right-6"
        >
          <Sprocket teeth={26} />
        </div>
        <div
          ref={smallRef}
          className="absolute right-[230px] top-[230px] hidden h-[230px] w-[230px] text-gold/25 md:block"
        >
          <Sprocket teeth={18} />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5 pb-20 pt-28 sm:pb-28 sm:pt-36">
        <p className="eyebrow text-gold">{business.tagline}</p>

        <h1 className="headline mt-5 text-[3.4rem] sm:text-7xl md:text-8xl">
          Gaspol
          <br />
          <span className="text-race">upgrade</span> motor lo.
        </h1>

        <p className="mt-6 max-w-xl font-body text-lg text-mute">
          Knalpot, jeroan, spion, saklar, sampai lampu — variasi & racing parts
          komplit di {business.nama}. Harga bengkel, bukan harga online shop.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href={waUmum()}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-race px-7 py-3.5 font-cond text-base font-bold uppercase tracking-wide text-ink transition hover:bg-ink hover:text-asphalt"
          >
            <WaIcon className="h-5 w-5" />
            Pesan via WhatsApp
          </a>
          <a
            href="#katalog"
            className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-3.5 font-cond text-base font-bold uppercase tracking-wide text-ink transition hover:border-gold hover:text-gold"
          >
            Lihat katalog
          </a>
        </div>

        {/* Strip "spec sheet" kecil di bawah hero */}
        <dl className="mt-12 grid max-w-lg grid-cols-3 gap-px overflow-hidden rounded-xl border border-line bg-line text-center font-mono">
          {[
            ["100%", "Barang ori"],
            ["Pasang", "Di tempat"],
            ["JakBar", "Kebon Jeruk"],
          ].map(([a, b]) => (
            <div key={b} className="bg-carbon px-3 py-4">
              <dt className="text-xl font-bold text-gold">{a}</dt>
              <dd className="mt-1 text-[11px] uppercase tracking-wider text-mute">{b}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="speedline h-3 w-full opacity-60" />
    </section>
  );
}

function WaIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zM6.597 20.13c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.042zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
    </svg>
  );
}
