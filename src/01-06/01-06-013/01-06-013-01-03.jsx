import React from "react";

const SvgComponent = (props) => (
  <svg width={21} height={20} {...props}>
    <path d="M0 5h15v15H0z" />
    <path d="M18.156 0L21 2.813l-6 6V5h-1.813l4.97-5z" />
  </svg>
);

export default SvgComponent;
