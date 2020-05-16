import React from "react";

const SvgComponent = (props) => (
  <svg width={23} height={17} {...props}>
    <path d="M4 0v2h12a5 5 0 015 5v1a5 5 0 01-5 5H0v4h15a8 8 0 008-8V7a7 7 0 00-7-7H4z" />
  </svg>
);

export default SvgComponent;
