import React from "react";

const SvgComponent = (props) => (
  <svg width={40} height={2} {...props}>
    <path d="M40 0H0v2h40V0z" />
  </svg>
);

export default SvgComponent;
