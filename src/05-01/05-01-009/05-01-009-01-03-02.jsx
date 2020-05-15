import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M17.5 12C7.835 12 0 19.835 0 29.5S7.835 47 17.5 47 35 39.165 35 29.5 27.165 12 17.5 12zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16zM1.378 2.878a3 3 0 114.243 4.243 3 3 0 01-4.243-4.243z" />
    <path d="M5.444 5.884l-1.06 1.06 4.95 4.95 1.06-1.06-4.95-4.95zM15.621 9.121a3 3 0 10-4.242-4.243 3 3 0 004.242 4.243z" />
    <path d="M12.616 5.055l-1.06 1.06-4.95-4.949 1.06-1.06 4.95 4.95z" />
  </svg>
);

export default SvgComponent;