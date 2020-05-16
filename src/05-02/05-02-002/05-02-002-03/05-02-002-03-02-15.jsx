import React from "react";

const SvgComponent = (props) => (
  <svg width={40} height={5} {...props}>
    <path d="M40 0H0v5h40V0z" />
  </svg>
);

export default SvgComponent;
