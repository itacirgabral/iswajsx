import React from "react";

const SvgComponent = (props) => (
  <svg width={21} height={17} {...props}>
    <path d="M5.5.5L0 6h1.5l4-4 4 4H11L5.5.5zM6 6v5a3 3 0 003 3h12v3H10a5 5 0 01-5-5V6h1z" />
  </svg>
);

export default SvgComponent;
