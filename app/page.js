import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Assetization from "@/views/Assetization";
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
        <section id="containerisation"></section>
        <Assetization />
      </main>

      <Footer />
    </>
  );
}
