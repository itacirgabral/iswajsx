import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 0h15v15H0z" />
    <path d="M0 4v3h3.5a2.5 2.5 0 104 0H15V4H0z" fill="#fff" />
    <path d="M5.5 6c-.822 0-1.544.388-2 1h4a2.477 2.477 0 00-2-1z" />
  </svg>
);

export default SvgComponent;