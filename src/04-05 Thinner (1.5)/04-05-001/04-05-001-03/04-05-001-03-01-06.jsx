import React from "react";

const SvgComponent = (props) => (
  <svg width={35} height={35} {...props}>
    <path d="M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z" />
    <path d="M10 25.25v1.5h7v-1.5h-7zM19 25.25V26a2 2 0 004 0v-.75h-4z" />
    <path d="M17 25.25V27a4 4 0 108 0v-1.75h-1V27c0 1.38-1.343 2.5-3 2.5s-3-1.12-3-2.5v-1.75h-1z" />
  </svg>
);

export default SvgComponent;
