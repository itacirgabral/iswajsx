import React from "react";

const SvgComponent = (props) => (
  <svg width={51} height={9} {...props}>
    <path d="M0 5h42v4H0V5zM45.207 3.914l.707-.707 4.95 4.95-.707.707-4.95-4.95z" />
    <path d="M47 2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
  </svg>
);

export default SvgComponent;
