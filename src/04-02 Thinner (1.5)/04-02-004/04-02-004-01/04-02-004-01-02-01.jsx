import React from "react";

const SvgComponent = (props) => (
  <svg width={35} height={35} {...props}>
    <path d="M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z" />
    <path d="M23.5 10c-2.485 0-4.5 1.79-4.5 4h1c0-1.38 1.567-2.5 3.5-2.5S27 12.62 27 14h1c0-2.21-2.015-4-4.5-4z" />
  </svg>
);

export default SvgComponent;
