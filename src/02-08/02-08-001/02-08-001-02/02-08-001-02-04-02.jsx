import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M25 6H11l7 7 7-7z" />
    <path d="M14 0a5 5 0 015 5v1h-2V5a3 3 0 00-3-3h-3C9.343 2 8 3.79 8 6v2c0 4.472 6 12 6 12H0s6-7.528 6-12V6c0-3.314 2.239-6 5-6h3z" />
  </svg>
);

export default SvgComponent;
