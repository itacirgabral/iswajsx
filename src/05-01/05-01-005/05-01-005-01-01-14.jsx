import React from "react";

const SvgComponent = (props) => (
  <svg width={51} height={9} {...props}>
    <path d="M51 8H9V4h42v4zM3.914 5.793l-.707-.707 4.95-4.95.707.707-4.95 4.95z" />
    <path d="M0 6.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0z" />
  </svg>
);

export default SvgComponent;
