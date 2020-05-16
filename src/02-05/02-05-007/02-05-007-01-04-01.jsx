import React from "react";

const SvgComponent = (props) => (
  <svg width={10} height={20} {...props}>
    <path d="M0 0v11.438L8.594 20 10 18.594l-8-8V0H0z" />
  </svg>
);

export default SvgComponent;
