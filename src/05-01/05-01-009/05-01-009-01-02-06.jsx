import React from "react";

const SvgComponent = (props) => (
  <svg width={35} height={46} {...props}>
    <path d="M17.5 11C7.835 11 0 18.835 0 28.5S7.835 46 17.5 46 35 38.165 35 28.5 27.165 11 17.5 11zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16zM21.622 9.121a3 3 0 10-4.243-4.242 3 3 0 004.243 4.242z" />
    <path d="M18.616 5.055l-1.06 1.061-4.95-4.95 1.06-1.06 4.95 4.95zM13.622 10.121A3 3 0 109.379 5.88a3 3 0 004.243 4.242z" />
    <path d="M10.616 6.055l-1.06 1.061-4.95-4.95 1.06-1.06 4.95 4.95z" />
  </svg>
);

export default SvgComponent;
