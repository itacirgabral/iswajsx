import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M1.414 7.757l.707.707L9.9.686l-.707-.707zM3.536 9.878l.707.707 7.778-7.778-.707-.707z" />
    <path fill="#fff" d="M2.121 8.464l1.415 1.414L11.314 2.1 9.899.686z" />
    <path d="M0 12V4.929h1.016v6.055h6.055V12H0z" />
  </svg>
);

export default SvgComponent;
