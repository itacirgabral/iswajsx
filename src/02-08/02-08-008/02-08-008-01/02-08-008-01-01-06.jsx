import React from "react";

const SvgComponent = (props) => (
  <svg width={18} height={26} {...props}>
    <path d="M18 20l-7-7-7 7h14z" />
    <path d="M2 0v21a3 3 0 003 3c1.657 0 3-1.79 3-4h6a6 6 0 01-6 6H5a5 5 0 01-5-5V0h2z" />
  </svg>
);

export default SvgComponent;
