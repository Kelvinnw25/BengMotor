import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-5 text-center">
        <p className="font-mono text-sm uppercase tracking-widest text-race">
          Error 404
        </p>
        <h1 className="headline mt-4 text-5xl sm:text-6xl">Nyasar nih.</h1>
        <p className="mt-4 font-body text-mute">
          Halaman yang lo cari nggak ada atau udah dipindah.
        </p>
        <Link
          href="/"
          className="mt-8 rounded-full bg-race px-7 py-3.5 font-cond text-base font-bold uppercase tracking-wide text-ink transition hover:bg-ink hover:text-asphalt"
        >
          Balik ke beranda
        </Link>
      </main>
      <Footer />
    </>
  );
}
