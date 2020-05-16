import React from "react";

const SvgComponent = (props) => (
  <svg width={51} height={9} {...props}>
    <path d="M51 5H9v4h42V5zM5.793 3.914l-.707-.707-4.95 4.95.707.707 4.95-4.95z" />
    <path d="M4 2.5a2.5 2.5 0 105 0 2.5 2.5 0 00-5 0z" />
  </svg>
);

export default SvgComponent;
