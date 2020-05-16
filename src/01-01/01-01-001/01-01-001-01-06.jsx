import React from "react";

const SvgComponent = (props) => (
  <svg width={15} height={30} {...props}>
    <path d="M0 0h2v15H0zM0 17h15v13H0z" />
  </svg>
);

export default SvgComponent;
