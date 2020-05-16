import React from "react";

const SvgComponent = (props) => (
  <svg width={9} height={9} {...props}>
    <path d="M9 9V1.929H7.984v6.055H1.929V9H9z" />
    <path d="M5.464 6.879L1.222 2.636l-.707.707 4.242 4.243.707-.707zM7.586 4.757L3.343.515l-.707.707 4.243 4.242.707-.707z" />
  </svg>
);

export default SvgComponent;
