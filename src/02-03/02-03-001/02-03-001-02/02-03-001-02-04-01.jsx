import React from "react";

const SvgComponent = (props) => (
  <svg width={8} height={22} {...props}>
    <path d="M0 0h2v22H0V0zM6 0h2v22H6V0z" />
    <path d="M2 0v22h4V0H2z" fill="#fff" />
  </svg>
);

export default SvgComponent;
