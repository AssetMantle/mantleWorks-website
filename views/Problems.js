"use client";
import { useState } from "react";

export default function Problems() {
  const [current, setCurrent] = useState(1);

  return (
    <section id="problems">
      <div className="am-mw-container am-mw-problems">
        <svg
          className="am-mw-problems-svg"
          viewBox="0 0 800 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className={`${current === 1 ? "active" : ""}`}>
            <rect
              x="63.2815"
              y="588.494"
              width="559"
              height="559"
              transform="rotate(-75.7667 63.2815 588.494)"
              stroke="url(#paint2_linear_106_32229)"
              stroke-width="6"
            />
            <rect
              x="63.2815"
              y="588.494"
              width="559"
              height="559"
              transform="rotate(-75.7667 63.2815 588.494)"
              stroke="url(#paint3_linear_106_32229)"
              stroke-width="6"
            />
          </g>
          <g className={`${current === 2 ? "active" : ""}`}>
            <rect
              x="4.93635"
              y="405.465"
              width="559"
              height="559"
              transform="rotate(-45.7667 4.93635 405.465)"
              stroke="url(#paint0_linear_106_32229)"
              stroke-width="6"
            />
            <rect
              x="4.93635"
              y="405.465"
              width="559"
              height="559"
              transform="rotate(-45.7667 4.93635 405.465)"
              stroke="url(#paint1_linear_106_32229)"
              stroke-width="6"
            />
          </g>
          <g className={`${current === 3 ? "active" : ""}`}>
            <rect
              x="56.0224"
              y="206.722"
              width="559"
              height="559"
              transform="rotate(-15.7667 56.0224 206.722)"
              stroke="url(#paint4_linear_106_32229)"
              stroke-width="6"
            />
            <rect
              x="56.0224"
              y="206.722"
              width="559"
              height="559"
              transform="rotate(-15.7667 56.0224 206.722)"
              stroke="url(#paint5_linear_106_32229)"
              stroke-width="6"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_106_32229"
              x1="551.954"
              y1="418.282"
              x2="13.454"
              y2="983.281"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.005" stop-color="#14F094" />
              <stop offset="0.39" stop-color="#683CE4" />
              <stop offset="0.625" stop-color="#EA37A3" />
              <stop offset="0.815" stop-color="#FF2F49" />
              <stop offset="1" stop-color="#FF930F" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_106_32229"
              x1="565.359"
              y1="970.941"
              x2="-0.341277"
              y2="406.119"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.2" stop-color="#F7F2EB" stop-opacity="0" />
              <stop offset="0.47" stop-color="#F7F2EB" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_106_32229"
              x1="624.146"
              y1="1155.17"
              x2="59.1467"
              y2="616.674"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.005" stop-color="#14F094" />
              <stop offset="0.39" stop-color="#683CE4" />
              <stop offset="0.625" stop-color="#EA37A3" />
              <stop offset="0.815" stop-color="#FF2F49" />
              <stop offset="1" stop-color="#FF930F" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_106_32229"
              x1="624.301"
              y1="1156.08"
              x2="58.6006"
              y2="591.262"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.200463" stop-color="#F7F2EB" stop-opacity="0" />
              <stop offset="0.46786" stop-color="#F7F2EB" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_106_32229"
              x1="51.83"
              y1="230.66"
              x2="616.83"
              y2="769.16"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.005" stop-color="#14F094" />
              <stop offset="0.39" stop-color="#683CE4" />
              <stop offset="0.625" stop-color="#EA37A3" />
              <stop offset="0.815" stop-color="#FF2F49" />
              <stop offset="1" stop-color="#FF930F" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_106_32229"
              x1="616.985"
              y1="770.07"
              x2="51.2847"
              y2="205.248"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.2" stop-color="#F7F2EB" stop-opacity="0" />
              <stop offset="0.47" stop-color="#F7F2EB" />
            </linearGradient>
          </defs>
        </svg>
        <div className="am-mw-problems-content d-flex align-items-center">
          <div className="">
            <p className="m-0">Problems Faced</p>
          </div>
          <div className=""></div>
          <div className=""></div>
        </div>
      </div>
    </section>
  );
}
