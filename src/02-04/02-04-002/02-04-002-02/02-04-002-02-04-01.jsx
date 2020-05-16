import React from "react";

const SvgComponent = (props) => (
  <svg width={10} height={22} {...props}>
    <path d="M1 0h2v22H1V0zM7 0h2v22H7V0z" />
    <path d="M3 0v22h4V0H3z" fill="#fff" />
    <path d="M5 6.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" />
  </svg>
);

export default SvgComponent;
