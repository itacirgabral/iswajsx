import React from "react";

const SvgComponent = (props) => (
  <svg width={21} height={10} {...props}>
    <path d="M16 0l-5 5 .719.719L16 1.437l4.281 4.282L21 5l-5-5z" />
    <path d="M15.5 4h1v6h-1V4zM5 0L0 5l.719.719L5 1.437 9.281 5.72 10 5 5 0z" />
    <path d="M4.5 4h1v6h-1V4z" />
  </svg>
);

export default SvgComponent;
