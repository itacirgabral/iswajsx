import React from "react";

const SvgComponent = (props) => (
  <svg width={20} height={34} {...props}>
    <path d="M15 6a5 5 0 015 5v2a5 5 0 01-5 5v-3a3 3 0 003-3v-2a3 3 0 00-3-3H6V6h9zM6 1L.5 6.5 6 12V1zM5 3.438v6.124L1.937 6.5 5 3.437z" />
    <path d="M13 0h1v34h-1V0z" />
    <path d="M15 19a5 5 0 015 5v2a5 5 0 01-5 5v-3a3 3 0 003-3v-2a3 3 0 00-3-3H6v-1h9z" />
    <path d="M10 0h3v34h-3V0z" fill="#fff" />
    <path d="M6 14L.5 19.5 6 25V14zm-1 2.438v6.125L1.937 19.5 5 16.437zM9 0h1v34H9V0z" />
    <path
      d="M5 16.438L1.937 19.5 5 22.563v-6.125zM5 3.438L1.937 6.5 5 9.563V3.436z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
