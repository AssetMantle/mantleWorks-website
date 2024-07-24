"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function Problems() {
  const [current, setCurrent] = useState(0);
  const [animationTrigger, setAnimationTrigger] = useState(0);
  const changingInterval = 5000;
  const rotateAnimationTime = 900;
  // filter: blur(106.952px);

  const problems = [
    {
      image: 1,
      value: 1,
      title: "Problem 1",
      buttonStyle: "",
      description: "Inconsistency and mismatch across different systems",
      style: {
        "--p-width": "263px",
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
      description:
        "Difficulty in verifying the authenticity and integrity of stakeholders and assets",
      style: {
        "--p-width": "354px",
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
      buttonStyle: "",
      description:
        "Inaccessibility of critical assets when needed by authorized users.",
      style: {
        "--p-width": "364px",
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

  useEffect(() => {
    const handleInterval = () => {
      setAnimationTrigger(true);
      setTimeout(() => {
        setAnimationTrigger(false);
      }, rotateAnimationTime);
    };
    const intervalId = setInterval(handleInterval, changingInterval);
    return () => clearInterval(intervalId);
  }, [current]);

  return (
    <section id="problems">
      <div className="am-mw-container am-mw-problems">
        <div className="am-mw-problems-content d-flex align-items-center">
          <div className="title">
            <p className="m-0">Problems Faced</p>
            <svg
              className="am-mw-problems-svg"
              viewBox="0 0 480 800"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ "--p-time": rotateAnimationTime + "ms" }}
            >
              <g
                className={`${current + 1 === 1 ? "active" : ""} ${
                  animationTrigger ? "g1" : ""
                }`}
              >
                <rect
                  x="-256.718"
                  y="588.494"
                  width="559"
                  height="559"
                  transform="rotate(-75.7667 -256.718 588.494)"
                  stroke="#FF0000"
                  stroke-width="6"
                />
                <rect
                  x="-256.718"
                  y="588.494"
                  width="559"
                  height="559"
                  transform="rotate(-75.7667 -256.718 588.494)"
                  stroke="url(#paint1_linear_316_2308)"
                  stroke-width="6"
                />
              </g>
              <g
                className={`${current + 1 === 2 ? "active" : ""} ${
                  animationTrigger ? "g2" : ""
                }`}
              >
                <rect
                  x="-315.064"
                  y="405.465"
                  width="559"
                  height="559"
                  transform="rotate(-45.7667 -315.064 405.465)"
                  stroke="#00FF00"
                  stroke-width="6"
                />
                <rect
                  x="-315.064"
                  y="405.465"
                  width="559"
                  height="559"
                  transform="rotate(-45.7667 -315.064 405.465)"
                  stroke="url(#paint0_linear_316_2308)"
                  stroke-width="6"
                />
              </g>
              <g
                className={`${current + 1 === 3 ? "active" : ""} ${
                  animationTrigger ? "g3" : ""
                }`}
              >
                <rect
                  x="-263.978"
                  y="206.722"
                  width="559"
                  height="559"
                  transform="rotate(-15.7667 -263.978 206.722)"
                  stroke="#0000FF"
                  stroke-width="6"
                />
                <rect
                  x="-263.978"
                  y="206.722"
                  width="559"
                  height="559"
                  transform="rotate(-15.7667 -263.978 206.722)"
                  stroke="url(#paint2_linear_316_2308)"
                  stroke-width="6"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_316_2308"
                  x1="245.359"
                  y1="970.941"
                  x2="-320.341"
                  y2="406.119"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#F7F2EB" stop-opacity="0" />
                  <stop offset="0.32" stop-color="#F7F2EB" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_316_2308"
                  x1="304.301"
                  y1="1156.08"
                  x2="-261.399"
                  y2="591.262"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#F7F2EB" stop-opacity="0" />
                  <stop offset="0.42" stop-color="#F7F2EB" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_316_2308"
                  x1="296.985"
                  y1="770.07"
                  x2="-268.715"
                  y2="205.248"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#F7F2EB" stop-opacity="0" />
                  <stop offset="0.32" stop-color="#F7F2EB" />
                </linearGradient>
              </defs>
            </svg>
            {/* <svg
              width="480"
              height="800"
              viewBox="0 0 480 800"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.3"></g>

              <g opacity="0.3"></g>
              
            </svg> */}
          </div>
          <div className="d-flex flex-column align-items-center justify-content-around h-100 statements">
            {React.Children.toArray(
              problems.map((item, index) => (
                <button
                  className={`border-0 bg-transparent ${item?.buttonStyle} ${
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
                      width={100}
                      height={100}
                      style={{ objectFit: "contain", objectPosition: "center" }}
                    />
                    <div className="bg"></div>
                  </div>
                  <h3 className="text-center">{item?.description}</h3>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
