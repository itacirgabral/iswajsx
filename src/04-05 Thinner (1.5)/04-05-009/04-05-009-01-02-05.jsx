import React from "react";

const SvgComponent = (props) => (
  <svg width={8} height={9} {...props}>
    <path d="M4 9L0 5l.719-.719L4 7.594 7.281 4.28 8 5 4 9z" />
    <path d="M2 5V0h1v5H2zM5 5V0h1v5H5z" />
  </svg>
);

export default SvgComponent;
