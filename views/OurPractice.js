import { montserrat } from "@/config/fonts/GoogleFonts";
import { handleSubmit } from "@/utils/subscribe";
import Image from "next/image";
import React, { useRef, useState } from "react";

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
        },
        {
          title: "iDoC Library",
        },
        {
          title: "VDR",
        },
        {
          title: "Explorer",
        },
        {
          title: "Wallet",
        },
        {
          title: "Marketplace",
        },
      ],
    },
    intellectualSeeding: {
      title: "Solutioning Framework",
      list: [
        {
          title: "Discovery",
        },
        {
          title: "Identify",
        },
        {
          title: "Segregate",
        },
        {
          title: "Target",
        },
        {
          title: "Solutionize",
        },
        {
          title: "Implement",
        },
      ],
    },
  };

  return (
    <section id="practice">
      <div className="am-mw-container am-mw-practice d-flex justify-content-center align-items-center flex-column h-100">
        <h2 className={`${montserrat.className} title`}>Practice</h2>
        <div className="container">
          <div className="content left">
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
            </div>
            {/* <div className="am-mw-subscribe subscribe">
              <h3 className="title2">Get In Touch</h3>
              <form onSubmit={(e) => handleSubmit(e, Email, setEmail)}>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
                <button className="am-mw-bg-gradient-red-blue" type="submit">
                  <span>Submit</span>
                </button>
              </form>
            </div> */}
          </div>
          <div className="content right">
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
