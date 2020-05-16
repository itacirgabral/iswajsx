import React from "react";

const SvgComponent = (props) => (
  <svg width={8} height={8} {...props}>
    <path d="M8 0H.929v1.016h6.055v6.055H8V0z" />
    <path d="M4.818 2.475l.707.707-4.243 4.243-.707-.707 4.243-4.243z" />
  </svg>
);

export default SvgComponent;
