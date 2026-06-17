import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import CategoryGrid from "@/components/CategoryGrid";
import Featured from "@/components/Featured";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Featured />
        <CategoryGrid />
        <ProductGrid />
      </main>
      <Footer />
    </>
  );
}
