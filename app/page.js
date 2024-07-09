import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Problems from "@/views/Problems";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <section id="hero">
          <div className="timeline"></div>
        </section>
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
