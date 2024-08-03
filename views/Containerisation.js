import { montserrat } from "@/config/fonts/GoogleFonts";
import React, { useState, useEffect } from "react";

export default function Containerisation({ isViewing = false }) {
  const startAnimation = isViewing;
  const [current, setCurrent] = useState(0);
  const changingInterval = 5000;

  const Containers = [
    {
      icon: "/media/containers/icons/Healthcare.png",
      title: "HealthCare",
      description:
        "SSI allows individual to have complete control over their abstracted account, to create, own, manage and share their identity information",
      images: {
        initial: "/media/containers/cubes/.png",
        background: "/media/containers/cubes/RedBG.png",
        front: "/media/containers/cubes/RedSingle.png",
      },
      style: {
        "--container-bg": "var(--red)",
      },
    },
    {
      icon: "/media/containers/icons/RealEstate.png",
      title: "Real Estate",
      description:
        "SSI allows individual to have complete control over their abstracted account, to create, own, manage and share their identity information",
      images: {
        initial: "/media/containers/cubes/.png",
        background: "/media/containers/cubes/PinkBG.png",
        front: "/media/containers/cubes/PinkSingle.png",
      },
      style: {
        "--container-bg": "var(--pink)",
      },
    },
    {
      icon: "/media/containers/icons/Hospitality.png",
      title: "Hospitality",
      description:
        "SSI allows individual to have complete control over their abstracted account, to create, own, manage and share their identity information",
      images: {
        initial: "/media/containers/cubes/.png",
        background: "/media/containers/cubes/PurpleBG.png",
        front: "/media/containers/cubes/PurpleSingle.png",
      },
      style: {
        "--container-bg": "var(--purple)",
      },
    },
    {
      icon: "/media/containers/icons/ESG.png",
      title: "ESG",
      description:
        "SSI allows individual to have complete control over their abstracted account, to create, own, manage and share their identity information",
      images: {
        initial: "/media/containers/cubes/.png",
        background: "/media/containers/cubes/BlueBG.png",
        front: "/media/containers/cubes/BlueSingle.png",
      },
      style: {
        "--container-bg": "var(--blue)",
      },
    },
  ];

  useEffect(() => {
    setCurrent(0);
  }, [startAnimation]);

  useEffect(() => {
    const handleInterval = () => {
      const value = (current + 1) % Containers.length;
      setCurrent(value);
    };
    const intervalId = setInterval(handleInterval, changingInterval);
    return () => clearInterval(intervalId);
  }, [current, Containers.length]);

  return (
    <section id="containerisation">
      <div className="am-mw-container am-mw-containerisation">
        <div className="am-mw-containerisation-content">
          <div className="graphics">
            {React.Children.toArray(
              Containers.map((container, index) => (
                <div className={`cube ${current === index ? "active" : ""}`}>
                  <img
                    src={container?.images?.background}
                    alt={
                      container?.images?.background
                        ?.split("/")?.[4]
                        ?.split(".")?.[0] + " icon"
                    }
                    className="bg"
                  />
                  <img
                    src={container?.images?.front}
                    alt={
                      container?.images?.front
                        ?.split("/")?.[4]
                        ?.split(".")?.[0] + " icon"
                    }
                    className="front"
                  />
                </div>
              ))
            )}
          </div>
          <div className="content-container">
            <h2 className={`title ${montserrat?.className}`}>Our Containers</h2>
            <div className={`slider${startAnimation ? " active" : " "}`}>
              <div className="content">
                {React.Children.toArray(
                  Containers.map((container, index) => (
                    <div
                      className={`item ${current === index ? "active" : ""}`}
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
                      <p className="description">{container?.description}</p>
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
                    ></button>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
