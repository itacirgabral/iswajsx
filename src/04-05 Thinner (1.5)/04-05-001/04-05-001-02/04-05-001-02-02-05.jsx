import React from "react";

const SvgComponent = (props) => (
  <svg width={15} height={6} {...props}>
    <path d="M0 .25h15v1.5H0zM4.5 1.75V2c0 2.21 1.343 4 3 4s3-1.79 3-4v-.25h-6z" />
  </svg>
);

export default SvgComponent;
