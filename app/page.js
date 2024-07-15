import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Hero from "@/views/Hero";
import Problems from "@/views/Problems";

export default function Home() {
  return (
    <>
      <Header />

      <main className="am-mw-bg-gradient">
        <Hero />
        <section id="scrolling"></section>
        <Problems />
        <section id="layout"></section>
        <section id="transition"></section>
        <section id="caveats"></section>
      </main>

      <Footer />
    </>
  );
}
