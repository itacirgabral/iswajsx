import React from "react";

const SvgComponent = (props) => (
  <svg width={56} height={15} {...props}>
    <path d="M56 4H14V0h42v4zM0 8V.929h1.016v6.055h6.055V8H0z" />
    <path d="M2.475 4.818l.707.707 4.243-4.243-.707-.707-4.243 4.243zM7 15V7.929h1.016v6.055h6.055V15H7z" />
    <path d="M9.475 11.818l.707.707 4.243-4.243-.707-.707-4.243 4.243z" />
  </svg>
);

export default SvgComponent;
