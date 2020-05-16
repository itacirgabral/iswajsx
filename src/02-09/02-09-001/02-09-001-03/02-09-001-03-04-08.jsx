import React from "react";

const SvgComponent = (props) => (
  <svg width={19} height={17} {...props}>
    <path d="M0 0v2h12a5 5 0 015 5v1a5 5 0 01-5 5h-1v4a8 8 0 008-8V7a7 7 0 00-7-7H0z" />
  </svg>
);

export default SvgComponent;
