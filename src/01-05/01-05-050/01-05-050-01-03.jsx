import React from "react";

const SvgComponent = (props) => (
  <svg width={23} height={15} {...props}>
    <path d="M15 0v15h8V0h-8zM0 0h15v4H0zM2 13h13v2H2z" />
  </svg>
);

export default SvgComponent;
