import React from "react";

const SvgComponent = (props) => (
  <svg width={13} height={4} {...props}>
    <path d="M4 4V2H0V0h5v2h3V0h5v2H9v2H4z" />
  </svg>
);

export default SvgComponent;
