import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M5 10l5-5-.719-.719L5 8.563.719 4.28 0 5l5 5z" />
    <path d="M7 6V0H6v6h1zM4 6V0H3v6h1z" />
  </svg>
);

export default SvgComponent;
