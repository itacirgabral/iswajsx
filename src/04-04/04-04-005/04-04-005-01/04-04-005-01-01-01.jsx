import React from "react";

const SvgComponent = (props) => (
  <svg width={35} height={35} {...props}>
    <path d="M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 2C26.06 2 33 8.94 33 17.5 33 26.06 26.06 33 17.5 33 8.94 33 2 26.06 2 17.5 2 8.94 8.94 2 17.5 2z" />
    <path d="M17.5 22c-3.59 0-6.5 1.343-6.5 3s2.91 3 6.5 3 6.5-1.343 6.5-3-2.91-3-6.5-3zm0 2c2.485 0 4.5.448 4.5 1s-2.015 1-4.5 1-4.5-.448-4.5-1 2.015-1 4.5-1z" />
  </svg>
);

export default SvgComponent;
