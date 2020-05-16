import React from "react";

const SvgComponent = (props) => (
  <svg width={12} height={22} {...props}>
    <path d="M2 0h2v22H2V0zM8 0h2v22H8V0z" />
    <path d="M4 0v22h4V0H4z" fill="#fff" />
    <path d="M3 16l-3 6h12l-3-6H3z" />
  </svg>
);

export default SvgComponent;
