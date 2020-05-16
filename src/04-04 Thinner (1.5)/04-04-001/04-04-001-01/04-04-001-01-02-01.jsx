import React from "react";

const SvgComponent = (props) => (
  <svg width={15} height={2} {...props}>
    <path d="M0 .5h15V2H0z" />
  </svg>
);

export default SvgComponent;
