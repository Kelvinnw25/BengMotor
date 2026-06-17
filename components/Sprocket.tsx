// Sprocket (gir/gear motor) digambar secara programatik sebagai SVG.
// Dipakai sebagai elemen signature di hero. Murni presentational.

type SprocketProps = {
  teeth?: number;
  color?: string;
  className?: string;
};

export default function Sprocket({
  teeth = 24,
  color = "currentColor",
  className,
}: SprocketProps) {
  const C = 100; // pusat
  const ringR = 84; // radius badan gir
  const toothH = 16; // tinggi gigi
  const toothW = 7; // setengah-lebar gigi
  const boltR = 56; // radius lingkaran lubang baut
  const lightR = 40; // radius lubang pemberat (lightening holes)

  // Gigi: trapezoid kecil di tiap sudut, dibuat via rotate transform
  const teethEls = Array.from({ length: teeth }, (_, i) => {
    const a = (360 / teeth) * i;
    // Trapezoid: lebih lebar di pangkal, mengecil di ujung -> bentuk gigi sprocket
    const yTop = C - ringR - toothH;
    const yBase = C - ringR + 2;
    const d = `M ${C - toothW} ${yBase} L ${C - toothW * 0.6} ${yTop} L ${
      C + toothW * 0.6
    } ${yTop} L ${C + toothW} ${yBase} Z`;
    return <path key={i} d={d} transform={`rotate(${a} ${C} ${C})`} />;
  });

  // Lubang baut (6 buah)
  const bolts = Array.from({ length: 6 }, (_, i) => {
    const a = ((Math.PI * 2) / 6) * i - Math.PI / 2;
    const x = C + boltR * Math.cos(a);
    const y = C + boltR * Math.sin(a);
    return <circle key={i} cx={x} cy={y} r={6} className="fill-asphalt" />;
  });

  // Lubang pemberat oval (5 buah) untuk kesan sprocket racing
  const lightening = Array.from({ length: 5 }, (_, i) => {
    const a = ((Math.PI * 2) / 5) * i - Math.PI / 2;
    const x = C + lightR * Math.cos(a);
    const y = C + lightR * Math.sin(a);
    const rot = (a * 180) / Math.PI + 90;
    return (
      <ellipse
        key={i}
        cx={x}
        cy={y}
        rx={7}
        ry={15}
        transform={`rotate(${rot} ${x} ${y})`}
        className="fill-asphalt"
      />
    );
  });

  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      style={{ color }}
      aria-hidden="true"
      role="presentation"
    >
      <g fill={color}>
        {teethEls}
        {/* Badan gir */}
        <circle cx={C} cy={C} r={ringR} />
      </g>
      {/* Cekungan / detail dalam (warna background biar terlihat berlubang) */}
      <circle cx={C} cy={C} r={ringR - 10} className="fill-asphalt" />
      <circle cx={C} cy={C} r={ringR - 14} fill={color} />
      <circle cx={C} cy={C} r={ringR - 24} className="fill-asphalt" />
      {/* Hub tengah */}
      <circle cx={C} cy={C} r={22} fill={color} />
      <circle cx={C} cy={C} r={12} className="fill-asphalt" />
      {lightening}
      {bolts}
    </svg>
  );
}
