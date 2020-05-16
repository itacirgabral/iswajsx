import React from "react";

const SvgComponent = (props) => (
  <svg width={4} height={4} {...props}>
    <path d="M0 0v3.182h1.016V1.724l2.166 2.165.707-.707-2.165-2.166h1.458V0H0z" />
  </svg>
);

export default SvgComponent;
