import React from "react";

const SvgComponent = (props) => (
  <svg width={8} height={8} {...props}>
    <path d="M8 8V2.344H7V7H2.344v1H8z" />
    <path d="M6.586 3.757L3.05.222l-.707.707L5.88 4.464l.707-.707zM4.464 5.879L.93 2.343l-.707.707 3.535 3.536.707-.707z" />
  </svg>
);

export default SvgComponent;
