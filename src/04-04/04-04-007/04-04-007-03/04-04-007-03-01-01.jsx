import React from "react";

const SvgComponent = (props) => (
  <svg width={35} height={35} {...props}>
    <path d="M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 2C26.06 2 33 8.94 33 17.5 33 26.06 26.06 33 17.5 33 8.94 33 2 26.06 2 17.5 2 8.94 8.94 2 17.5 2z" />
    <path d="M20 24.5a2.5 2.5 NaN 11-5 0 2.5 2.5 NaN 115 0z" />
    <path d="M17 19h1v11h-1z" />
    <path d="M21.035 20.257l.707.707-7.778 7.778-.707-.707z" />
    <path d="M13.257 20.964l.707-.707 7.778 7.778-.707.707z" />
    <path d="M12 25v-1h11v1z" />
  </svg>
);

export default SvgComponent;
