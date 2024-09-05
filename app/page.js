"use client";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import SlideIndicator from "@/components/SlideIndicator";
import Assetization from "@/views/Assetization";
import Containerisation from "@/views/Containerisation";
import Hero from "@/views/Hero";
import OurPractice from "@/views/OurPractice";
import Problems from "@/views/Problems";
import WhatWeDo from "@/views/WhatWeDo";
import { useEffect, useState } from "react";

export default function Home() {
  const [Position, setPosition] = useState(0);

  useEffect(() => {
    if (window) {
      window.addEventListener("scroll", () => {
        window.innerHeight &&
          window.scrollY &&
          setPosition(Math.round(window.scrollY / window.innerHeight));
      });
    }
  }, []);

  return (
    <>
      <Header />

      <main className="am-mw-bg-grid">
        <Hero />
        <WhatWeDo />
        <Problems />
        <Containerisation isViewing={Position === 3} />
        <Assetization />
        <OurPractice />
        {/* <OurPartners /> */}
      </main>
      <SlideIndicator indicator={Position} />
      <Footer />
    </>
  );
}
