import { montserrat } from "@/config/fonts/GoogleFonts";
import Image from "next/image";
import React, { useState, useRef } from "react";

export default function OurPractice() {
  const [Email, setEmail] = useState();

  const productRef = useRef();
  const IntellectualRef = useRef();

  const Data = {
    products: {
      title: "Products",
      list: [
        {
          title: "iDoA Library",
          description: "The most important thing to keep",
        },
        {
          title: "iDoC Library",
          description: "The most important thing to keep",
        },
        {
          title: "VDR",
          description: "The most important thing to keep",
        },
        {
          title: "Explorer",
          description: "The most important thing to keep",
        },
        {
          title: "Wallet",
          description: "The most important thing to keep",
        },
        {
          title: "Marketplace",
          description: "The most important thing to keep",
        },
      ],
    },
    intellectualSeeding: {
      title: "Intellectual Seeding",
      list: [
        {
          title: "Discovery",
          description: "The most important thing to keep",
        },
        {
          title: "Identify",
          description: "The most important thing to keep",
        },
        {
          title: "Segregate",
          description: "The most important thing to keep",
        },
        {
          title: "Target",
          description: "The most important thing to keep",
        },
        {
          title: "Solutionize",
          description: "The most important thing to keep",
        },
        {
          title: "Implement",
          description: "The most important thing to keep",
        },
      ],
    },
  };

  return (
    <section id="practice">
      <div className="am-mw-container am-mw-practice d-flex justify-content-center align-items-center flex-column h-100">
        <h2 className={`${montserrat.className} title`}>Our Practice</h2>
        <div className="container">
          <div className="content">
            <h3 className="title">{Data?.products?.title}</h3>
            <button
              className="arrow dir-left"
              onClick={() => productRef.current.scrollBy(-20, 0)}
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
            <button
              className="arrow dir-right"
              onClick={() => productRef.current.scrollBy(20, 0)}
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
            <div className="products" ref={productRef}>
              {React.Children.toArray(
                Data?.products?.list?.map((item) => (
                  <div className="item">
                    <h4>{item?.title}</h4>
                    <p>{item?.description}</p>
                  </div>
                ))
              )}
            </div>
          </div>
          <div className="content center">
            <div className="cube">
              <img src="/media/practice-2.gif" alt="cube rotation" />
              {/* <video
                src="/media/practice-cropped.gif"
                autoPlay
                loop
                muted
                playsInline
              /> */}
            </div>
            <div className="subscribe">
              <h3 className="title2">Get In Touch</h3>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
              <button
                className="am-mw-bg-gradient-red-blue"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                <span>Submit</span>
              </button>
            </div>
          </div>
          <div className="content">
            <h3 className="title">{Data?.intellectualSeeding?.title}</h3>
            <button
              className="arrow dir-left"
              onClick={() => IntellectualRef.current.scrollBy(-20, 0)}
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
            <button
              className="arrow dir-right"
              onClick={() => IntellectualRef.current.scrollBy(20, 0)}
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
            <div className="products" ref={IntellectualRef}>
              {React.Children.toArray(
                Data?.intellectualSeeding?.list?.map((item) => (
                  <div className="item">
                    <h4>{item?.title}</h4>
                    <p>{item?.description}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
