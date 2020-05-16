import React from "react";

const SvgComponent = (props) => (
  <svg width={20} height={19} {...props}>
    <path d="M0 13l6 6 6-6H0zM13 0a9.5 9.5 0 00-9.5 9.5V13h1V9.5A8.5 8.5 0 0113 1h7V0h-7z" />
    <path
      d="M13 1a8.5 8.5 0 00-8.5 8.5V13h3V9.5A5.5 5.5 0 0113 4h7V1h-7z"
      fill="#fff"
    />
    <path d="M13 4a5.5 5.5 0 00-5.5 5.5V13h1V9.5A4.5 4.5 0 0113 5h7V4h-7z" />
  </svg>
);

export default SvgComponent;
