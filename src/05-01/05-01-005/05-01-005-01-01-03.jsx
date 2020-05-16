import React from "react";

const SvgComponent = (props) => (
  <svg width={55} height={5} {...props}>
    <path d="M0 1h42v4H0V1zM48 3V2h7v1h-7z" />
    <path d="M46.5 0a2.5 2.5 0 110 5 2.5 2.5 0 010-5z" />
  </svg>
);

export default SvgComponent;
