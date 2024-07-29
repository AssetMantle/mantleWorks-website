"use client";
import PartnersSVG from "@/components/PartnersSVG";
import { montserrat } from "@/config/fonts/GoogleFonts";
import React, { useState, useEffect } from "react";

export default function OurPartners() {
  const [Active, setActive] = useState(0);
  const changingInterval = 5000;

  const partners = [
    {
      title: "",
      style: { "--partners-icon": "var(--green)" },
      list: [
        { icon: "", title: "Lorem Ipsum", description: "Location" },
        { icon: "", title: "Lorem Ipsum", description: "Location" },
        { icon: "", title: "Lorem Ipsum", description: "Location" },
        { icon: "", title: "Lorem Ipsum", description: "Location" },
        { icon: "", title: "Lorem Ipsum", description: "Location" },
        { icon: "", title: "Lorem Ipsum", description: "Location" },
      ],
    },
    {
      title: "",
      style: { "--partners-icon": "var(--red)" },
      list: [
        { icon: "", title: "Lorem Ipsum", description: "Location" },
        { icon: "", title: "Lorem Ipsum", description: "Location" },
        { icon: "", title: "Lorem Ipsum", description: "Location" },
        { icon: "", title: "Lorem Ipsum", description: "Location" },
        { icon: "", title: "Lorem Ipsum", description: "Location" },
        { icon: "", title: "Lorem Ipsum", description: "Location" },
      ],
    },
    {
      title: "",
      style: { "--partners-icon": "var(--orange)" },
      list: [
        { icon: "", title: "Lorem Ipsum", description: "Location" },
        { icon: "", title: "Lorem Ipsum", description: "Location" },
        { icon: "", title: "Lorem Ipsum", description: "Location" },
        { icon: "", title: "Lorem Ipsum", description: "Location" },
        { icon: "", title: "Lorem Ipsum", description: "Location" },
        { icon: "", title: "Lorem Ipsum", description: "Location" },
      ],
    },
    {
      title: "",
      style: { "--partners-icon": "var(--blue)" },
      list: [
        { icon: "", title: "Lorem Ipsum", description: "Location" },
        { icon: "", title: "Lorem Ipsum", description: "Location" },
        { icon: "", title: "Lorem Ipsum", description: "Location" },
        { icon: "", title: "Lorem Ipsum", description: "Location" },
        { icon: "", title: "Lorem Ipsum", description: "Location" },
        { icon: "", title: "Lorem Ipsum", description: "Location" },
      ],
    },
  ];

  useEffect(() => {
    const handleInterval = () => {
      const value = (Active + 1) % partners.length;
      setActive(value);
    };
    const intervalId = setInterval(handleInterval, changingInterval);
    return () => clearInterval(intervalId);
  }, [Active, partners.length]);

  return (
    <section id="partners">
      <div className="am-mw-container am-mw-partners d-flex justify-content-center align-items-center flex-column h-100">
        <PartnersSVG active={Active} onHover={setActive} />
        <div className="container">
          <div className="content">
            <h2 className={`${montserrat.className} title`}>
              Our XYZ Partners
            </h2>
            <div className="grid" style={partners[Active]?.style}>
              <div className="bg"></div>
              {React.Children.toArray(
                partners[Active]?.list?.map((partner) => (
                  <div className="item">
                    <div className="icon">
                      <img
                        src={
                          partner?.icon
                            ? partner?.icon
                            : "/media/icons/person.svg"
                        }
                        alt={partner?.title}
                      />
                    </div>
                    <h3>{partner?.title}</h3>
                    <p>{partner?.description}</p>
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
