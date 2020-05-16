import React from "react";

const SvgComponent = (props) => (
  <svg width={9} height={9} {...props}>
    <path d="M9 9V1.929H7.984v6.055H1.929V9H9z" />
    <path d="M7.586 4.757l-.707.707-4.243-4.242.707-.707 4.243 4.242zM5.464 6.879l-.707.707L.515 3.343l.707-.707 4.242 4.243z" />
  </svg>
);

export default SvgComponent;
