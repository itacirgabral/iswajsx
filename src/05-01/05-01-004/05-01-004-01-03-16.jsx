import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M60 11H18V7h42v4zM0 4h7.071v1.016H1.016v6.055H0V4z" />
    <path d="M3.182 6.475l-.707.707 4.243 4.243.707-.707-4.243-4.243zM16 8H8.929V6.984h6.055V.929H16V8z" />
    <path d="M12.818 5.525l.707-.707L9.282.575l-.707.707 4.243 4.243z" />
  </svg>
);

export default SvgComponent;
