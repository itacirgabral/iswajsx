import React from "react";

const SvgComponent = (props) => (
  <svg width={9} height={9} {...props}>
    <path d="M3.207 3.914l.707-.707 4.95 4.95-.707.707-4.95-4.95z" />
    <path d="M0 2.5a2.5 2.5 0 105 0 2.5 2.5 0 00-5 0z" />
  </svg>
);

export default SvgComponent;
