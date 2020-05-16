import React from "react";

const SvgComponent = (props) => (
  <svg width={35} height={35} {...props}>
    <path d="M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z" />
    <path d="M11.5 10C9.015 10 7 11.79 7 14H6v1h1c0 2.21 2.015 4 4.5 4s4.5-1.79 4.5-4h1v-1h-1c0-2.21-2.015-4-4.5-4zm0 1.5c1.933 0 3.5 1.12 3.5 2.5H8c0-1.38 1.567-2.5 3.5-2.5zM8 15h7c0 1.38-1.567 2.5-3.5 2.5S8 16.38 8 15z" />
  </svg>
);

export default SvgComponent;
