import { business } from "@/data/business";
import { waUmum } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer id="lokasi" className="border-t border-line bg-carbon">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2">
        <div>
          <div className="flex items-baseline gap-2">
            <span className="font-display text-3xl font-black italic uppercase tracking-tight text-ink">
              Beng
            </span>
            <span className="font-display text-3xl font-black italic uppercase tracking-tight text-gold">
              Motor
            </span>
          </div>
          <p className="mt-3 eyebrow text-mute">{business.tagline}</p>
          <p className="mt-5 max-w-sm font-body text-mute">
            Bengkel variasi & racing parts motor. Mampir langsung ke bengkel atau
            chat dulu buat tanya stok dan harga.
          </p>

          <a
            href={waUmum()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-race px-6 py-3 font-cond text-sm font-bold uppercase tracking-wide text-ink transition hover:bg-ink hover:text-asphalt"
          >
            Chat WhatsApp
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <h3 className="eyebrow text-gold">Alamat</h3>
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block font-body text-ink transition hover:text-gold"
            >
              {business.alamat}
            </a>
            <p className="mt-2 font-mono text-xs text-mute">Buka di Google Maps →</p>
          </div>

          <div>
            <h3 className="eyebrow text-gold">Jam Buka</h3>
            <p className="mt-3 font-body text-ink">{business.jam}</p>
          </div>

          <div>
            <h3 className="eyebrow text-gold">Telepon</h3>
            <ul className="mt-3 space-y-1">
              {business.telepon.map((t) => (
                <li key={t}>
                  <a
                    href={`tel:${t.replace(/[^0-9+]/g, "")}`}
                    className="font-mono text-ink transition hover:text-gold"
                  >
                    {t}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="speedline h-2 w-full opacity-50" />
      <div className="mx-auto max-w-6xl px-5 py-6">
        <p className="font-mono text-xs text-mute">
          © {new Date().getFullYear()} {business.nama}. Jakarta Barat.
        </p>
      </div>
    </footer>
  );
}
