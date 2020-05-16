import React from "react";

const SvgComponent = (props) => (
  <svg width={35} height={46} {...props}>
    <path d="M17.5 11C7.835 11 0 18.835 0 28.5S7.835 46 17.5 46 35 38.165 35 28.5 27.165 11 17.5 11zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16zM28.5 10l-5-5 .719-.719L28.5 8.563l4.281-4.282L33.5 5l-5 5z" />
    <path d="M26.5 6h1V0h-1v6zM29.5 6h1V0h-1v6zM17.5 0l-5 5 .719.719L17.5 1.437l4.281 4.282L22.5 5l-5-5z" />
    <path d="M15.5 4h1v6h-1V4zM18.5 4h1v6h-1V4zM6.5 10l-5-5 .719-.719L6.5 8.563l4.281-4.282L11.5 5l-5 5z" />
    <path d="M4.5 6h1V0h-1v6zM7.5 6h1V0h-1v6z" />
  </svg>
);

export default SvgComponent;
