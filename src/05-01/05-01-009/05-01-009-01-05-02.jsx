import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M28.5 11C18.835 11 11 18.835 11 28.5S18.835 46 28.5 46 46 38.165 46 28.5 38.165 11 28.5 11zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16zM14.622 14.121a3 3 0 11-4.243-4.242 3 3 0 014.243 4.242z" />
    <path d="M10.556 11.116l1.06-1.06-4.95-4.95-1.06 1.06 4.95 4.95zM11.379.878a3 3 0 104.242 4.243A3 3 0 0011.38.878z" />
    <path d="M14.384 4.944l1.06-1.06 4.95 4.95-1.06 1.06-4.95-4.95zM1.379 10.878a3 3 0 104.242 4.243 3 3 0 00-4.242-4.243z" />
    <path d="M4.384 14.944l1.06-1.06 4.95 4.95-1.06 1.06-4.95-4.95z" />
  </svg>
);

export default SvgComponent;
