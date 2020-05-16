import React from "react";

const SvgComponent = (props) => (
  <svg width={9} height={9} {...props}>
    <path d="M5.793 5.086l-.707.707L.136.843.843.136l4.95 4.95z" />
    <path d="M9 6.5a2.5 2.5 0 10-5 0 2.5 2.5 0 005 0z" />
  </svg>
);

export default SvgComponent;
