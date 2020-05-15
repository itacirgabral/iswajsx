import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M17.5 11C7.835 11 0 18.835 0 28.5S7.835 46 17.5 46 35 38.165 35 28.5 27.165 11 17.5 11zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16zM23 10l-5-5 .719-.719L23 8.563l4.281-4.282L28 5l-5 5z" />
    <path d="M22.5 6h1V0h-1v6zM12 10L7 5l.719-.719L12 8.563l4.281-4.282L17 5l-5 5z" />
    <path d="M11.5 6h1V0h-1v6z" />
  </svg>
);

export default SvgComponent;
