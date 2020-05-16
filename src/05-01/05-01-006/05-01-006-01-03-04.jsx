import React from "react";

const SvgComponent = (props) => (
  <svg width={12} height={12} {...props}>
    <path d="M10.585 4.243l-.707-.707L2.1 11.314l.707.707zM8.464 2.121l-.707-.707-7.778 7.778.707.707z" />
    <path fill="#fff" d="M9.878 3.536L8.464 2.12.686 9.9 2.1 11.314z" />
    <path d="M12 0v7.071h-1.016V1.016H4.929V0H12z" />
  </svg>
);

export default SvgComponent;
