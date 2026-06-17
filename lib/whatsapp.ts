import { business } from "@/data/business";
import { formatRupiah, type Produk } from "@/data/products";

// Bangun link wa.me dengan pesan ter-encode dengan benar.
// encodeURIComponent WAJIB — tanpa ini, newline & spasi merusak URL.
export function waLink(pesan: string) {
  return `https://wa.me/${business.waNumber}?text=${encodeURIComponent(pesan)}`;
}

// Link order untuk satu produk (otomatis bawa nama + harga ke chat).
export function waOrder(p: Produk) {
  const pesan =
    `Halo Beng Motor, saya mau tanya/pesan:\n\n` +
    `*${p.nama}*\n` +
    `Harga: ${formatRupiah(p.harga)}\n\n` +
    `Masih ready? Bisa untuk motor saya?`;
  return waLink(pesan);
}

// Link kontak umum (tombol header / footer).
export function waUmum() {
  return waLink("Halo Beng Motor, saya mau tanya soal variasi & sparepart motor.");
}
