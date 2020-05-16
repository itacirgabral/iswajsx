import React from "react";

const SvgComponent = (props) => (
  <svg width={7} height={7} {...props}>
    <path d="M3.5 7L0 3.5l.719-.719L3.5 5.594 6.281 2.78 7 3.5 3.5 7z" />
    <path d="M3 4V0h1v4H3z" />
  </svg>
);

export default SvgComponent;
