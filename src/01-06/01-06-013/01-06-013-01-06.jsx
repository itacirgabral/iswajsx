import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 5h15v15H0z" />
    <path d="M15 9v3H0V9h15z" fill="#fff" />
    <path d="M18.156 0L21 2.813l-6 6V5h-1.813l4.97-5z" />
  </svg>
);

export default SvgComponent;
