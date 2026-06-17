# Beng Motor — Website Variasi & Racing Parts

Website katalog statis untuk **Beng Motor** (Jl. Kebon Jeruk III No. 32, Jakarta Barat).
Order produk diarahkan ke WhatsApp. Dibangun dengan Next.js (static export) + Tailwind + GSAP.

---

## Cara jalanin di komputer (development)

Butuh Node.js versi 18 ke atas. Sekali aja:

```bash
npm install
```

Lalu jalankan mode dev (auto-reload):

```bash
npm run dev
```

Buka http://localhost:3000

---

## Cara nambah / edit produk

Edit **satu file aja**: `data/products.ts`

- Tambah produk: copy satu blok `{ ... }` di dalam `produkList`, ubah isinya.
- `id` dipakai jadi URL (huruf kecil, tanpa spasi). Harus unik.
- `harga` ditulis angka murni: `850000` (bukan "Rp850.000").
- `tersedia: false` -> produk ditandai stok kosong.
- `unggulan: true` -> tampil di section "Sorotan" di beranda.

Info bengkel (alamat, nomor WA, telepon, jam) ada di `data/business.ts`.

### Nambah foto produk
1. Taruh file foto di folder `public/products/` (pakai format **.webp**, compress dulu biar ringan).
2. Di `data/products.ts`, isi field `gambar`, contoh:
   `gambar: ["/products/knalpot-brong-1.webp"]`
3. Kalau `gambar: []` (kosong), otomatis tampil placeholder.

---

## Cara update website yang sudah online

Kalau pakai Cloudflare Pages + GitHub (lihat di bawah):
edit `data/products.ts` -> commit & push ke GitHub -> Cloudflare otomatis re-deploy. Selesai.

---

## Deploy ke Cloudflare Pages (gratis, boleh komersial)

### Opsi A — lewat GitHub (rekomendasi, auto-update)
1. Push project ini ke sebuah repository GitHub.
2. Buka dashboard Cloudflare -> **Workers & Pages** -> **Create** -> **Pages** -> **Connect to Git**.
3. Pilih repo-nya. Di build settings:
   - **Framework preset:** Next.js (Static HTML Export)
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
4. Save & Deploy. Tiap push ke branch utama, otomatis rebuild.

### Opsi B — upload manual (tanpa GitHub)
```bash
npm run build
npx wrangler pages deploy out --project-name beng-motor
```

### Custom domain
Di project Pages -> **Custom domains** -> tambahkan domain (mis. bengmotor.com),
ikuti instruksi pengaturan DNS-nya.

---

## Catatan teknis
- `output: "export"` di `next.config.mjs` bikin hasilnya HTML/CSS/JS murni (folder `out/`). Tidak butuh server.
- `images.unoptimized: true` wajib untuk static export — makanya foto harus dicompress manual.
- Font diambil dari Google Fonts via `<link>` di `app/layout.tsx` (Saira / Saira Condensed / Space Mono).
- Animasi gir di hero pakai GSAP, dan otomatis nonaktif kalau pengunjung mengaktifkan "reduce motion".

Folder `out/` di paket ini sudah berisi hasil build siap-upload (Opsi B).
