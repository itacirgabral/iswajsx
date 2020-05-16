import React from "react";

const SvgComponent = (props) => (
  <svg width={35} height={46} {...props}>
    <path d="M22.5 5l-5-5-.719.719L21.063 5 16.78 9.281 17.5 10l5-5zM17.5 11C7.835 11 0 18.835 0 28.5S7.835 46 17.5 46 35 38.165 35 28.5 27.165 11 17.5 11zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z" />
    <path d="M18.5 3v1h-6V3h6zM18.5 6v1h-6V6h6z" />
  </svg>
);

export default SvgComponent;
