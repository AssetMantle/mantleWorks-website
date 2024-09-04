"use client";
import { montserrat } from "@/config/fonts/GoogleFonts";
import Image from "next/image";
import { useRef } from "react";
import { useState } from "react";

export default function WhatWeDo() {
  const [Show, setShow] = useState(false);
  const videoRef = useRef();
  const buttonRef = useRef();

  function handlePlay(e) {
    videoRef.current.play();
    videoRef.current.controls = true;
    buttonRef.current.classList.toggle("opacity-0");
  }

  function handleOnEnd() {
    videoRef.current.controls = false;
    buttonRef.current.classList.toggle("opacity-0");
    videoRef.current.load();
  }

  return (
    <section id="whatwedo">
      <div className="am-mw-container am-mw-work d-flex justify-content-center align-items-center flex-column h-100">
        <h2 className={`${montserrat.className}`}>What We Do</h2>
        <div className="video">
          <iframe
            src="https://www.youtube-nocookie.com/embed/RJ1vxXeKgZ0?si=jsifRxs4iQJhDN35"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
