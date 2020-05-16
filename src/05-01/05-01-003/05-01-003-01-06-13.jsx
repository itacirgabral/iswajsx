import React from "react";

const SvgComponent = (props) => (
  <svg width={10} height={10} {...props}>
    <path d="M5 10l5-5-.719-.719L5 8.563.719 4.28 0 5l5 5z" />
    <path d="M7 6H6V0h1v6zM4 6H3V0h1v6z" />
  </svg>
);

export default SvgComponent;
