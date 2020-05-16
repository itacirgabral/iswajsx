import React from "react";

const SvgComponent = (props) => (
  <svg width={25} height={2} {...props}>
    <path d="M25 0H0v2h25V0z" />
  </svg>
);

export default SvgComponent;
