"use client";
import AssetizationSVG from "@/components/AssetizationSVG";
import { montserrat } from "@/config/fonts/GoogleFonts";
import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function Assetization() {
  const [current, setCurrent] = useState(0);
  const changingInterval = 5000;

  const Data = [
    {
      title: { lines: ["Trademarked", "iDOA Library"] },
      details: {
        content:
          "Our proprietary standard for digitally owned assets from which all asset class are fabricated",
        style: { "--asset-width": "263px" },
      },
    },
    {
      title: { lines: ["Lorem", "iDCI"] },
      details: {
        content:
          "Our proprietary standard for digitally controlled identity implemented by our complete identity stack​",
        style: { "--asset-width": "276px" },
      },
    },
    {
      title: { lines: ["Lorem", "iDoC"] },
      details: {
        content: "Levels of uniformity and interoperability",
        style: { "--asset-width": "263px" },
      },
    },
    {
      title: { lines: ["VDR", "Modules"] },
      details: {
        content: "Identify anchored data access & change​",
        style: { "--asset-width": "226px" },
      },
    },
    {
      title: { lines: ["aOS", "Rule Engine"] },
      details: {
        content: "A rules-based system for industrial Asset Realization​",
        style: { "--asset-width": "263px" },
      },
    },
    {
      title: { lines: ["Lorem", "UAB"] },
      details: {
        content: "Inter asset ecosystem language translator​",
        style: { "--asset-width": "235px" },
      },
    },
  ];

  useEffect(() => {
    const handleInterval = () => {
      const value = (current + 1) % Data.length;
      setCurrent(value);
    };
    const intervalId = setInterval(handleInterval, changingInterval);
    return () => clearInterval(intervalId);
  }, [current, Data.length]);

  return (
    <section id="assetization">
      <div className="am-mw-container am-mw-assetization">
        <div className="am-mw-assetization-content">
          <div className="content-container">
            <h2 className={`title ${montserrat?.className}`}>Assetization</h2>
            <div className="slider">
              <button
                className="arrow dir-up"
                onClick={() =>
                  setCurrent(current === 0 ? Data.length - 1 : current - 1)
                }
              >
                <Image
                  src="/media/icons/down.svg"
                  alt="mantleWorks Logo"
                  width={36}
                  height={20}
                  className="w-100 h-100"
                  style={{ objectFit: "contain", objectPosition: "center" }}
                />
              </button>

              <div className="info">
                {React.Children.toArray(
                  Data.map((item, index) => (
                    <div
                      className={`h-100 d-flex flex-column align-items-center justify-content-center ${
                        current === index ? "active" : ""
                      }`}
                    >
                      <h3 className="title">
                        {item?.title?.lines?.map((line) => (
                          <span>{line}</span>
                        ))}
                      </h3>
                      <p className="" style={item?.details?.style}>
                        {item?.details?.content}
                      </p>
                    </div>
                  ))
                )}
              </div>

              <button
                className="arrow dir-down"
                onClick={() => setCurrent((current + 1) % Data.length)}
              >
                <Image
                  src="/media/icons/down.svg"
                  alt="mantleWorks Logo"
                  width={36}
                  height={20}
                  className="w-100 h-100"
                  style={{ objectFit: "contain", objectPosition: "center" }}
                />
              </button>
            </div>
          </div>
          <div className="graphics">
            <AssetizationSVG current={current} />
          </div>
        </div>
      </div>
    </section>
  );
}
