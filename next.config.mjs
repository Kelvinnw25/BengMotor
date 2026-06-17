/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export — menghasilkan HTML/CSS/JS murni di folder out/.
  // Ini yang bikin website stabil & legal di Cloudflare Pages free tier.
  output: "export",

  // Wajib saat static export: loader default next/image butuh server.
  // Konsekuensinya: compress gambar produk sendiri (pakai WebP) sebelum taruh di /public/products.
  images: { unoptimized: true },

  // Biar URL bersih: /produk/ bukan /produk.html
  trailingSlash: true,
};

export default nextConfig;
