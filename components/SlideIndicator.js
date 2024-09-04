import React from "react";

export default function SlideIndicator({ indicator }) {
  const sectionMap = [
    {
      style: { "--indicator-bg": "var(--orange)" },
    },
    {
      style: { "--indicator-bg": "var(--red)" },
    },
    {
      style: { "--indicator-bg": "var(--pink)" },
    },
    {
      style: { "--indicator-bg": "var(--purple)" },
    },
    {
      style: { "--indicator-bg": "var(--blue)" },
    },
    // {
    //   style: { "--indicator-bg": "var(--green)" },
    // },
  ];

  return (
    <div className="am-mw-slideIndicator">
      {React.Children.toArray(
        sectionMap.map((el, ind) => (
          <button
            className={`indicator mw-${indicator}${
              indicator === ind + 1 ? " active" : ""
            }`}
            style={el?.style}
            onClick={() =>
              window &&
              window.innerHeight &&
              window.scrollTo(0, window.innerHeight * (ind + 1))
            }
          ></button>
        ))
      )}
    </div>
  );
}
