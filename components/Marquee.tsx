const items = [
  "Knalpot Racing",
  "Bore Up",
  "Spion CNC",
  "Saklar & Switch",
  "Lampu LED",
  "Footstep",
  "Kampas Kopling",
  "Variasi Stang",
];

// Ticker horizontal. Konten digandakan 2x agar loop mulus (translateX -50%).
export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="border-y border-line bg-carbon py-3.5">
      <div className="relative overflow-hidden">
        <div className="flex w-max animate-ticker whitespace-nowrap will-change-transform">
          {row.map((t, i) => (
            <span
              key={i}
              className="mx-6 flex items-center gap-6 font-cond text-sm font-bold uppercase tracking-[0.2em] text-mute"
            >
              {t}
              <span className="text-race">/</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
