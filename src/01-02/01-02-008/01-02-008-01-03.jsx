import React from "react";

const SvgComponent = (props) => (
  <svg width={15} height={30} {...props}>
    <path d="M0 15h15v15H0zM0 3h2v12H0zM5 0h2v15H5z" />
  </svg>
);

export default SvgComponent;
