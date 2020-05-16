import React from "react";

const SvgComponent = (props) => (
  <svg width={35} height={35} {...props}>
    <path d="M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 2C26.06 2 33 8.94 33 17.5 33 26.06 26.06 33 17.5 33 8.94 33 2 26.06 2 17.5 2 8.94 8.94 2 17.5 2z" />
    <path d="M7 10v2c0 2.21 2.015 4 4.5 4s4.5-1.79 4.5-4v-2H7zm1 2h7c0 1.105-1.567 2-3.5 2S8 13.105 8 12z" />
  </svg>
);

export default SvgComponent;
