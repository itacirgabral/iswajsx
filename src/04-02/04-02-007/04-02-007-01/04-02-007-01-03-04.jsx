import React from "react";

const SvgComponent = (props) => (
  <svg width={8} height={8} {...props}>
    <path d="M0 8V2.344h1V7h4.656v1H0z" />
    <path d="M1.414 3.757L4.95.222l.707.707L2.12 4.464l-.707-.707zM3.536 5.879L7.07 2.343l.707.707-3.535 3.536-.707-.707z" />
  </svg>
);

export default SvgComponent;
