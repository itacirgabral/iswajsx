import React from "react";

const SvgComponent = (props) => (
  <svg width={13} height={15} {...props}>
    <path d="M3 0h2v15H3V0zM8 0h2v15H8V0z" />
    <path d="M5 0v15h3V0H5z" fill="#fff" />
    <path d="M0 6v3h13V6H0z" />
  </svg>
);

export default SvgComponent;
