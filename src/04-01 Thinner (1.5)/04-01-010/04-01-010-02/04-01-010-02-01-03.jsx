import React from "react";

const SvgComponent = (props) => (
  <svg width={35} height={46} {...props}>
    <path d="M8.5 6V4h18v2h-18zM7.312 0L5.906 1.406 8.5 4h2.812l-4-4zM17.5 11C7.835 11 0 18.835 0 28.5S7.835 46 17.5 46 35 38.165 35 28.5 27.165 11 17.5 11zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16zM14.5 10l1.406-1.406L13.312 6H10.5l4 4z" />
  </svg>
);

export default SvgComponent;
