import React from "react";

const SvgComponent = (props) => (
  <svg width={12} height={34} {...props}>
    <path d="M2 0h2v34H2V0zM8 0h2v34H8V0z" />
    <path d="M4 0v34h4V0H4z" fill="#fff" />
    <path d="M6 11.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11z" />
  </svg>
);

export default SvgComponent;
