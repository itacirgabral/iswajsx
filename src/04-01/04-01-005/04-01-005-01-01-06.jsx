import React from "react";

const SvgComponent = (props) => (
  <svg width={35} height={45} {...props}>
    <path d="M22 8V.929h-1.016v6.055h-6.055V8H22zM17.5 10C7.835 10 0 17.835 0 27.5S7.835 45 17.5 45 35 37.165 35 27.5 27.165 10 17.5 10zm0 2C26.06 12 33 18.94 33 27.5 33 36.06 26.06 43 17.5 43 8.94 43 2 36.06 2 27.5 2 18.94 8.94 12 17.5 12z" />
    <path d="M19.525 4.818l-.707.707-4.243-4.243.707-.707 4.243 4.243z" />
  </svg>
);

export default SvgComponent;
