import React from "react";

const SvgComponent = (props) => (
  <svg width={11} height={15} {...props}>
    <path d="M2 0h2v15H2V0zM7 0h2v15H7V0z" />
    <path d="M4 0v15h3V0H4z" fill="#fff" />
    <path d="M3 9l-3 6h11L8 9H3z" />
  </svg>
);

export default SvgComponent;
