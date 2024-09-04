"use client";
import { montserrat } from "@/config/fonts/GoogleFonts";
import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function Problems() {
  const [current, setCurrent] = useState(1);
  const changingInterval = 5000;

  const problems = [
    {
      image: 1,
      value: 1,
      title: "Problem 1",
      buttonStyle: "",
      subtitle: "Lack of Standards",
      description:
        "The absence of standardized practices leads to misrepresentation and duplication of resources ",
      style: {
        "--p-width": "401px",
        "--p-color": "var(--red)",
        "--p-bg":
          "linear-gradient(151.51deg, rgba(255, 0, 0, 0.65) 25.91%, rgba(255, 0, 0, 0.3) 82.41%)",
        "--i-width": 417,
        "--i-height": 417,
        "--ms": 0,
      },
    },
    {
      image: 2,
      value: 2,
      title: "Problem 2",
      buttonStyle: "",
      subtitle: "Lack of Verifiability",
      description:
        "A trust-based transaction model undermines reliability within value chains & causes disconnect in market",
      style: {
        "--p-width": "457px",
        "--p-color": "var(--green-dark)",
        "--p-bg":
          "linear-gradient(151.51deg, rgba(0, 255, 0, 0.65) 25.91%, rgba(0, 255, 0, 0.3) 82.41%)",
        "--i-width": 417,
        "--i-height": 417,
        "--ms": "3.5rem",
      },
    },
    {
      image: 3,
      value: 3,
      title: "Problem 3",
      subtitle: "Lack of Infrastructure",
      buttonStyle: "",
      description:
        "Enterprise resources are often inaccessible in current markets due to lack of complementing enterprise grade Assetization infrastructure ",
      style: {
        "--p-width": "467px",
        "--p-color": "var(--blue-dark)",
        "--p-bg":
          "linear-gradient(180deg, rgba(0, 0, 255, 0.6) 12.87%, rgba(0, 0, 255, 0.25) 112.87%)",
        "--i-width": 417,
        "--i-height": 417,
        "--ms": 0,
      },
    },
  ];

  useEffect(() => {
    const handleInterval = () => {
      const value = (current + 1) % problems.length;
      setCurrent(value);
    };
    const intervalId = setInterval(handleInterval, changingInterval);
    return () => clearInterval(intervalId);
  }, [current, problems.length]);

  return (
    <section id="problems">
      <div className="am-mw-container am-mw-problems">
        <div className="am-mw-problems-content">
          <div className="title">
            <p className={`m-0 ${montserrat.className}`}>Problems Faced</p>
            <svg
              className="am-mw-problems-svg"
              viewBox="0 0 800 800"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g className={`box-1 ${"state-" + (current + 1)}`}>
                <rect
                  x="120"
                  y="120"
                  width="559"
                  height="559"
                  // stroke="url(#paint2_linear_1241_102)"
                  stroke-width="6"
                />
              </g>
              <g className={`box-2 ${"state-" + (current + 1)}`}>
                <rect
                  x="120"
                  y="120"
                  width="559"
                  height="559"
                  // stroke="url(#paint1_linear_1241_102)"
                  stroke-width="6"
                />
              </g>
              <g className={`box-3 ${"state-" + (current + 1)}`}>
                <rect
                  x="120"
                  y="120"
                  width="559"
                  height="559"
                  // stroke="url(#paint0_linear_1241_102)"
                  stroke-width="6"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_1241_102"
                  x1="682"
                  y1="117"
                  x2="117"
                  y2="682"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.12" stop-color="#0000FF" />
                  <stop offset="0.30" stop-color="#F7F2EB" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_1241_102"
                  x1="682"
                  y1="117"
                  x2="117"
                  y2="682"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.12" stop-color="#00FF00" />
                  <stop offset="0.30" stop-color="#F7F2EB" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_1241_102"
                  x1="682"
                  y1="117"
                  x2="117"
                  y2="682"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.12" stop-color="#FF0000" />
                  <stop offset="0.30" stop-color="#F7F2EB" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="statements">
            {React.Children.toArray(
              problems.map((item, index) => (
                <button
                  className={`${montserrat.className} ${item?.buttonStyle} ${
                    current + 1 === item?.value ? "active" : ""
                  }`}
                  style={item?.style}
                  onClick={() => setCurrent(index)}
                >
                  {item?.title}
                </button>
              ))
            )}
          </div>
          <div className="contents">
            {React.Children.toArray(
              problems.map((item) => (
                <div
                  className={`h-100 d-flex flex-column align-items-center justify-content-center ${
                    current + 1 === item?.value ? "active" : ""
                  }`}
                  style={item?.style}
                >
                  <div className="image">
                    <Image
                      src={`/media/problems/${item?.image}.png`}
                      alt="cube"
                      width={500}
                      height={500}
                      style={{ objectFit: "contain", objectPosition: "center" }}
                    />
                    <div className="bg"></div>
                  </div>
                  <h3 className="text-center">{item?.subtitle}</h3>
                  <p className="text-center">{item?.description}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
