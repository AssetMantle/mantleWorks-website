import React from "react";

export default function DividerGradient() {
  return (
    <svg
      style={{
        height: "100%",
        width: "100%",
        objectFit: "fill",
        objectPosition: "center",
      }}
      viewBox="0 0 4 585"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.5">
        <line
          y1="-1.5"
          x2="293.511"
          y2="-1.5"
          transform="matrix(-0.00340697 -0.999994 1 0 4 293.51)"
          stroke="url(#paint0_linear_1407_275)"
          strokeWidth="3"
        />
        <line
          y1="-1.5"
          x2="293.511"
          y2="-1.5"
          transform="matrix(-0.00340697 0.999994 1 0 4 291.49)"
          stroke="url(#paint1_linear_1407_275)"
          strokeWidth="3"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_1407_275"
          x1="286.593"
          y1="0.5"
          x2="-5.01729"
          y2="0.50516"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.165" stopColor="#0000FF" stopOpacity="0" />
          <stop offset="0.56" stopColor="#0000FF" />
          <stop offset="0.74" stopColor="#00FF00" />
          <stop offset="0.86" stopColor="#FF930F" />
          <stop offset="1" stopColor="#FF0000" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1407_275"
          x1="286.593"
          y1="0.5"
          x2="-5.01729"
          y2="0.50516"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.165" stopColor="#0000FF" stopOpacity="0" />
          <stop offset="0.56" stopColor="#0000FF" />
          <stop offset="0.74" stopColor="#00FF00" />
          <stop offset="0.86" stopColor="#FF930F" />
          <stop offset="1" stopColor="#FF0000" />
        </linearGradient>
      </defs>
    </svg>
  );
}
