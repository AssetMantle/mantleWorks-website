"use client";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import { useRef } from "react";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function WhatWeDo() {
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
          <video
            ref={videoRef}
            src="https://videos.pexels.com/video-files/6583334/6583334-uhd_2732_1318_30fps.mp4"
            poster="/media/bgs/work.png"
            onEnded={handleOnEnd}
            controlsList="nodownload nofullscreen noremoteplayback"
          ></video>
          <button
            ref={buttonRef}
            className="am-mw-bg-gradient-red-blue d-flex align-items-center justify-content-center"
            onClick={handlePlay}
          >
            <Image
              src="/media/icons/play-fill.svg"
              alt="play icon"
              width={50}
              height={50}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
