// ============================================================
//  DATA PRODUK  —  ini satu-satunya file yang perlu kamu edit
//  untuk menambah / mengubah / menghapus produk.
//  Setelah edit: commit ke GitHub -> Cloudflare auto-deploy.
// ============================================================

export type KategoriId =
  | "knalpot"
  | "jeroan"
  | "spion"
  | "saklar"
  | "lampu"
  | "kaki";

export type Kategori = {
  id: KategoriId;
  nama: string;
  deskripsi: string;
};

export const kategoriList: Kategori[] = [
  { id: "knalpot", nama: "Knalpot", deskripsi: "Full system & slip-on" },
  { id: "jeroan", nama: "Jeroan Mesin", deskripsi: "Bore up, piston, kopling" },
  { id: "spion", nama: "Spion", deskripsi: "CNC, lipat, model GP" },
  { id: "saklar", nama: "Saklar & Switch", deskripsi: "Holder, hazard, handle" },
  { id: "lampu", nama: "Lampu", deskripsi: "LED, projie, variasi" },
  { id: "kaki", nama: "Kaki-Kaki", deskripsi: "Footstep, tatakan, baut" },
];

export type Produk = {
  id: string; // dipakai jadi URL: /produk/<id>/  — huruf kecil, tanpa spasi
  nama: string;
  kategori: KategoriId;
  harga: number; // angka murni dalam Rupiah, mis. 1250000
  deskripsi: string;
  spek: string[]; // poin spesifikasi singkat (tampil seperti spec sheet)
  // path gambar di /public/products. Boleh kosong [] -> tampil placeholder otomatis.
  gambar: string[];
  tersedia: boolean;
  unggulan?: boolean; // tampil di section "Sorotan"
};

export const produkList: Produk[] = [
  {
    id: "knalpot-full-system-brong",
    nama: "Knalpot Full System Brong Series",
    kategori: "knalpot",
    harga: 1250000,
    deskripsi:
      "Full system stainless dengan silencer model GP. Suara bulat, tarikan napas mesin lebih lega. Cocok buat harian yang pengen tampil beda.",
    spek: ["Bahan stainless 304", "Model silencer GP", "Db killer bisa dilepas"],
    gambar: [],
    tersedia: true,
    unggulan: true,
  },
  {
    id: "knalpot-slip-on-stainless",
    nama: "Knalpot Slip-On Stainless",
    kategori: "knalpot",
    harga: 650000,
    deskripsi:
      "Slip-on plug & play tanpa ubah pipa header. Pasang gampang, tampilan langsung naik level.",
    spek: ["Plug & play", "Bobot ringan", "Garansi anti karat"],
    gambar: [],
    tersedia: true,
  },
  {
    id: "blok-bore-up-150",
    nama: "Blok Bore Up 150cc + Piston",
    kategori: "jeroan",
    harga: 875000,
    deskripsi:
      "Paket blok seher untuk naik cc. Tenaga nambah buat yang doyan kebut tapi tetap awet harian.",
    spek: ["Diameter 57mm", "Set piston + ring", "Pen + klip lengkap"],
    gambar: [],
    tersedia: true,
    unggulan: true,
  },
  {
    id: "kampas-kopling-racing",
    nama: "Kampas Kopling Racing",
    kategori: "jeroan",
    harga: 165000,
    deskripsi:
      "Kampas kopling racing biar perpindahan gigi makin gigit dan nggak gampang selip.",
    spek: ["Anti selip", "Tahan panas tinggi", "Fitment presisi"],
    gambar: [],
    tersedia: true,
  },
  {
    id: "spion-tomok-cnc",
    nama: "Spion Tomok CNC Billet",
    kategori: "spion",
    harga: 185000,
    deskripsi:
      "Spion mungil CNC billet. Ringkas, sporty, dan bikin tampilan stang makin bersih.",
    spek: ["Bahan alumunium CNC", "Kaca cembung anti silau", "Drat universal"],
    gambar: [],
    tersedia: true,
    unggulan: true,
  },
  {
    id: "spion-lipat-gp",
    nama: "Spion Lipat Model GP",
    kategori: "spion",
    harga: 145000,
    deskripsi: "Spion model GP yang bisa dilipat. Gaya balap, praktis pas parkir sempit.",
    spek: ["Bisa dilipat", "Sepasang kiri-kanan", "Pasang tanpa adaptor"],
    gambar: [],
    tersedia: true,
  },
  {
    id: "holder-switch-universal",
    nama: "Holder Switch Universal",
    kategori: "saklar",
    harga: 95000,
    deskripsi:
      "Holder + saklar universal untuk rapihin kabel di stang. Tombol klik mantap.",
    spek: ["Universal banyak motor", "Tombol presisi", "Mudah dipasang"],
    gambar: [],
    tersedia: true,
  },
  {
    id: "saklar-hazard-3-mode",
    nama: "Saklar Lampu Hazard 3 Mode",
    kategori: "saklar",
    harga: 75000,
    deskripsi: "Tambah fitur hazard 3 mode. Aman pas berhenti darurat, tampil lebih lengkap.",
    spek: ["3 mode nyala", "Colokan jepit cepat", "Plug kabel lengkap"],
    gambar: [],
    tersedia: false,
  },
  {
    id: "lampu-led-projie-mini",
    nama: "Lampu LED Projie Mini",
    kategori: "lampu",
    harga: 220000,
    deskripsi:
      "Projie mini fokus terang, sorot tajam buat malam. Konsumsi daya irit, nggak bikin aki tekor.",
    spek: ["Lensa projector", "Hi/Lo beam", "Hemat daya"],
    gambar: [],
    tersedia: true,
    unggulan: true,
  },
  {
    id: "footstep-underbone-cnc",
    nama: "Footstep Underbone CNC",
    kategori: "kaki",
    harga: 295000,
    deskripsi:
      "Footstep underbone CNC, pijakan mantap dan posisi kaki lebih enak buat riding agresif.",
    spek: ["Bahan CNC billet", "Anti slip", "Baut presisi"],
    gambar: [],
    tersedia: true,
  },
];

// Helper kecil yang dipakai komponen
export const formatRupiah = (n: number) =>
  "Rp" + n.toLocaleString("id-ID");

export const getProduk = (id: string) =>
  produkList.find((p) => p.id === id);

export const namaKategori = (id: KategoriId) =>
  kategoriList.find((k) => k.id === id)?.nama ?? id;
