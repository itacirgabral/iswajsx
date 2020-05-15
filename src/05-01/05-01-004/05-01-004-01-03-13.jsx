import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M64 5H22V1h42v4zM15 10l5-5-.719-.719L15 8.563 10.719 4.28 10 5l5 5z" />
    <path d="M15.5 6h-1V0h1v6zM5 0l5 5-.719.719L5 1.437.719 5.72 0 5l5-5z" />
    <path d="M5.5 4h-1v6h1V4z" />
  </svg>
);

export default SvgComponent;
