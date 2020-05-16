import React from "react";

const SvgComponent = (props) => (
  <svg width={23} height={15} {...props}>
    <path d="M15 0v15h8V0h-8z" />
    <path fill="#fff" d="M16 1h4v13h-4z" />
    <path d="M0 0h13v4H0zM19 10h-3V7h3v3z" />
  </svg>
);

export default SvgComponent;
