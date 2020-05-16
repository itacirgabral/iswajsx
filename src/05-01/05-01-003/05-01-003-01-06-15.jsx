import React from "react";

const SvgComponent = (props) => (
  <svg width={10} height={10} {...props}>
    <path d="M0 5l5-5 .719.719L1.437 5 5.72 9.281 5 10 0 5z" />
    <path d="M4 3v1h6V3H4zM4 6v1h6V6H4z" />
  </svg>
);

export default SvgComponent;
