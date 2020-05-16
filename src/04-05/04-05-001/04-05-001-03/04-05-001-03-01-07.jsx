import React from "react";

const SvgComponent = (props) => (
  <svg width={35} height={35} {...props}>
    <path d="M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 2C26.06 2 33 8.94 33 17.5 33 26.06 26.06 33 17.5 33 8.94 33 2 26.06 2 17.5 2 8.94 8.94 2 17.5 2z" />
    <path d="M10 25v2h11v-2H10z" />
    <path d="M26.5 26c0-2.21-2.239-4-5-4h-1v1h1a3 3 0 010 6h-1v1h1c2.761 0 5-1.79 5-4z" />
    <path d="M19.5 26a2 2 0 104 0 2 2 0 10-4 0z" />
  </svg>
);

export default SvgComponent;
