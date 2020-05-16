import React from "react";

const SvgComponent = (props) => (
  <svg width={15} height={19} {...props}>
    <path d="M0 4h15v15H0zM3 0h4v4H3z" />
  </svg>
);

export default SvgComponent;
