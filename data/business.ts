// Semua info bisnis di satu tempat. Ganti di sini kalau ada perubahan.
export const business = {
  nama: "Beng Motor",
  tagline: "Racing · Parts · Accessories",
  alamat: "Jl. Kebon Jeruk III No. 32, Jakarta Barat 11160",
  // Nomor WhatsApp dalam format internasional tanpa "+" (0895 3333 73123 -> 62895333373123)
  waNumber: "62895333373123",
  // Telepon untuk ditampilkan / link tel:
  telepon: ["(021) 6256351", "0895 3333 73123"],
  jam: "Senin–Sabtu, 09.00–18.00 WIB",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Jl.+Kebon+Jeruk+III+No.+32+Jakarta+Barat+11160",
  instagram: "", // isi kalau ada, mis. "https://instagram.com/bengmotor"
} as const;
