import React from "react";

const SvgComponent = (props) => (
  <svg width={18} height={26} {...props}>
    <path d="M7 13l-7 7h2l5-5 5 5h2l-7-7z" />
    <path d="M16 0v21a3 3 0 01-3 3c-1.657 0-3-1.79-3-4H4a6 6 0 006 6h3a5 5 0 005-5V0h-2z" />
  </svg>
);

export default SvgComponent;
