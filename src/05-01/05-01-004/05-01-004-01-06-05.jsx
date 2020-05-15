import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M5 10l5-5-.719-.719L5 8.563.719 4.28 0 5l5 5z" />
    <path d="M5.5 6h-1V0h1v6z" />
  </svg>
);

export default SvgComponent;
