import React from "react";

const SvgComponent = (props) => (
  <svg width={2} height={25} {...props}>
    <path d="M2 0H0v25h2V0z" />
  </svg>
);

export default SvgComponent;
