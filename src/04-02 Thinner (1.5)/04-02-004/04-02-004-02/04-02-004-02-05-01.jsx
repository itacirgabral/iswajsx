import React from "react";

const SvgComponent = (props) => (
  <svg width={9} height={2} {...props}>
    <path d="M0 .5V2h9V.5H0z" />
  </svg>
);

export default SvgComponent;
