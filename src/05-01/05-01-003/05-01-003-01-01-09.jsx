import React from "react";

const SvgComponent = (props) => (
  <svg width={54} height={10} {...props}>
    <path d="M54 5H12v4h42V5zM5 0l5 5-.719.719L5 1.437.719 5.72 0 5l5-5z" />
    <path d="M7 4H6v6h1V4zM4 4H3v6h1V4z" />
  </svg>
);

export default SvgComponent;
