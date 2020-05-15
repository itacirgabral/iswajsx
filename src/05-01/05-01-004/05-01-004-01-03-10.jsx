import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M60 11H18V7h42v4zM0 8h7.071V6.984H1.016V.929H0V8z" />
    <path d="M3.182 5.525l-.707-.707L6.718.575l.707.707-4.243 4.243zM16 4H8.929v1.016h6.055v6.055H16V4z" />
    <path d="M12.818 6.475l.707.707-4.243 4.243-.707-.707 4.243-4.243z" />
  </svg>
);

export default SvgComponent;
