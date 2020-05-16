import React from "react";

const SvgComponent = (props) => (
  <svg width={5} height={25} {...props}>
    <path d="M0 0v25h5V0H0z" />
  </svg>
);

export default SvgComponent;
