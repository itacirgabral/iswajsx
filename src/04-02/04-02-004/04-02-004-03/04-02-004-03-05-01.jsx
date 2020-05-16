import React from "react";

const SvgComponent = (props) => (
  <svg width={9} height={4} {...props}>
    <path d="M4.5 4C2.015 4 0 2.21 0 0h1c0 1.105 1.567 2 3.5 2S8 1.105 8 0h1c0 2.21-2.015 4-4.5 4z" />
  </svg>
);

export default SvgComponent;
