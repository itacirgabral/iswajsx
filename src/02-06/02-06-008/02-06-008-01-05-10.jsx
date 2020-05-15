import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M20 13l-6 6-6-6h12zm-2.438 1h-7.125L14 17.563 17.563 14zM7 0a9.5 9.5 0 019.5 9.5V13h-1V9.5A8.5 8.5 0 007 1H0V0h7z" />
    <path
      d="M7 1a8.5 8.5 0 018.5 8.5V13h-3V9.5A5.5 5.5 0 007 4H0V1h7z"
      fill="#fff"
    />
    <path d="M7 4a5.5 5.5 0 015.5 5.5V13h-1V9.5A4.5 4.5 0 007 5H0V4h7z" />
    <path d="M17.563 14L14 17.563 10.437 14h7.126z" fill="#fff" />
  </svg>
);

export default SvgComponent;
