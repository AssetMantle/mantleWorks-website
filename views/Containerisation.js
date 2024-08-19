import { montserrat } from "@/config/fonts/GoogleFonts";
import React, { useState, useEffect } from "react";

export default function Containerisation({ isViewing = false }) {
  const [startAnimation, setStartAnimation] = useState(false);
  const [current, setCurrent] = useState(0);
  const [AnimateCube, setAnimateCube] = useState(false);
  const [AutoAnimate, setAutoAnimate] = useState(true);
  const [ExpHovered, setExpHovered] = useState(0);
  const changingInterval = 5000;
  const AnimationStart = 1000;

  const codeMeanings = [
    {
      title: "Impact Assets",
      color: "var(--yellow)",
      handle: "yellow",
    },
    {
      title: "Data Assets",
      color: "var(--purple)",
      handle: "purple",
    },
    {
      title: "Credential Assets",
      color: "var(--pink)",
      handle: "pink",
    },
    {
      title: "Property Assets",
      color: "var(--blue)",
      handle: "blue",
    },
    {
      title: "Access Assets",
      color: "var(--green)",
      handle: "green",
    },
  ];

  const Containers = [
    {
      icon: "/media/containers/icons/Healthcare.png",
      title: "HealthCare",
      subtitle: ["Transforming Data", "Into Assets"],
      description:
        "Unlocking diagnostic data to enhance research and clinical outcomes, delivering real value for patients",
      images: {
        initial: "/media/containers/cubes/RedInitial.png",
        background: "/media/containers/cubes/RedBG.png",
        front: "/media/containers/cubes/RedSingle.png",
      },
      card: {
        title: "hDoA",
        description: ["HealthCare", "Digitally Owned Assets "],
      },
      assets: ["pink", "purple", "green"],
      style: {
        "--container-bg": "var(--red)",
      },
    },
    {
      icon: "/media/containers/icons/RealEstate.png",
      title: "Real Estate",
      subtitle: ["Revolutionizing Transparency", "And Investment"],
      description:
        "Bridging info asymmetry for smarter property investing, fairer valuations, and performance-driven liquidity",
      images: {
        initial: "/media/containers/cubes/BlueInitial.png",
        background: "/media/containers/cubes/BlueBG.png",
        front: "/media/containers/cubes/BlueSingle.png",
      },
      card: {
        title: "rDoA",
        description: ["Real Estate", "Digitally Owned Assets "],
      },
      assets: ["blue", "purple", "pink", "green"],
      style: {
        "--container-bg": "var(--blue)",
      },
    },
    {
      icon: "/media/containers/icons/Hospitality.png",
      title: "Hospitality",
      subtitle: ["Reimagining", "Customer Loyalty"],
      description:
        "Introducing loyalty assets that elevate customer loyalty, unlock exceptional experiences, and create an interoperable loyalty economy",
      images: {
        initial: "/media/containers/cubes/OrangeInitial.png",
        background: "/media/containers/cubes/OrangeBG.png",
        front: "/media/containers/cubes/OrangeSingle.png",
      },
      card: {
        title: "lDoA",
        description: ["Loyalty", "Digitally Owned Assets "],
      },
      assets: ["pink", "purple"],
      style: {
        "--container-bg": "var(--orange)",
      },
    },
    {
      icon: "/media/containers/icons/ESG.png",
      title: "ESG",
      subtitle: ["Assetizing", "Sustainability"],
      description:
        "Tackling fragmented and inconsistent ESG data to enhance monitoring of ESG assets",
      images: {
        initial: "/media/containers/cubes/GreenInitial.png",
        background: "/media/containers/cubes/GreenBG.png",
        front: "/media/containers/cubes/GreenSingle.png",
      },
      card: {
        title: "sDoA",
        description: ["Sustainable", "Digitally Owned Assets "],
      },
      assets: ["yellow", "purple", "pink", "green"],
      style: {
        "--container-bg": "var(--green)",
      },
    },
  ];

  useEffect(() => {
    !startAnimation && isViewing && setStartAnimation(true);
    !AnimateCube && setTimeout(() => setAnimateCube(true), AnimationStart);
    setCurrent(0);
    setAutoAnimate(true);
  }, [isViewing]);

  useEffect(() => {
    if (AnimateCube && AutoAnimate) {
      const handleInterval = () => {
        const value = (current + 1) % Containers.length;
        setCurrent(value);
      };
      const intervalId = setInterval(handleInterval, changingInterval);
      return () => clearInterval(intervalId);
    }
  }, [current, Containers.length, AutoAnimate, AnimateCube]);

  return (
    <section id="containerisation">
      <div className="am-mw-container am-mw-containerisation">
        <div className="am-mw-containerisation-content">
          <div className="graphics">
            {React.Children.toArray(
              Containers.map((container, index) => (
                <div
                  className={`cube ${
                    AnimateCube
                      ? current === index
                        ? "active"
                        : ""
                      : current === index
                      ? "stopped"
                      : ""
                  }`}
                  style={{ ...container?.style }}
                >
                  <img
                    src={container?.images?.background}
                    alt={
                      container?.images?.background
                        ?.split("/")?.[4]
                        ?.split(".")?.[0] + " icon"
                    }
                    className="bg"
                  />
                  <div className="front">
                    <img
                      src={container?.images?.initial}
                      alt={
                        container?.images?.front
                          ?.split("/")?.[4]
                          ?.split(".")?.[0] + " icon"
                      }
                      className="initial"
                    />
                    <img
                      src={container?.images?.front}
                      alt={
                        container?.images?.front
                          ?.split("/")?.[4]
                          ?.split(".")?.[0] + " icon"
                      }
                      className="final"
                    />
                  </div>
                  <div className="gradient"></div>
                </div>
              ))
            )}
          </div>
          <div className="content-container">
            <h2
              className={`title ${montserrat?.className}${
                startAnimation ? " active" : " "
              }`}
            >
              Our Containers
            </h2>
            <div className={`slider${startAnimation ? " active" : " "}`}>
              <div className="content">
                {React.Children.toArray(
                  Containers.map((container, index) => (
                    <div
                      className={`item ${current === index ? "active" : ""}`}
                      style={container?.style}
                    >
                      <div className="icon">
                        <img
                          src={container?.icon}
                          alt={
                            container?.icon?.split("/")?.[4]?.split(".")?.[0] +
                            " icon"
                          }
                        />
                      </div>
                      <h3 className="title">{container?.title}</h3>
                      <h4 className="subtitle">
                        {container?.subtitle?.map((st) => (
                          <span>{st}</span>
                        ))}
                      </h4>
                      <p className="description">{container?.description}</p>
                      <div className="card">
                        <h4 className="title">{container?.card?.title}</h4>
                        <p className="description">
                          {container?.card?.description?.map((ds) => (
                            <span>{ds}</span>
                          ))}
                        </p>
                      </div>
                      <div className="assets">
                        {container?.assets?.map((asset) => (
                          <button
                            className={`asset`}
                            onFocus={() => setExpHovered(asset)}
                            onMouseEnter={() => setExpHovered(asset)}
                            onBlur={() => setExpHovered()}
                            onMouseLeave={() => setExpHovered()}
                            style={{ background: `var(--${asset})` }}
                          ></button>
                        ))}
                      </div>
                    </div>
                  ))
                )}
              </div>
              <div className={`indicators`}>
                {React.Children.toArray(
                  Containers.map((con, index) => (
                    <button
                      className={`indicator ${
                        current === index ? "active" : ""
                      }`}
                      onClick={() => {
                        setCurrent(index);
                        setAutoAnimate(false);
                      }}
                    ></button>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="info-chart">
          {React.Children.toArray(
            codeMeanings.map((code) => (
              <div
                className={`info ${
                  ExpHovered === code?.handle ? "active" : ""
                }`}
              >
                <i style={{ background: code?.color }}></i>
                {code?.title}
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
