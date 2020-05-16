import React from "react";

const SvgComponent = (props) => (
  <svg width={15} height={6} {...props}>
    <path d="M0 4.25h15v1.5H0zM3.5 0c-1.657 0-3 1.79-3 4v.25h6V4c0-2.21-1.343-4-3-4z" />
  </svg>
);

export default SvgComponent;
