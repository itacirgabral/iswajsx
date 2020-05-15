import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M20 6l-6-6-6 6h12zm-2.438-1h-7.125L14 1.437 17.563 5zM7 19a9.5 9.5 0 009.5-9.5V6h-1v3.5A8.5 8.5 0 017 18H0v1h7z" />
    <path
      d="M7 18a8.5 8.5 0 008.5-8.5V6h-3v3.5A5.5 5.5 0 017 15H0v3h7z"
      fill="#fff"
    />
    <path d="M7 15a5.5 5.5 0 005.5-5.5V6h-1v3.5A4.5 4.5 0 017 14H0v1h7z" />
    <path d="M17.563 5L14 1.437 10.437 5h7.126z" fill="#fff" />
  </svg>
);

export default SvgComponent;
