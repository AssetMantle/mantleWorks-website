import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Hero from "@/views/Hero";
import Problems from "@/views/Problems";
import WhatWeDo from "@/views/WhatWeDo";

export default function Home() {
  return (
    <>
      <Header />

      <main className="am-mw-bg-grid">
        <Hero />
        <WhatWeDo />
        <Problems />
        <section id="layout"></section>
        <section id="transition"></section>
        <section id="caveats"></section>
      </main>

      <Footer />
    </>
  );
}
