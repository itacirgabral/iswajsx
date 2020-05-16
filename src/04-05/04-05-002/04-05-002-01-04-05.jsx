import React from "react";

const SvgComponent = (props) => (
  <svg width={5} height={5} {...props}>
    <path d="M2.5 5L.25 2.75l.719-.719L2 3.062V0h1v3.063L4.031 2.03l.719.719L2.5 5z" />
  </svg>
);

export default SvgComponent;
