import React from "react";

const SvgComponent = (props) => (
  <svg width={35} height={35} {...props}>
    <path d="M17.5 0C27.165 0 35 7.835 35 17.5S27.165 35 17.5 35 0 27.165 0 17.5 7.835 0 17.5 0zm0 1.5c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16z" />
    <path d="M14 29a4 4 0 110-8v1c-1.38 0-2.5 1.343-2.5 3s1.12 3 2.5 3v1z" />
    <path d="M10 29a4 4 0 110-8v1c-1.38 0-2.5 1.343-2.5 3s1.12 3 2.5 3v1z" />
  </svg>
);

export default SvgComponent;
