import React from "react";

const SvgComponent = (props) => (
  <svg width={25} height={5} {...props}>
    <path d="M25 0H0v5h25V0z" />
  </svg>
);

export default SvgComponent;
