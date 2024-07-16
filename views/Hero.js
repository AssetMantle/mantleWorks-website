"use client";
import { PixeloidMono } from "@/config/fonts/LocalImports";
import Image from "next/image";
import Logo from "@/public/media/logo.png";

export default function Hero() {
  function handleScroll(e) {
    if (window) {
      window.scrollBy(0, 30);
    }
  }
  return (
    <section id="hero" className="am-mw-hero-bg">
      <div className="timeline"></div>
      <div className="am-mw-container am-mw-hero d-flex h-100 flex-column justify-content-center">
        <div className="image-container">
          <div className="image">
            <Image
              src={Logo}
              alt="mantleWorks Logo"
              className="w-100 h-100"
              style={{ objectFit: "contain", objectPosition: "center" }}
            />
          </div>
        </div>
        <p className="links">
          <a href="#containerised" className={`${PixeloidMono.className}`}>
            CONTAINERISED
          </a>{" "}
          /{" "}
          <a href="#assetization" className={`${PixeloidMono.className}`}>
            ASSETIZATION
          </a>{" "}
          /{" "}
          <a href="#practice" className={`${PixeloidMono.className}`}>
            PRACTICE
          </a>
        </p>
        <div className="arrow-down">
          <button onClick={handleScroll}>
            <Image
              src="/media/icons/down.svg"
              alt="mantleWorks Logo"
              width={44}
              height={24}
              className="w-100 h-100"
              style={{ objectFit: "contain", objectPosition: "center" }}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
